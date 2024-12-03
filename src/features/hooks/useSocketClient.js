import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BASE_URL } from "../../constant";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useSocketClient(setIsBidLoading) {
  const [socket, setSocket] = useState(null);
  const { id: productId } = useParams();

  useEffect(
    function () {
      const socketInstance = io(BASE_URL, {
        withCredentials: true,
      });
      setSocket(socketInstance);

      socketInstance.on("connect", () => {
        // console.log("websocket connection established ↔️");
        socketInstance.emit("joinRoom", productId);
      });

      socketInstance.on("AuthError", (err) => {
        toast.error(err.message);
        setIsBidLoading?.(false);
      });

      return () => {
        socketInstance.disconnect();
      };
    },
    [productId, setIsBidLoading]
  );

  return { socketClient: socket };
}
