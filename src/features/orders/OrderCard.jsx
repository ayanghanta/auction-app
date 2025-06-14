import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { PRODUCT_IMG_URL } from "../../constant";
import Button from "../../ui/buttons/Button";
import { formatCurrency, formatDate } from "../../utils/helper";
import styles from "./OrderCard.module.css";
import { NavLink } from "react-router-dom";

function OrderCard({ order }) {
  const {
    _id: orderId,
    productId: { coverImage, title },
    finalAmout,
    orderPlaceAt,
    deliveryDate,
    deliveryStatus,
  } = order;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src={`${PRODUCT_IMG_URL}/${coverImage}`}
          alt={`image of ${title}`}
        />
      </div>
      <div className={styles.details}>
        <p className={styles.orderNumber}>
          <span>#Order Id:</span> <span>{orderId}</span>
        </p>
        <p className={styles.title}>{title}</p>

        <p className={styles.yourBidPrice}>
          Paid amount: {formatCurrency(+finalAmout)}
        </p>
        <p className={styles.orderTime}>
          Oarder place at {formatDate(orderPlaceAt, true)}
        </p>
        <p className={styles.orderTime}>
          <span>expected delivery date: </span>
          <span className={styles.devileryTime}>
            {formatDate(deliveryDate, true)}
          </span>
        </p>
      </div>

      <div className={styles.statusContainer}>
        {deliveryStatus === "out_for_delivery" && (
          <span className={`${styles.statusTag} ${styles.out_for_delivery}`}>
            Out for Delivery
          </span>
        )}
        {deliveryStatus === "delivered" && (
          <span className={`${styles.statusTag} ${styles.delivered}`}>
            Devivered
          </span>
        )}
        <NavLink className={styles.viewOrder} to={`/app/myOrders/${orderId}`}>
          <HiMiniArrowTopRightOnSquare />
          <span>View Order Details</span>
        </NavLink>
      </div>
    </div>
  );
}

export default OrderCard;
