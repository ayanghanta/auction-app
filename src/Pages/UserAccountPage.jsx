import Address from "../ui/Address";
import Button from "../ui/buttons/Button";
import styles from "./UserAccountPage.module.css";
import UserAccount from "../features/user/UserAccount";
import { Link } from "react-router-dom";

function UserAccountPage() {
  return (
    <div>
      <div className={styles.userIntro}>
        <img src="/users/user-1.jpg" alt="image of USER" />
        <p>Ayan Ghanta</p>
      </div>
      <UserAccount />
      <div className="text-right mr-sm">
        <Button type="primary" to="/addProduct">
          Sell your product &rarr;
        </Button>
      </div>
    </div>
  );
}

export default UserAccountPage;
