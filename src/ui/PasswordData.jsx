import Button from "./buttons/Button";
import styles from "./PasswordData.module.css";
function PasswordData() {
  return (
    <form className={styles.passwordInfo}>
      <div>
        <label htmlFor="currentPassword">Current Password</label>
        <input
          type="password"
          name="currentPassword"
          id="currentPassword"
          placeholder="Enter current password"
        />
      </div>
      <div>
        <label htmlFor="newPassword">New Password</label>
        <input
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Enter new password"
        />
      </div>
      <div>
        <label htmlFor="newConfirmPassword">Confrim Password</label>
        <input
          type="password"
          name="newConfirmPassword"
          id="newConfirmPassword"
          placeholder="Enter confirm password"
        />
      </div>
      <div className={styles.buttons}>
        <Button type="secondary" role="reset">
          Cancel
        </Button>
        <Button type="update">Update</Button>
      </div>
    </form>
  );
}

export default PasswordData;
