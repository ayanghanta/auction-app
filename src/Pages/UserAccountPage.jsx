import Address from "../ui/Address";
import Button from "../ui/buttons/Button";
import styles from "./UserAccountPage.module.css";
import UserPersonalInfo from "../features/user/UserPersonalInfo";

function UserAccountPage() {
  return (
    <div>
      <div className={styles.userIntro}>
        <img src="/users/user-1.jpg" alt="image of USER" />
        <p>Ayan Ghanta</p>
      </div>
      <UserPersonalInfo />
    </div>
  );
}

export default UserAccountPage;
