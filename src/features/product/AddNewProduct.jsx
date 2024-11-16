import Back from "../../ui/Back";
import styles from "./AddNewProduct.module.css";
import AddProductForm from "./AddProductForm";

function AddNewProduct() {
  return (
    <div className={styles.addProductContainer}>
      <div className={styles.header}>
        <Back />
        <h1>Add Your Product for the Auction</h1>
      </div>
      <AddProductForm />
      <p className={styles.notice}>
        *Your product will be reviewed by the admin before being listed for
        auction.*
      </p>
    </div>
  );
}

export default AddNewProduct;
