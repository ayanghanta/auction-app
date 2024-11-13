import { BASE_URL } from "../constant";
import styles from "./UserPersonalInfo.module.css";
import Button from "./buttons/Button";
import { useState } from "react";
import { useUpdateUser } from "../features/user/useUpdateUser";
import SmallSpinner from "./SmallSpinner";

function UserPersonalInfo({ user }) {
  // const { fullName:, email, photo } = user;
  const [fullName, setFullname] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const { updateUser, isLoading } = useUpdateUser();

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName || !email) return;

    updateUser({ fullName, email, phoneNumber });
  }

  return (
    <div className={styles.infoContainer}>
      <div className={styles.imageContainer}>
        <img
          src={`${BASE_URL}/images/users/${user.photo}`}
          alt="image of USER"
        />

        <Button type="update">Upadte Photo</Button>
      </div>
      <form className={styles.infoData} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="userName"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="phoneNo">Phone No</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNo"
            disabled={isLoading}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.buttns}>
          <Button type="secondary" role="reset">
            Cancel
          </Button>
          <Button type="update" role="submit" disabled={isLoading}>
            {isLoading ? <SmallSpinner /> : " Update"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserPersonalInfo;
