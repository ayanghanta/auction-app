import { Link } from "react-router-dom";
import styles from "./AuctionCard.module.css";
import CollapsText from "../../utils/CollapsText";
import Button from "../../ui/buttons/Button";

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

        <Link to={`/product/${product.id}`}>
          <Button type="primary"> Place a Bid</Button>
        </Link>
      </div>
    </div>
  );
}

export default AuctionCard;
