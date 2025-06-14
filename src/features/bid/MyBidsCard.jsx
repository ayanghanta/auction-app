import { formatCurrency, formatDate } from "../../utils/helper";
import styles from "./MyBidsCard.module.css";
import { PRODUCT_IMG_URL } from "../../constant";
import Button from "../../ui/buttons/Button";
import { useGetProduct } from "../admin/useGetProduct";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useUser } from "../auth/useUser";

function MyBidsCard({ bidData }) {
  const { bidStatus, myLatestBid, leatestBidAt, productId } = bidData;

  const { title, coverImage, basePrice } = bidData.auctionDetails.at(0);

  const { product, isLoading } = useGetProduct(productId);

  const { plasedOrder, orderId } = product || {};

  if (bidStatus === "outbid" && plasedOrder) return null;

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={`${PRODUCT_IMG_URL}/${coverImage}`}
          alt={`image of ${title}`}
        />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.basePrice}>
          Base Price: {formatCurrency(basePrice)}
        </p>
        <p className={styles.yourBidPrice}>
          Your Bid Price: {formatCurrency(myLatestBid)}
        </p>
        <p className={styles.time}>
          Last Bid Placed on {formatDate(leatestBidAt, true)}
        </p>
      </div>
      {!isLoading && (
        <div className={styles.statusContainer}>
          {bidStatus === "winning" && (
            <span className={`${styles.statusTag} ${styles.winning}`}>
              YOU WINNING ⚡
            </span>
          )}
          {bidStatus === "outbid" && (
            <span className={`${styles.statusTag} ${styles.outbid}`}>
              OUTBID
            </span>
          )}

          {bidStatus === "finalized" && (
            <span className={`${styles.statusTag} ${styles.finalized}`}>
              WIN BIDDING 🎉
            </span>
          )}

          {plasedOrder ? (
            <NavLink
              className={styles.viewOrder}
              to={`/app/myOrders/${orderId}`}
            >
              <HiMiniArrowTopRightOnSquare />
              <span>View Order Details</span>
            </NavLink>
          ) : bidStatus === "finalized" ? (
            <Button
              size="small"
              type="primary"
              to={`/app/checkout/${productId}`}
            >
              Place order
            </Button>
          ) : (
            <Button
              size="small"
              type="primary"
              to={`/app/auctions/${productId}`}
            >
              {bidStatus === "winning" ? "View Auction" : "Bid now"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default MyBidsCard;
