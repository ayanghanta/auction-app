import styles from "./MyBids.module.css";
import Back from "../../ui/Back";
import MyBidsCard from "./MyBidsCard";
import { useGetMyBids } from "./useGetMyBids";
import Spinner from "../../ui/Spinner";
import EmptyPage from "../../ui/EmptyPage";

function MyBids() {
  const { data: myBids, isLoading } = useGetMyBids();

  if (isLoading) return <Spinner />;

  if (myBids.length === 0) return <EmptyPage resourceName="BID" />;

  return (
    <div className={styles.container}>
      <Back />
      <h2>YOUR BIDS</h2>
      <div className={styles.bidCards}>
        {myBids.map((bidData) => (
          <MyBidsCard bidData={bidData} key={bidData._id} />
        ))}
      </div>
    </div>
  );
}

export default MyBids;
