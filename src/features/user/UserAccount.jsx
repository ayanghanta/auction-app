import UserAddressPage from "../../ui/UserAddressPage";
import UserPasswordInfo from "../../ui/UserPasswordInfo";
import UserPersonalInfo from "../../ui/UserPersonalInfo";
import styles from "./UserAccount.module.css";

function UserAccount() {
  return (
    <div className={styles.userPersonalInfos}>
      <div className={styles.headers}>
        <p>Personal Info</p>
        <p>Password</p>
        <p className={styles.active}>Address</p>
      </div>
      <UserAddressPage />
      {/* <UserPasswordInfo />
      <UserPersonalInfo /> */}
    </div>
  );
}

export default UserAccount;
