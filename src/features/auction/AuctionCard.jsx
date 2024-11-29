import { Link } from "react-router-dom";
import styles from "./AuctionCard.module.css";
import CollapsText from "../../utils/CollapsText";
import Button from "../../ui/buttons/Button";
import { formatCurrency } from "../../utils/helper";
import { PRODUCT_IMG_URL } from "../../constant";

function AuctionCard({ product }) {
  const { basePrice, coverImage, summary, title, _id, latestBid } = product;

  return (
    <div className={styles.auctionCard}>
      <img
        src={`${PRODUCT_IMG_URL}/${coverImage}`}
        alt={`image of ${title}`}
        className={styles.image}
      />
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.summary}>
          <CollapsText>{summary}</CollapsText>
        </p>
        <div className={styles.pricing}>
          <p>Base Price: {formatCurrency(basePrice)}</p>
          {latestBid && <p>Latest Bid: {formatCurrency(latestBid)}</p>}
        </div>
        <div className={styles.cta}>
          <Link to={`/auctions/${_id}`}>
            <Button type="primary">Place a Bid</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuctionCard;
