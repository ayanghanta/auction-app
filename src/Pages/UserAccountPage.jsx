import Address from "../ui/Address";
import Button from "../ui/buttons/Button";
import styles from "./UserAccountPage.module.css";
import UserAccount from "../features/user/UserAccount";

function UserAccountPage() {
  return (
    <div>
      <div className={styles.userIntro}>
        <img src="/users/user-1.jpg" alt="image of USER" />
        <p>Ayan Ghanta</p>
      </div>
      <UserAccount />
    </div>
  );
}

export default UserAccountPage;
