import styles from "./AddNewProduct.module.css";
import AddProductForm from "./AddProductForm";

function AddNewProduct() {
  return (
    <div className={styles.addProductContainer}>
      <h1>Add Your Product for the Auction</h1>
      <AddProductForm />
      <p className={styles.notice}>
        *Your product will be reviewed by the admin before being listed for
        auction.*
      </p>
    </div>
  );
}

export default AddNewProduct;
