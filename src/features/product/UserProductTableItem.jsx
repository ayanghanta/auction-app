import { Link } from "react-router-dom";
import { formatCurrency, formatDate } from "../../utils/helper";
import styles from "./UserProductTableItem.module.css";
import {
  IoAlertCircleOutline,
  IoCreateOutline,
  IoHammerOutline,
  IoRadioButtonOnSharp,
  IoRocketOutline,
  IoTrash,
  IoWarningOutline,
} from "react-icons/io5";
import Menus from "../../ui/Menu";
import { PRODUCT_IMG_URL } from "../../constant";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/confirms/confirmDelete";
import { useDeleteProduct } from "./useDeleteProduct";
import ProductForm from "./ProductForm";
import { useUpdateProduct } from "./useUpdateProduct";
import ConfirmPublish from "../../ui/confirms/ConfirmPublish";
import { usePublishProduct } from "./usePublishProduct";
import StatusLabel from "../../ui/StatusLabel";
import ShowRejectionCouse from "../../ui/ShowRejectionCouse";

function UserProductTableItem({ id, product }) {
  const { deleteProduct, isLoading } = useDeleteProduct();
  const { updateProduct, isLoading: isUpdating } = useUpdateProduct();
  const { publishProduct, isLoading: isPublishing } = usePublishProduct();
  const {
    title,
    coverImage,
    basePrice,
    status,
    published,
    auctionsStartsAt,
    isLive,
    isAuctionEnds,
    rejectionCouse,
  } = product;

  const isVerified = status === "verified";
  const isRejected = status === "rejected";

  const publishButton = (
    <>
      <IoRocketOutline />
      <span>Publish</span>
    </>
  );

  return (
    <div className={`${styles.container} ${isLive ? styles.liveItem : ""}`}>
      <p className={styles.imgContainer}>
        <img
          src={`${PRODUCT_IMG_URL}/${coverImage}`}
          alt={`image of a ${title}`}
        />
        {isLive && <IoRadioButtonOnSharp className={styles.autionStatus} />}
      </p>
      <p className={styles.title}>
        <Link to="/app">{title}</Link>
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
            {!isLive && !isAuctionEnds && (
              <Modal.Button id="delete">
                <Menus.Button>
                  <IoTrash />
                  <span>Delete</span>
                </Menus.Button>
              </Modal.Button>
            )}

            {!isLive && !isAuctionEnds && (
              <Modal.Button id="edit">
                <Menus.Button>
                  <IoCreateOutline />
                  <span>Edit</span>
                </Menus.Button>
              </Modal.Button>
            )}

            {isVerified && !published && (
              <Modal.Button id="publish">
                <Menus.Button> {publishButton}</Menus.Button>
              </Modal.Button>
            )}

            {isRejected && (
              <Modal.Button id="rejectionCouse">
                <Menus.Button>
                  <IoAlertCircleOutline />
                  <span>Rejection couse</span>
                </Menus.Button>
              </Modal.Button>
            )}

            {(isLive || isAuctionEnds) && (
              <Modal.Button id="bidHistory">
                <Menus.Button>
                  <IoHammerOutline />
                  <span>Bid History</span>
                </Menus.Button>
              </Modal.Button>
            )}
          </Menus.List>

          <Modal.Window id="delete">
            <ConfirmDelete
              resourceName="Product"
              onDelete={() => deleteProduct(id)}
              disabled={isLoading}
            />
          </Modal.Window>

          <Modal.Window id="rejectionCouse">
            <ShowRejectionCouse couse={rejectionCouse} />
          </Modal.Window>

          <Modal.Window id="edit">
            <ProductForm
              submitHandler={updateProduct}
              isLoading={isUpdating}
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
          </Modal.Window>

          <Modal.Window id="publish">
            <ConfirmPublish
              product={product}
              publishHandler={publishProduct}
              isLoading={isPublishing}
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </div>
  );
}

export default UserProductTableItem;
