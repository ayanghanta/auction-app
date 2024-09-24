import styles from "./CurrentBider.module.css";
function CurrentBider({ product }) {
  return (
    <div className={styles.bidDetails}>
      <h2>
        Current Bid: <strong>{product.latestBid}.00</strong>
      </h2>
      <div>
        <img
          src={product.latestBidder.image}
          alt={`image of ${product.latestBidder.name}`}
        />
        <p>{product.latestBidder.name}</p>
      </div>
    </div>
  );
}

export default CurrentBider;
