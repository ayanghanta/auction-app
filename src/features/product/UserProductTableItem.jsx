import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import styles from "./UserProductTableItem.module.css";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoCopyOutline,
  IoCreateOutline,
  IoHourglassOutline,
  IoTrash,
} from "react-icons/io5";
import Menus from "../../ui/Menu";
import { BASE_URL } from "../../constant";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/confirmDelete";
import { useDeleteProduct } from "./useDeleteProduct";
import ProductForm from "./ProductForm";
import { useUpdateProduct } from "./useUpdateProduct";

const IMAGE_URL = `${BASE_URL}/images/products`;

function UserProductTableItem({ id, product }) {
  const { deleteProduct, isLoading } = useDeleteProduct();
  const { updateProduct, isLoading: isUpdating } = useUpdateProduct();
  const { title, coverImage, basePrice, status } = product;

  return (
    <div className={styles.container}>
      <img src={`${IMAGE_URL}/${coverImage}`} alt={`image of a ${title}`} />
      <p className={styles.title}>
        <Link to="/">{title}</Link>
      </p>
      <p className={styles.price}> {formatCurrency(basePrice)}</p>
      <p className={styles.date}>March 31 2025</p>
      <p className={styles.status}>
        {status === "verified" && (
          <>
            <IoCheckmarkCircle className="verifiedTick" />
            <span className="verifiedTick">Verify</span>
          </>
        )}
        {status === "rejected" && (
          <>
            <IoCloseCircle className="rejected" />
            <span className="rejected">Rejected</span>
          </>
        )}
        {status === "pending" && (
          <>
            <IoHourglassOutline className="pending" />
            <span className="pending">Pending</span>
          </>
        )}
      </p>

      <Modal>
        <Menus.Menu id={id}>
          <Menus.MenusToggle id={id} />
          <Menus.List id={id}>
            <Modal.Button id="delete">
              <Menus.Button>
                <IoTrash />
                <span>Delete</span>
              </Menus.Button>
            </Modal.Button>

            <Modal.Button id="edit">
              <Menus.Button>
                <IoCreateOutline />
                <span>Edit</span>
              </Menus.Button>
            </Modal.Button>

            <Menus.Button>
              <IoCopyOutline />
              <span>Coppy</span>
            </Menus.Button>
          </Menus.List>

          <Modal.Window id="delete">
            <ConfirmDelete
              resourceName="Product"
              onDelete={() => deleteProduct(id)}
              disabled={isLoading}
            />
          </Modal.Window>

          <Modal.Window id="edit">
            <ProductForm
              submitHandler={updateProduct}
              isLoading={isUpdating}
              isCreate={false}
              productToEditId={product._id}
              formHeader={
                <h1 className={styles.updateHeading}>
                  Edit Product : <span>{title}</span>
                </h1>
              }
            />
          </Modal.Window>
        </Menus.Menu>
      </Modal>
    </div>
  );
}

export default UserProductTableItem;
