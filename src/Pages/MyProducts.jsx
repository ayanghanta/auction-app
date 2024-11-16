import UserProductTableItem from "../features/product/UserProductTableItem";
import Back from "../ui/Back";
import TableHeader from "../ui/TableHeader";

import styles from "./MyProducts.module.css";

function MyProducts() {
  const tableHeaders = [
    "Cover Image",
    "Title",
    "Base Price",
    "Published date",
    "Status",
  ];
  return (
    <div>
      <div className={styles.header}>
        <Back />
        <h1>Manage Your Products</h1>
      </div>
      <div>
        {/* <div>Filter</div> */}
        <div>
          <TableHeader headers={tableHeaders} />
          <div className={styles.tableItems}>
            <UserProductTableItem />
            <UserProductTableItem />
            <UserProductTableItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProducts;
