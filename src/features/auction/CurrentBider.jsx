import { formatCurrency } from "../../utils/helper";
import styles from "./CurrentBider.module.css";
function CurrentBider() {
  return (
    <div className={styles.bidDetails}>
      <h2>
        Current Bid: <strong>{formatCurrency(9999)}</strong>
      </h2>
      <div>
        <img src="/users/user-1.jpg" alt={`image of `} />
        <p>Ayan Ghanta</p>
      </div>
    </div>
  );
}

export default CurrentBider;
