import styles from "./NoBid.module.css";

function NoBid() {
  return (
    <div className={styles.container}>
      <p className={styles.message}>No bids placed for this product yet.</p>
    </div>
  );
}

export default NoBid;
