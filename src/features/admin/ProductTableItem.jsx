import { Link, useNavigate } from "react-router-dom";
import { formatCurrency, formatDate } from "../../utils/helper";
import styles from "./ProductTableItem.module.css";
import {
  IoCheckmarkDoneOutline,
  IoCloseOutline,
  IoEyeOutline,
  IoRadioButtonOnSharp,
  IoWarningOutline,
} from "react-icons/io5";
import Menus from "../../ui/Menu";
import { BASE_URL } from "../../constant";
import Modal from "../../ui/Modal";
import ConfirmSuspend from "../../ui/confirms/ConfirmSuspend";
import StatusLabel from "../../ui/StatusLabel";

const IMAGE_URL = `${BASE_URL}/images/products`;

function ProductTableItem({ id, product }) {
  const naviagte = useNavigate();

  const {
    title,
    coverImage,
    basePrice,
    status,
    published,
    auctionsStartsAt,
    isLive,
  } = product;

  const isVerified = status === "verified";

  return (
    <div className={`${styles.container} ${isLive ? styles.liveItem : ""}`}>
      <p className={styles.imgContainer}>
        <img src={`${IMAGE_URL}/${coverImage}`} alt={`image of a ${title}`} />
        {isLive && <IoRadioButtonOnSharp className={styles.autionStatus} />}
      </p>
      <p className={styles.title}>
        <Link to="/">{title}</Link>
      </p>
      <p className={styles.price}> {formatCurrency(basePrice)}</p>
      <p className={styles.date}>
        {published ? formatDate(auctionsStartsAt) : "---"}
      </p>
      <p className={styles.status}>
        <StatusLabel status={status} />
      </p>

      <Modal>
        <Menus.Menu id={id}>
          <Menus.MenusToggle id={id} />
          <Menus.List id={id}>
            <Menus.Button onClick={() => naviagte(`/review/${id}`)}>
              <IoEyeOutline />
              <span>View Details</span>
            </Menus.Button>

            {!isVerified && (
              <Modal.Button id="verify">
                <Menus.Button>
                  <IoCheckmarkDoneOutline />
                  <span>Verify</span>
                </Menus.Button>
              </Modal.Button>
            )}

            {!isVerified && (
              <Modal.Button id="reject">
                <Menus.Button>
                  <IoCloseOutline />
                  <span>Reject</span>
                </Menus.Button>
              </Modal.Button>
            )}

            <Modal.Button id="suspend">
              <Menus.Button>
                <IoWarningOutline />
                <span>Suspend</span>
              </Menus.Button>
            </Modal.Button>
          </Menus.List>

          <Modal.Window id="suspend">
            <ConfirmSuspend resourceName="Product" />
          </Modal.Window>

          {/* <Modal.Window id="edit">
            <ProductForm
              // submitHandler={updateProduct}
              // isLoading={isUpdating}
              isCreate={false}
              productToEditId={product._id}
              formHeader={
                <div>
                  <h1 className={styles.updateHeading}>
                    Edit Product : <span>{title}</span>
                  </h1>
                  {isVerified && (
                    <h4 className={styles.warnText}>
                      <IoWarningOutline className={styles.warnIcon} />
                      <span>
                        Any updates to the product&apos;s infromation will
                        require re-verification. Please ensure all information
                        is accurate before submitting for review.
                      </span>
                    </h4>
                  )}
                </div>
              }
            />
          </Modal.Window> */}

          <Modal.Window id="publish">
            {/* <ConfirmPublish
              product={product}
              // publishHandler={publishProduct}
              // isLoading={isPublishing}
            /> */}
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </div>
  );
}

export default ProductTableItem;
