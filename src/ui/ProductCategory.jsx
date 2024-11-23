import { useState } from "react";
import styles from "./ProductCategory.module.css";
import { CATEGORYS } from "../constant";
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoGridOutline,
} from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

function ProductCategory() {
  const [showCategory, setShowCategory] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("category", value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.categoryContainer}>
      <div
        className={styles.title}
        onClick={() => setShowCategory((sw) => !sw)}
      >
        <IoGridOutline />
        <span>Category</span>
        {!showCategory ? <IoChevronDownOutline /> : <IoChevronUpOutline />}
      </div>
      {showCategory && (
        <ul className={styles.categories}>
          {CATEGORYS.map((item) => (
            <li onClick={() => handleClick(item.value)} key={item.value}>
              {item.lable}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductCategory;
