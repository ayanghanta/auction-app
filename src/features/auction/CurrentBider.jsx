import { formatCurrency } from "../../utils/helper";
import { useGetBidDetail } from "../bid/useGetBidDetail";
import Spinner from "../../ui/Spinner";
import styles from "./CurrentBider.module.css";
import { BASE_URL } from "../../constant";
import { useCurrentBidder } from "../../contexts/CurrentBidderContext";
import { useEffect } from "react";
import NoBid from "../bid/NoBid";

const IMAGE_URL = `${BASE_URL}/images/users`;

function CurrentBider({ bidId }) {
  const { data, isLoading } = useGetBidDetail(bidId);
  const {
    isLoading: isLoadingContext,
    currnetBidData,
    dispatch,
  } = useCurrentBidder();

  useEffect(
    function () {
      if (isLoading) return dispatch({ type: "loading" });
      if (!data) return dispatch({ type: "sattel" });
      const bidderData = {
        fullName: data.bid.bidder.fullName,
        photo: data.bid.bidder.photo,
        bidAmount: data.bid.bidAmount,
      };

      dispatch({ type: "updateCurrentBidder", payload: bidderData });
    },
    [dispatch, data, isLoading, bidId]
  );

  if (isLoading || isLoadingContext) return <Spinner />;
  if (!currnetBidData.bidAmount) return <NoBid />;

  const { fullName, photo, bidAmount } = currnetBidData;

  return (
    <div className={styles.bidDetails}>
      <div>
        <img src={`${IMAGE_URL}/${photo}`} alt={`image of ${fullName}`} />
        <p>{fullName}</p>
      </div>
      <h2>
        Current Bid: <strong>{formatCurrency(bidAmount)}</strong>
      </h2>
    </div>
  );
}

export default CurrentBider;
