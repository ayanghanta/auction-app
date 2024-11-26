import { useEffect, useState } from "react";
import Button from "../../ui/buttons/Button";
import { useSocketClient } from "../hooks/useSocketClient";
import styles from "./CreateBid.module.css";
import { HIKE } from "../../constant";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useUser } from "../auth/useUser";
import { useCurrentBidder } from "../../contexts/CurrentBidderContext";

function CreateBid({ currentBidAmount, bidDetail }) {
  const { socketClient } = useSocketClient();
  const [minBidAmount, setMinBidAmount] = useState(function () {});
  const [amount, setAmount] = useState("");
  const { id: productId } = useParams();
  const { user, isLoading } = useUser();
  const { dispatch, currnetBidData } = useCurrentBidder();

  // LISTEN FOR ANY BID EVENT
  useEffect(
    function () {
      if (!socketClient) return;

      socketClient.on("bidAccepted", (data) => {
        const bidderData = {
          fullName: data.bidder.fullName,
          photo: data.bidder.photo,
          bidAmount: data.bidAmount,
        };
        dispatch({ type: "updateCurrentBidder", payload: bidderData });
      });
    },
    [socketClient, dispatch]
  );

  function handleSubmitBid() {
    if (!amount || isLoading) toast.error("Enter ammount");
    if (!socketClient) return;

    const newBidData = { amount, bidder: user._id };
    const data = {
      productId,
      newBidData,
    };
    // Emmit event for the server
    socketClient.emit("placeBid", data);
  }

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          min={currnetBidData.bidAmount || currentBidAmount}
          className={styles.input}
        />
        <Button
          type="primary"
          size="big"
          className={styles.submitButton}
          onClick={handleSubmitBid}
        >
          BID For the Product
        </Button>
      </div>
    </div>
  );
}

export default CreateBid;
