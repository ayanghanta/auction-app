import { useLoaderData } from "react-router-dom";
import { getAllAuctions } from "../../services/apiAuctions";
import AuctionCard from "./AuctionCard";
function Auctions() {
  const auctions = useLoaderData();

  return (
    <div>
      {auctions.map((product) => (
        <AuctionCard product={product} key={product.id} />
      ))}
    </div>
  );
}
export async function loader() {
  const auctions = await getAllAuctions();
  return auctions;
}

export default Auctions;
