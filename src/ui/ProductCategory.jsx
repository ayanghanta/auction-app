import { useState } from "react";
import styles from "./ProductCategory.module.css";
import { IoChevronDownOutline, IoGridOutline } from "react-icons/io5";

function ProductCategory() {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div>
      <div
        className={styles.title}
        onClick={() => setShowCategory((sw) => !sw)}
      >
        <IoGridOutline />
        <span>Category</span>
        <IoChevronDownOutline />
      </div>
      {showCategory && <div>hello</div>}
    </div>
  );
}

export default ProductCategory;
