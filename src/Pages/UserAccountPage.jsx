import Button from "../ui/buttons/Button";
import styles from "./UserAccountPage.module.css";
import UserAccount from "../features/user/UserAccount";

function UserAccountPage() {
  return (
    <div>
      <div className={styles.header}>
        <h1>Manage Your Account</h1>
        <div className={styles.buttons}>
          <Button type="primary" to="/app/myProducts">
            See your product details
          </Button>
          <Button type="primary" to="/app/addProduct">
            Sell your product &rarr;
          </Button>
        </div>
      </div>

      <UserAccount />
    </div>
  );
}

export default UserAccountPage;
