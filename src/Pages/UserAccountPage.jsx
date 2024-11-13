import Button from "../ui/buttons/Button";
import styles from "./UserAccountPage.module.css";
import UserAccount from "../features/user/UserAccount";

function UserAccountPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Manage Your Account</h1>
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
