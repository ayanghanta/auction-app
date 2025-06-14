import styles from "./CheckOutButton.module.css";
import { IoCard } from "react-icons/io5";
import { BASE_URL } from "../../constant";

const API_URL = `${BASE_URL}/api/v1/payments`;

import { initializePaddle } from "@paddle/paddle-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function CheckOutButton({ productId, addressId }) {
  const [paddle, setPaddle] = useState("");

  useEffect(function () {
    initializePaddle({
      environment: "sandbox",
      token: "test_2d0940e1e02188c748264a1861a",
    }).then((paddle) => setPaddle(paddle));
  }, []);

  // NOTEME: THIS PRICE MUST BE REMOVE FORM THE CLINET
  const handleCheckout = async () => {
    if (!paddle) return;
    if (!productId || !addressId) return;
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          productId,
          addressId,
        }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("error in paymnet");

      const responceData = await res.json();

      const data = responceData.data;

      paddle.Checkout.open({
        transactionId: data.transaction,
        settings: {
          displayMode: "overlay",
          successUrl: "http://localhost:5173/app/thank-you",
        },
      });
    } catch (err) {
      console.error("Error creating checkout session", err);
      toast.error(err.message);
    }
  };
  return (
    <button onClick={handleCheckout} className={styles.continueButton}>
      <IoCard />

      <span>Continue to pay</span>
    </button>
  );
}

export default CheckOutButton;
