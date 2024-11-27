import styles from "./AdminProductReview.module.css";
import { useGetProduct } from "./useGetProduct";
import Spinner from "../../ui/Spinner";
import { DOC_URL, PRODUCT_IMG_URL } from "../../constant";
import CollapsText from "../../utils/CollapsText";
import { formatCurrency } from "../../utils/helper";
import { useState } from "react";
import { useVerifyProduct } from "./useVerifyProduct";
import { useParams } from "react-router-dom";
import SmallSpinner from "../../ui/SmallSpinner";
import StatusLabel from "../../ui/StatusLabel";
import Back from "../../ui/Back";
import Modal from "../../ui/Modal";
import ConfirmReject from "../../ui/confirms/ConfirmReject";

function AdminProductReview() {
  const { product, isLoading: loadingProductDetails } = useGetProduct();
  const [isChecked, setIsChecked] = useState(false);
  const { verifyProduct, isLoading } = useVerifyProduct();
  const { productId } = useParams();

  function handleVerify() {
    if (!isChecked) return;
    verifyProduct(productId);
  }

  if (loadingProductDetails) return <Spinner />;

  const {
    title,
    coverImage,
    description,
    basePrice,
    currentBid,
    originCountry,
    timePeriod,
    height,
    width,
    depth,
    weight,
    material,
    overallCondition,
    historicalSignificance,
    certificateNumber,
    verifiedBy,
    category,
    legalDocument,
    seller,
    status,
    verified,
  } = product;

  return (
    <>
      <Back />
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img
            src={`${PRODUCT_IMG_URL}/${coverImage}`}
            alt={`Cover of ${title}`}
            className={styles.coverImage}
          />
        </div>

        <div className={styles.detailsSection}>
          <h1 className={styles.title}>
            {title} <StatusLabel status={status} />
          </h1>
          <table className={styles.detailsTable}>
            <tbody>
              <tr>
                <td className={styles.label}>Description:</td>
                <td>
                  <CollapsText wordShown={15}>{description}</CollapsText>
                </td>
              </tr>
              <tr>
                <td className={styles.label}>Base Price:</td>
                <td>{formatCurrency(basePrice)}</td>
              </tr>
              {currentBid && (
                <tr>
                  <td className={styles.label}>Current Bid:</td>
                  <td>{formatCurrency(currentBid)}</td>
                </tr>
              )}
              <tr>
                <td className={styles.label}>Origin Country:</td>
                <td>{originCountry}</td>
              </tr>
              <tr>
                <td className={styles.label}>Time Period:</td>
                <td>{timePeriod}</td>
              </tr>
              <tr>
                <td className={styles.label}>Dimensions (H x W x D):</td>
                <td>{`${height} x ${width} x ${depth} cm`}</td>
              </tr>
              <tr>
                <td className={styles.label}>Weight:</td>
                <td>{`${weight} kg`}</td>
              </tr>
              <tr>
                <td className={styles.label}>Material:</td>
                <td>{material}</td>
              </tr>
              <tr>
                <td className={styles.label}>Overall Condition:</td>
                <td>{overallCondition}</td>
              </tr>
              <tr>
                <td className={styles.label}>Historical Significance:</td>
                <td>{historicalSignificance}</td>
              </tr>
              <tr>
                <td className={styles.label}>Certificate Number:</td>
                <td>{certificateNumber}</td>
              </tr>
              <tr>
                <td className={styles.label}>Verified By:</td>
                <td>{verifiedBy}</td>
              </tr>
              <tr>
                <td className={styles.label}>Category:</td>
                <td>{category.join(", ")}</td>
              </tr>
              <tr>
                <td className={styles.label}>Legal Document:</td>
                <td>
                  <button
                    className={styles.documentButton}
                    onClick={() =>
                      window.open(`${DOC_URL}/${legalDocument}`, "_blank")
                    }
                  >
                    View Document
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.label}>Seller ID</td>
                <td>{seller._id}</td>
              </tr>
            </tbody>
          </table>
          {!verified && (
            <div className={styles.declaration}>
              <label className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={isChecked}
                  onChange={() => setIsChecked((ch) => !ch)}
                />
                <span className={styles.checkboxText}>
                  I confirm that I have reviewed all product details and verify
                  its authenticity.
                </span>
              </label>
            </div>
          )}
          {!verified && (
            <div className={styles.actionButtons}>
              <button
                className={`${styles.button} ${styles.verifyButton}`}
                disabled={!isChecked || isLoading}
                onClick={handleVerify}
              >
                {isLoading ? <SmallSpinner /> : "Verify Product"}
              </button>
              <Modal>
                <Modal.Button id="reject">
                  <button
                    className={`${styles.button} ${styles.rejectButton}`}
                    disabled={isLoading}
                  >
                    Reject Verification
                  </button>
                </Modal.Button>
                <Modal.Window id="reject">
                  <ConfirmReject productTitle={title} productId={productId} />
                </Modal.Window>
              </Modal>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AdminProductReview;
