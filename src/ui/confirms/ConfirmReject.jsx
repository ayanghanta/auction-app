import { useState } from "react";
import { useReject } from "../../features/admin/useReject";
import styles from "./ConfirmReject.module.css";

function ConfirmReject({ productTitle, handelCloseModal, productId }) {
  const [couse, setCouse] = useState("");
  const { rejectProduct, isLoading } = useReject();

  function handleReject() {
    if (!couse) return;
    rejectProduct(
      { id: productId, couse },
      {
        onSuccess: handelCloseModal,
      }
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Reject Product</h2>
      <p className={styles.productHeading}>
        You are about to reject the verification of :{productTitle}
      </p>

      <textarea
        className={styles.input}
        placeholder="Enter the reason for rejection"
        value={couse}
        onChange={(e) => setCouse(e.target.value)}
      />
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.cancelButton}`}
          onClick={handelCloseModal}
          disabled={isLoading}
        >
          Cancel
        </button>
        <button
          className={`${styles.button} ${styles.rejectButton}`}
          onClick={handleReject}
          disabled={isLoading}
        >
          Reject
        </button>
      </div>
    </div>
  );
}

export default ConfirmReject;
