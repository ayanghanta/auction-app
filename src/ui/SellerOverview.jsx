import styles from "./SellerOverview.module.css";

function SellerOverview({ sellerName, sellerImage, productsSold }) {
  return (
    <div className={styles.sellerOverviewContainer}>
      <h3 className={styles.title}>Product seller</h3>
      <div className={styles.sellerDetails}>
        <img
          src={sellerImage}
          alt={`${sellerName}'s profile`}
          className={styles.sellerImage}
        />
        <div className={styles.sellerInfo}>
          <p className={styles.sellerName}>{sellerName}</p>
          <p className={styles.sellerStats}>
            <strong>Products Sold:</strong> {productsSold}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SellerOverview;
