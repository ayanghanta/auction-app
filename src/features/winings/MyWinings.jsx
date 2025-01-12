import Back from "../../ui/Back";
import styles from "./MyWinings.module.css";
function MyWinings() {
  return (
    <div className={styles.container}>
      <Back />
      <h2>Products You&apos;ve Won</h2>
      <div className={styles.winningCards}></div>
    </div>
  );
}

export default MyWinings;
