import { Link } from "react-router-dom";
import styles from "./AuctionCard.module.css";
import CollapsText from "../../utils/CollapsText";

function AuctionCard({ product }) {
  return (
    <div className={styles.auctionCard}>
      <img src={product.image} alt={`image of ${product.title}`} />
      <div className={styles.details}>
        <h2>{product.title}</h2>
        <p>
          <CollapsText>{product.description}</CollapsText>
        </p>
        <p>Status: {product.status}</p>
        <div>
          <p>Base Price: {product.basePrice}</p>
          {product.latestBid && <p>LatestBid: {product.latestBid}</p>}
        </div>

        <button>
          <Link to={`/product/${product.id}`}>Place a Bid</Link>
        </button>
      </div>
    </div>
  );
}

export default AuctionCard;
