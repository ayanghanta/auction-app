import styles from "./AuctionStatus.module.css";
import { formatCurrency, formatDate } from "../../utils/helper";

function AuctionStatus({ basePrice, shippingTime, auctionsEndsAt }) {
  return (
    <div className={styles.statusConatiner}>
      <p>
        <strong>Base Price: </strong>
        {formatCurrency(basePrice)}
      </p>
      <p>
        <strong> Auction Ends: </strong>
        {formatDate(auctionsEndsAt)}
      </p>
      <p>
        <strong>Shipping Time: </strong>
        {shippingTime}
      </p>
    </div>
  );
}

export default AuctionStatus;
