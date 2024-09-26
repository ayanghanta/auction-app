import Button from "../../ui/buttons/Button";
import styles from "./UserAccount.module.css";

function UserAccount() {
  return (
    <div className={styles.accountContainer}>
      <div className={styles.userdata}>
        <div className={styles.imgContainer}>
          <img src="/users/user-1.jpg" alt="image of USER" />
          <Button type="primary">Change Porfile Photo</Button>
        </div>
        <div className={styles.userNames}>
          <input type="text" defaultValue={"USERNAME"} />
          <input type="email" defaultValue={"USERNAME_EMIAL"} />
          <Button type="update">Update</Button>
        </div>
      </div>
      <h3>Your Address</h3>

      <div className={styles.addressBox}>
        <div>
          <span className={styles.tag}>Home</span>
          <p className={styles.userText}>User Name 9896574435</p>
          <p className={styles.addresstext}>
            2 krishna das pal len, Tark paramanick road, Kolkata, West Bengal -
            <strong> 700006</strong>
          </p>
        </div>
        <p></p>
        {/* <Button type="update">Change Address</Button> */}
      </div>
      <div>
        <p>Winings</p>
      </div>
    </div>
  );
}

export default UserAccount;
