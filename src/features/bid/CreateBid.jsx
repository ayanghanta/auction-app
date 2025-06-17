import { useEffect, useState } from "react";
import Button from "../../ui/buttons/Button";
import { useSocketClient } from "../hooks/useSocketClient";
import styles from "./CreateBid.module.css";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useUser } from "../auth/useUser";
import { useCurrentBidder } from "../../contexts/CurrentBidderContext";
import { calcMinBidPrice } from "../../utils/helper";
import SmallSpinner from "../../ui/SmallSpinner";

function CreateBid({ basePrice, currentBidDeails }) {
  const [minBidAmount, setMinBidAmount] = useState(function () {
    return currentBidDeails
      ? calcMinBidPrice(currentBidDeails.bidAmount)
      : basePrice;
  });
  const [amount, setAmount] = useState(minBidAmount);
  const [isBidLoading, setIsBidLoading] = useState(false);
  const { id: productId } = useParams();
  const { user, isLoading } = useUser();
  const { dispatch, currnetBidData } = useCurrentBidder();
  const { socketClient } = useSocketClient(setIsBidLoading);

  // LISTEN FOR ANY BID EVENT
  useEffect(
    function () {
      if (!socketClient) return;

      function handleBidAccepted(data) {
        const bidderData = {
          fullName: data.bidder.fullName,
          photo: data.bidder.photo,
          bidAmount: data.bidAmount,
          bidderId: data.bidder._id,
        };
        dispatch({ type: "updateCurrentBidder", payload: bidderData });
        setAmount(calcMinBidPrice(data.bidAmount));
        setMinBidAmount(calcMinBidPrice(data.bidAmount));
        setIsBidLoading(false);

        // ONLY SEND NOTIFICATION TO THE BIDDER
        if (user?._id === data.bidder._id)
          toast.success("You are now the highest bidder 🎉");
      }

      function handleBidError(err) {
        toast.error(err.message);
        setIsBidLoading(false);
      }

      //LISTEN FOR THE SERVER EVENT FOR BID ACCEPETED
      socketClient.on("bidAccepted", handleBidAccepted);

      // LISTEN FOR ANY BID ERROR
      socketClient.on("bidError", handleBidError);

      return () => {
        socketClient.off("bidAccepted", handleBidAccepted);
        socketClient.off("bidError", handleBidError);
      };
    },
    [socketClient, dispatch, user]
  );

  function handleSubmitBid() {
    if (!amount || isLoading) toast.error("Enter ammount");
    if (!socketClient) return;

    const newBidData = { amount, bidder: user?._id };
    const data = {
      productId,
      newBidData,
    };
    setIsBidLoading(true);
    // Emmit event for the server
    socketClient.emit("placeBid", data);
  }

  if (!user?._id) return null;

  if (currnetBidData.bidderId === user?._id)
    return (
      <p className={styles.currentBidderMessage}>
        You Are the Current Winner 🎊
      </p>
    );

  if (!isLoading && user.role === "admin")
    return (
      <div className={styles.adminResText}>
        <p className={styles.mainWarnText}>
          Admins cannot participate in the auction
        </p>
        <p className={styles.subtext}>
          This account is for administrative purposes only
        </p>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <p>Next Valid bid</p>
        <div>
          {/* <p className={styles.sing}>₹</p> */}
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            min={minBidAmount}
            className={styles.input}
            disabled={isBidLoading}
          />
        </div>
        <Button
          type="primary"
          className={styles.submitButton}
          onClick={handleSubmitBid}
        >
          {isBidLoading ? <SmallSpinner /> : "BID For the Product"}
        </Button>
      </div>
    </div>
  );
}

export default CreateBid;
