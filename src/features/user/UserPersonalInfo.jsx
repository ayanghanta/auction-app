import AddressData from "../../ui/AddressData";
import PasswordData from "../../ui/PasswordData";
import PersonalData from "../../ui/PersonalData";
import styles from "./UserPersonalInfo.module.css";
function UserPersonalInfo() {
  return (
    <div className={styles.userPersonalInfos}>
      <div className={styles.headers}>
        <p>Personal Info</p>
        <p className={styles.active}>Password</p>
        <p>Address</p>
      </div>
      <AddressData />
      {/* <PersonalData /> */}
      {/* <PasswordData /> */}
    </div>
  );
}

export default UserPersonalInfo;
