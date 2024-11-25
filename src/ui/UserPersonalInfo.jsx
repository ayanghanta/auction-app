import { BASE_URL } from "../constant";
import styles from "./UserPersonalInfo.module.css";
import Button from "./buttons/Button";
import { useState } from "react";
import { useUpdateUser } from "../features/user/useUpdateUser";
import SmallSpinner from "./SmallSpinner";
import { useForm } from "react-hook-form";

function UserPersonalInfo({ user }) {
  const [isChangeProfileData, setIsChangeProfileData] = useState(false);
  const { updateUser, isLoading } = useUpdateUser();
  const { register, handleSubmit } = useForm({
    defaultValues: { ...user, photo: "" },
  });

  function handleChange() {
    setIsChangeProfileData((c) => !c);
  }

  function onSubmit(data) {
    const formData = new FormData();

    Object.keys(data).forEach((filed) => {
      if (filed !== "photo") return formData.append(filed, data[filed]);
      if (filed === "photo" && data.photo[0]) {
        formData.append("photo", data.photo[0]);
      }
    });

    updateUser(formData, {
      onSettled: () => {
        setIsChangeProfileData((c) => !c);
      },
    });
  }
  return (
    <form className={styles.infoContainer} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.imageContainer}>
        <img
          src={`${BASE_URL}/images/users/${user.photo}`}
          alt="image of USER"
        />

        {isChangeProfileData && <input type="file" {...register("photo")} />}
      </div>
      <div className={styles.infoData}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            disabled={isLoading || !isChangeProfileData}
            {...register("fullName", {
              required: "This filed is required",
            })}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone No</label>
          <input
            type="text"
            id="phoneNumber"
            disabled={isLoading || !isChangeProfileData}
            {...register("phoneNumber")}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            disabled={isLoading || !isChangeProfileData}
            {...register("email", {
              required: "This filed is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email",
              },
            })}
          />
        </div>
      </div>
      <div className={styles.buttns}>
        {isChangeProfileData ? (
          <>
            <Button type="secondary" onClick={handleChange}>
              Cancel
            </Button>
            <Button type="update" role="submit" disabled={isLoading}>
              {isLoading ? <SmallSpinner /> : " Update"}
            </Button>
          </>
        ) : (
          <Button type="primary" size="mid" onClick={handleChange}>
            Update profile
          </Button>
        )}
      </div>
    </form>
  );
}

export default UserPersonalInfo;
