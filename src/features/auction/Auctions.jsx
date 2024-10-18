import { getAllAuctions } from "../../services/apiAuctions";
import AuctionCard from "./AuctionCard";
import styles from "./Auctions.module.css";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../ui/Spinner";

function Auctions() {
  const {
    data: auctions,
    status,
    isLoading,
  } = useQuery({
    queryKey: ["auctions"],
    queryFn: getAllAuctions,
  });

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.auctionCards}>
      {auctions.map((product) => (
        <AuctionCard product={product} key={product._id} />
      ))}
    </div>
  );
}

export default Auctions;
