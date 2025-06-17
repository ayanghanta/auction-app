import Button from "../ui/buttons/Button";
import styles from "./UserAccountPage.module.css";
import UserAccount from "../features/user/UserAccount";
import { useUser } from "../features/auth/useUser";

function UserAccountPage() {
  const { user, isLoading } = useUser();
  return (
    <div>
      <div className={styles.header}>
        <h1>Manage Your Account</h1>
        {user?.role === "user" ? (
          <div className={styles.buttons}>
            <Button type="primary" to="/app/myProducts">
              See your product details
            </Button>
            <Button type="primary" to="/app/addProduct">
              Sell your product &rarr;
            </Button>{" "}
            :
          </div>
        ) : isLoading ? null : (
          <p className={styles.adminText}>
            Admin can not List any product to auction
          </p>
        )}
      </div>

      <UserAccount />
    </div>
  );
}

export default UserAccountPage;
