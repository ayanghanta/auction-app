import { useForm } from "react-hook-form";
import Button from "./buttons/Button";
import styles from "./UserPasswordInfo.module.css";
import InputError from "./InputError";
import SmallSpinner from "./SmallSpinner";
import { useUpdatePassword } from "../features/user/useUpdatePassword";

function UserPasswordInfo() {
  const { register, reset, getValues, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { updatePassword, isLoading } = useUpdatePassword();

  function onSubmit(data) {
    updatePassword(
      { ...data },
      {
        onSettled: () => {
          reset();
        },
      }
    );
  }
  return (
    <form className={styles.passwordInfo} onSubmit={handleSubmit(onSubmit)}>
      <h2>Update your password</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          id="currentPassword"
          placeholder="Enter current password"
          {...register("currentPassword", {
            required: "This is filed is required",
          })}
        />
        <InputError error={errors?.currentPassword?.message} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">New Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter new password"
          {...register("password", {
            required: "This is filed is required",
            minLength: {
              value: 8,
              message: "Password must be 8 character long",
            },
          })}
        />
        <InputError error={errors?.password?.message} />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirmPassword">Confrim Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Enter confirm password"
          {...register("confirmPassword", {
            required: "This is filed is required",
            validate: (cPassword) =>
              cPassword === getValues().password ||
              "Password and confirm pasword must be same",
          })}
        />
        <InputError error={errors?.confirmPassword?.message} />
      </div>
      <div className={styles.buttons}>
        <Button type="secondary" role="reset">
          Cancel
        </Button>
        <Button type="update" role="submit" disabled={isLoading}>
          {isLoading ? <SmallSpinner /> : "Update"}
        </Button>
      </div>
    </form>
  );
}

export default UserPasswordInfo;
