import Back from "../../ui/Back";
import styles from "./AddNewProduct.module.css";
import ProductForm from "./ProductForm";
import { useCreateNewProduct } from "./useCreateNewProduct";

function AddNewProduct() {
  const { createNewProduct, isLoading } = useCreateNewProduct();
  return (
    <div className={styles.addProductContainer}>
      <div className={styles.header}>
        <Back />
        <h1>Add Your Product for the Auction</h1>
      </div>
      <ProductForm submitHandler={createNewProduct} isLoading={isLoading} />
      <p className={styles.notice}>
        *Your product will be reviewed by the admin before being listed for
        auction.*
      </p>
    </div>
  );
}

export default AddNewProduct;
