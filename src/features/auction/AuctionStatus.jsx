import styles from "./AuctionStatus.module.css";
import { formatCurrency } from "../../utils/helper";

function AuctionStatus({ status, basePrice }) {
  return (
    <div className={styles.statusConatiner}>
      <p>
        <strong>Status: </strong>
        {status}
      </p>
      <p>
        <strong>Base Price: </strong>
        {formatCurrency(basePrice)}
      </p>
    </div>
  );
}

export default AuctionStatus;
