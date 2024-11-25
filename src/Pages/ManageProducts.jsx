import { useQuery } from "@tanstack/react-query";
import UserProductTableItem from "../features/product/UserProductTableItem";
import Back from "../ui/Back";
import Menus from "../ui/Menu";
import TableHeader from "../ui/TableHeader";

import styles from "./MyProducts.module.css";
import { getAllProducts } from "../services/apiProduct";
import Spinner from "../ui/Spinner";
import EmptyPage from "../ui/EmptyPage";
import ProductTableItem from "../features/admin/ProductTableItem";

function ManageProducts() {
  const tableHeaders = [
    "Cover Image",
    "Title",
    "Base Price",
    "Published date",
    "Product status",
    "Actions",
  ];

  const { isLoading, data } = useQuery({
    queryFn: getAllProducts,
    queryKey: ["allProducts"],
  });

  let products = [];

  if (!isLoading) {
    products = data.data.products;
  }

  return (
    <Menus>
      <div>
        <div className={styles.header}>
          <Back />
          <h1>Manage Listed Products</h1>
        </div>
        <div>
          {/* <div>Filter</div> */}
          <div>
            <TableHeader headers={tableHeaders} />
            {products?.length === 0 && !isLoading && (
              <EmptyPage resourceName="Product" />
            )}
            {isLoading ? (
              <Spinner />
            ) : (
              <div className={styles.tableItems}>
                {products.map((product) => (
                  <ProductTableItem
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

export default ManageProducts;
