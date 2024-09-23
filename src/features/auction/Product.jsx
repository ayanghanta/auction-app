import { useLoaderData } from "react-router-dom";
import { getProduct } from "../../services/apiAuctions";

function Product() {
  const product = useLoaderData();

  return (
    <div>
      <img src={product.image} alt={`image fo a ${product.title}`} />
      <div className="contant">
        <h1>{product.title}</h1>
        <p>{product.longDescription}</p>
        <div className="statusConatiner">
          <p>Status:{product.status}</p>
          <p>Base Price:{product.basePrice}</p>
        </div>

        {product.latestBidder && (
          <div className="bidDetails">
            <p>Current Bid: {product.letestBid}</p>
            <div>
              <img
                src={product.latestBidder.image}
                alt={`image of ${product.latestBidder.name}`}
              />
              <p>{product.latestBidder.name}</p>
            </div>
          </div>
        )}
        <button>BID For the Product</button>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const product = await getProduct(params.productId);
  return product;
}

export default Product;
