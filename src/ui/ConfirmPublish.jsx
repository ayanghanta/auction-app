import toast from "react-hot-toast";
import { BASE_URL } from "../constant";
import { formatCurrency } from "../utils/helper";
import styles from "./ConfirmPublish.module.css";
import { useState } from "react";

function ConfirmPublish({
  product,
  publishHandler,
  handelCloseModal,
  disabled = false,
}) {
  const IMAGE_URL = `${BASE_URL}/images/products`;
  const [auctionStartDate, setAuctionStartDate] = useState(getTomorrowDate());
  const [auctionEndDate, setAuctionEndDate] = useState("");
  const [isAgressTerms, setIsAgreeTerms] = useState(false);

  // Function to get tomorrow's date in yyyy-mm-dd format
  function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0]; // Format: yyyy-mm-dd
  }

  // Handle form submission
  const handleSubmit = () => {
    if (!auctionEndDate || !auctionStartDate) {
      toast.error("Please select an auction start and end date.");
      return;
    }

    if (!isAgressTerms)
      return toast.error("To Publish your product you must agree our T&C");
    const auctionsStartsAt = new Date(`${auctionStartDate}T00:00:00Z`);
    const auctionsEndsAt = new Date(`${auctionEndDate}T23:59:59.999Z`);

    // publish
    publishHandler(
      {
        id: product._id,
        data: { auctionsStartsAt, auctionsEndsAt },
      },
      {
        onSuccess: () => {},
        onSettled: () => handelCloseModal?.(),
      }
    );
  };

  return (
    <div className={styles.modalContent}>
      <h2 className={styles.heading}>Confirm Publish for Auction</h2>
      <div className={styles.productPreview}>
        <img
          src={`${IMAGE_URL}/${product.coverImage}`}
          alt={product.title}
          className={styles.productImage}
        />
        <div className={styles.productDetails}>
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.productSummary}>{product.summary}</p>
          <p className={styles.productBasePrice}>
            Base Price: {formatCurrency(product.basePrice)}
          </p>
        </div>
      </div>

      <div className={styles.rules}>
        <h4 className={styles.rulesHeading}>Auction Rules:</h4>
        <ul className={styles.rulesList}>
          <li>
            Once the auction starts, you cannot modify any product details.
          </li>
          <li>
            After the auction day passes, the product details cannot be changed.
          </li>
          <li>
            The auction will last for a specified duration; make sure to check
            the end time.
          </li>
          <li>Ensure that the product complies with all auction guidelines.</li>
        </ul>
      </div>

      <div className={styles.dateInputs}>
        <div className={styles.dateInputContainer}>
          <label htmlFor="auctionStartDate" className={styles.dateLabel}>
            Auction Start Date
          </label>
          <input
            type="date"
            id="auctionStartDate"
            className={styles.dateInput}
            value={auctionStartDate}
            onChange={(e) => setAuctionStartDate(e.target.value)}
            min={getTomorrowDate()} // Set min to tomorrow's date
            disabled={disabled}
          />
        </div>

        <div className={styles.dateInputContainer}>
          <label htmlFor="auctionEndDate" className={styles.dateLabel}>
            Auction End Date
          </label>
          <input
            type="date"
            id="auctionEndDate"
            className={styles.dateInput}
            value={auctionEndDate}
            onChange={(e) => setAuctionEndDate(e.target.value)}
            min={auctionStartDate}
            disabled={disabled}
          />
        </div>
      </div>

      <div className={styles.termsContainer}>
        <input
          type="checkbox"
          id="termsCheckbox"
          disabled={disabled}
          className={styles.checkbox}
          checked={isAgressTerms}
          onChange={() => setIsAgreeTerms((agree) => !agree)}
        />
        <label htmlFor="termsCheckbox" className={styles.termsLabel}>
          I agree to all rules and terms and conditions.
        </label>
      </div>

      <div className={styles.buttonContainer}>
        <button
          className={styles.cancelButton}
          onClick={handelCloseModal}
          disabled={disabled}
        >
          Cancel
        </button>
        <button
          className={styles.publishButton}
          onClick={handleSubmit}
          disabled={disabled}
        >
          Publish for Auction
        </button>
      </div>
    </div>
  );
}

export default ConfirmPublish;
