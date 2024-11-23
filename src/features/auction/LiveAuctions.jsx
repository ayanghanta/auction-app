import AuctionCard from "./AuctionCard";
import styles from "./Auctions.module.css";
import Spinner from "../../ui/Spinner";
import PaginationBox from "../../ui/PaginationBox";
import { RES_PER_PAGE_HOME } from "../../constant";
import { useAuctions } from "./useAuctions";
import EmptyPage from "../../ui/EmptyPage";

function Auctions() {
  const { auctions, isLoading, totalSize } = useAuctions(true);

  if (isLoading) return <Spinner />;

  if (auctions.length === 0 || !auctions) return <EmptyPage />;

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
