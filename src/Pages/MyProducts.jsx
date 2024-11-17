import UserProductTableItem from "../features/product/UserProductTableItem";
import Back from "../ui/Back";
import Menus from "../ui/Menu";
import TableHeader from "../ui/TableHeader";

import styles from "./MyProducts.module.css";

function MyProducts() {
  const tableHeaders = [
    "Cover Image",
    "Title",
    "Base Price",
    "Published date",
    "Status",
    "Actions",
  ];
  return (
    <Menus>
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
              <UserProductTableItem id="1" />
              <UserProductTableItem id="2" />
              <UserProductTableItem id="3" />
            </div>
          </div>
        </div>
      </div>
    </Menus>
  );
}

export default MyProducts;
