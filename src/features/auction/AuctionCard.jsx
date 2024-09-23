function AuctionCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={`image of ${product.title}`} />
      <div className="details">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Status: {product.status}</p>
        <div>
          <p>Base Price: {product.price}</p>
          {product.latestBid && <p>LatestBid: {product.latestBid}</p>}
        </div>
        <button>Place a Bid</button>
      </div>
    </div>
  );
}

export default AuctionCard;
