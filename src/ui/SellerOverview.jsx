import { USER_IMG_URL } from "../constant";
import { useUserDetails } from "../features/user/useUserDetails";
import styles from "./SellerOverview.module.css";

function SellerOverview({ sellerId }) {
  const { isLoading, user } = useUserDetails(sellerId);

  const { fullName, photo } = user || {};

  return (
    <div className={styles.sellerOverviewContainer}>
      <h3 className={styles.title}>Product seller</h3>
      {isLoading ? (
        <p>Fetching seller data...</p>
      ) : (
        <div className={styles.sellerDetails}>
          <img
            src={`${USER_IMG_URL}/${photo}`}
            className={styles.sellerImage}
            alt={`image of this product seller ${fullName}`}
          />
          <div className={styles.sellerInfo}>
            <p className={styles.sellerName}>{fullName}</p>
            <p className={styles.sellerStats}>
              {/* <strong>Products Sold:</strong> {productsSold} */}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SellerOverview;
