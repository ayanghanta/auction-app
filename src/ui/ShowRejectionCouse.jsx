import { IoAlertCircle } from "react-icons/io5";
import styles from "./ShowRejectionCouse.module.css";
function ShowRejectionCouse({ couse }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        <IoAlertCircle /> <span>Rejection Reason</span>
      </h3>
      <p className={styles.reason}>{couse}</p>
    </div>
  );
}

export default ShowRejectionCouse;
