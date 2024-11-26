import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { io } from "socket.io-client";

function AuctionPage() {
  const { id: productId } = useParams();

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketInstance = io("http://localhost:3000", {
      withCredentials: true,
    });

    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      console.log("Connected to backend!");
      socketInstance.emit("joinRoom", productId);
    });

    socketInstance.on("hello", (data) => {
      console.log(data);
    });

    socketInstance.on("AuthError", (error) => {
      console.error(error.message);
    });

    return () => {
      socketInstance.disconnect();
    };
  }, [productId]);

  const [bidAmount, setBidAmount] = useState("");

  function handleBid() {
    if (!bidAmount || !socket) return;
    socket.emit("placeBid", { bidAmount });
  }

  return (
    <div>
      <h1>Websocket test</h1>
      <div>
        highest bid for {"0"} user :{"A"}
      </div>
      <div>
        <input
          type="number"
          onChange={(e) => setBidAmount(+e.target.value)}
          value={bidAmount}
        />
        <button onClick={handleBid}>Bid</button>
      </div>
    </div>
  );
}

export default AuctionPage;
