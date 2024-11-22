import { useQuery } from "@tanstack/react-query";
import UserProductTableItem from "../features/product/UserProductTableItem";
import Back from "../ui/Back";
import Menus from "../ui/Menu";
import TableHeader from "../ui/TableHeader";

import styles from "./MyProducts.module.css";
import { getMyProducts } from "../services/apiProduct";
import Spinner from "../ui/Spinner";

function MyProducts() {
  const tableHeaders = [
    "Cover Image",
    "Title",
    "Base Price",
    "Published date",
    "Product status",
    "Actions",
  ];

  const { isLoading, data: products } = useQuery({
    queryFn: getMyProducts,
    queryKey: ["myProducts"],
  });

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
            {isLoading ? (
              <Spinner />
            ) : (
              <div className={styles.tableItems}>
                {products.map((product) => (
                  <UserProductTableItem
                    id={product._id}
                    key={product._id}
                    product={product}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Menus>
  );
}

export default MyProducts;
