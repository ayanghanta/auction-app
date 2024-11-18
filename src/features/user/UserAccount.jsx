import { useState } from "react";
import UserAddressPage from "../../ui/UserAddressPage";
import UserPasswordInfo from "../../ui/UserPasswordInfo";
import UserPersonalInfo from "../../ui/UserPersonalInfo";
import styles from "./UserAccount.module.css";
import { useUser } from "../auth/useUser";
import Spinner from "../../ui/Spinner";

function UserAccount() {
  const [userInfoTab, setUserInfoTab] = useState("personalInfo");
  const { isLoading, user } = useUser();

  function handleClcikTab(info) {
    setUserInfoTab(info);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.userPersonalInfos}>
      <div className={styles.headers}>
        <p
          onClick={() => handleClcikTab("personalInfo")}
          className={userInfoTab === "personalInfo" ? styles.active : ""}
        >
          Personal Info
        </p>
        <p
          onClick={() => handleClcikTab("passwordInfo")}
          className={userInfoTab === "passwordInfo" ? styles.active : ""}
        >
          Password
        </p>
        <p
          onClick={() => handleClcikTab("addressInfo")}
          className={userInfoTab === "addressInfo" ? styles.active : ""}
        >
          Address
        </p>
      </div>
      {userInfoTab === "personalInfo" && <UserPersonalInfo user={user} />}
      {userInfoTab === "passwordInfo" && <UserPasswordInfo />}
      {userInfoTab === "addressInfo" && <UserAddressPage user={user} />}
    </div>
  );
}

export default UserAccount;
