import AuctionCard from "./AuctionCard";
import styles from "./Auctions.module.css";
import Spinner from "../../ui/Spinner";
import PaginationBox from "../../ui/PaginationBox";
import { useAuctions } from "./useAuctions";
import { RES_PER_PAGE_HOME } from "../../constant";

function Auctions() {
  const { auctions, isLoading, totalSize } = useAuctions();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <div className={styles.auctionCards}>
        {auctions.map((product) => (
          <AuctionCard product={product} key={product._id} />
        ))}
      </div>
      <PaginationBox totalSize={totalSize} resPerPage={RES_PER_PAGE_HOME} />
    </div>
  );
}

export default Auctions;
