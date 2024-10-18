import styles from "./AddressData.module.css";
import Button from "./buttons/Button";
function AddressData() {
  return (
    <div className={styles.addressInfo}>
      <div className={styles.addressBox}>
        <div>
          <span className={styles.tag}>Home</span>
          <p className={styles.userText}>User Name 9896574435</p>
          <p className={styles.addresstext}>
            2 krishna das pal len, Tark paramanick road, Kolkata, West Bengal -
            <strong> 700006</strong>
          </p>
        </div>
        <p>Edit</p>
        {/* <Button type="update">Change Address</Button> */}
      </div>
      <div className={styles.buttons}>
        <Button type="primary">+ Add Address</Button>
      </div>
    </div>
  );
}

export default AddressData;
