import { formatCurrency } from "../../utils/helper";
import Spinner from "../../ui/Spinner";
import styles from "./CurrentBider.module.css";
import { USER_IMG_URL } from "../../constant";
import { useCurrentBidder } from "../../contexts/CurrentBidderContext";
import { useEffect } from "react";
import NoBid from "../bid/NoBid";

function CurrentBider({ currentBidDeails }) {
  const {
    isLoading: isLoadingContext,
    currnetBidData,
    dispatch,
  } = useCurrentBidder();

  useEffect(
    function () {
      if (!currentBidDeails) return;
      dispatch({ type: "loading" });
      const bidderData = {
        fullName: currentBidDeails.bidder.fullName,
        photo: currentBidDeails.bidder.photo,
        bidAmount: currentBidDeails.bidAmount,
        bidderId: currentBidDeails.bidder._id,
      };

      dispatch({ type: "updateCurrentBidder", payload: bidderData });
    },
    [dispatch, currentBidDeails]
  );

  if (isLoadingContext) return <Spinner />;
  if (!currentBidDeails && !currnetBidData.bidAmount) return <NoBid />;

  const { fullName, photo, bidAmount } = currnetBidData;

  return (
    <div className={styles.bidDetails}>
      <div>
        <img src={`${USER_IMG_URL}/${photo}`} alt={`image of ${fullName}`} />
        <p>{fullName}</p>
      </div>
      <h2>
        Current Bid: <strong>{formatCurrency(bidAmount)}</strong>
      </h2>
    </div>
  );
}

export default CurrentBider;
