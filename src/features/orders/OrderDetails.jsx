import { useParams } from "react-router-dom";
import Back from "../../ui/Back";
import styles from "./OrderDetails.module.css";
import { useGetOrders } from "./useGetOrders";
import Spinner from "../../ui/Spinner";
import { PRODUCT_IMG_URL } from "../../constant";
import CollapsText from "../../utils/CollapsText";
import {
  formatCurrency,
  formatDate,
  getDeliveryProgress,
} from "../../utils/helper";

function OrderDetails() {
  const { orderId } = useParams();
  const { data, isLoading } = useGetOrders(orderId);

  const {
    productId: { coverImage, title, summary, basePrice } = {},
    address: {
      fullName,
      phoneNumber,
      pinCode,
      locality,
      address,
      city,
      state,
      landMark,
      alternativeNumber,
      tag,
    } = {},
    finalAmout,
    orderPlaceAt,
    deliveryDate,
    deliveryStatus,
    transactionId,
  } = data?.order || {};

  return (
    <div className={styles.container}>
      <Back />
      <h2># Order : {orderId}</h2>
      {isLoading && <Spinner />}
      {/* DETAILS BOX */}
      {!isLoading && transactionId && (
        <div className={styles.orderInfo}>
          <div className={styles.imageBox}>
            <img
              src={`${PRODUCT_IMG_URL}/${coverImage}`}
              alt={`image of ${title}`}
            />
            <p className={styles.itemTitle}>{title}</p>
            <p className={styles.summary}>
              <CollapsText wordShown={25}>{summary}</CollapsText>
            </p>
            <p className={styles.basedPrice}>
              <span className={styles.tag}>BasePrice:</span>
              <span>{formatCurrency(basePrice)}</span>
            </p>
          </div>
          <div className={styles.delivaryInfo}>
            <div>
              <div className={styles.progesstext}>
                <span>Oder placed</span>
                <span>Shipped</span>
                <p className={styles.deliveryDateInProg}>
                  <span>{formatDate(deliveryDate, true)}</span>
                  <span>Deliver here</span>
                </p>
              </div>
              <div className={styles.progreeBg}>
                <p
                  className={styles.progreeBar}
                  style={{
                    width: `${getDeliveryProgress(
                      deliveryDate,
                      orderPlaceAt
                    )}%`,
                  }}
                ></p>
              </div>
            </div>
            <p className={styles.winningPrice}>
              <span className={styles.tag}>Winning Bid:</span>
              <span>{formatCurrency(finalAmout)}</span>
            </p>
            <p className={styles.tagId}>
              Order Placed at : {formatDate(orderPlaceAt)}
            </p>
            <p>
              <span className={styles.tagId}># Order Id :</span>
              <span> {orderId}</span>
            </p>
            <p>
              <span className={styles.tagId}># Transaction Id :</span>
              <span> {transactionId}</span>
            </p>

            <p className={styles.deliveryDateCon}>
              <span className={styles.tagId}>Delivary Date:</span>
              <span className={styles.deliveryDate}>
                {formatDate(deliveryDate)}
              </span>
            </p>
            <p className={styles.deliveryDateCon}>
              <span className={styles.tagId}>Delivery Status :</span>
              <span>
                {deliveryStatus === "delivered" ? (
                  <span className={`${styles.statusTag} ${styles.delivered}`}>
                    Devivered
                  </span>
                ) : (
                  <span
                    className={`${styles.statusTag} ${styles.out_for_delivery}`}
                  >
                    Out for Delivery
                  </span>
                )}
              </span>
            </p>
            <div className={styles.addressContainer}>
              <p className={styles.heading}>Delivery Address</p>
              <p className={styles.name}>{fullName}</p>
              <p>
                {address}, {locality}
              </p>
              {landMark && <p>{landMark}</p>}
              <p>
                {city}, {state} - {pinCode}
              </p>
              <p>
                Phone: {phoneNumber}
                {alternativeNumber && <> | Alt: {alternativeNumber}</>}
              </p>
              {tag && <p className={styles.tag}>Type: {tag}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
