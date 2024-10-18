import { Link } from "react-router-dom";
import styles from "./AuctionCard.module.css";
import CollapsText from "../../utils/CollapsText";
import Button from "../../ui/buttons/Button";
import { formatCurrency } from "../../utils/helper";

const IMAGE_URL = "http://localhost:3000/images/products";

function AuctionCard({ product }) {
  const {
    basePrice,
    coverImage,
    summary,
    status: auctionStatus,
    title,
  } = product;
  return (
    <div className={styles.auctionCard}>
      <img src={`${IMAGE_URL}/${coverImage}`} alt={`image of ${title}`} />
      <div className={styles.details}>
        <h2>{title}</h2>
        <p>
          <CollapsText>{summary}</CollapsText>
        </p>
        <p>Status: {auctionStatus}</p>
        <div>
          <p>Base Price: {formatCurrency(basePrice)}</p>
          {product.latestBid && <p>LatestBid: {formatCurrency(0)}</p>}
        </div>

        <Link to={`/auctions/${product._id}`}>
          <Button type="primary"> Place a Bid</Button>
        </Link>
      </div>
    </div>
  );
}

export default AuctionCard;
