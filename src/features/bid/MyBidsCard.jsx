import { formatCurrency, formatDate } from "../../utils/helper";
import styles from "./MyBidsCard.module.css";
import { PRODUCT_IMG_URL } from "../../constant";
import Button from "../../ui/buttons/Button";

function MyBidsCard({ bidData }) {
  const { bidStatus, myLatestBid, leatestBidAt, productId } = bidData;

  const { title, coverImage, basePrice } = bidData.auctionDetails.at(0);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={`${PRODUCT_IMG_URL}/${coverImage}`}
          alt={`image of ${title}`}
        />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.basePrice}>
          Base Price: {formatCurrency(basePrice)}
        </p>
        <p className={styles.yourBidPrice}>
          Your Bid Price: {formatCurrency(myLatestBid)}
        </p>
        <p className={styles.time}>
          Last Bid Placed on {formatDate(leatestBidAt, true)}
        </p>
      </div>
      <div className={styles.statusContainer}>
        {bidStatus === "winning" ? (
          <span className={`${styles.statusTag} ${styles.winning}`}>
            YOU WINNING ⚡
          </span>
        ) : (
          <span className={`${styles.statusTag} ${styles.outbid}`}>OUTBID</span>
        )}
        <Button size="small" type="primary" to={`/auctions/${productId}`}>
          {bidStatus === "winning" ? "View Auction" : "Bid now"}
        </Button>
      </div>
    </div>
  );
}

export default MyBidsCard;
