import styles from "./Product.module.css";
import CollapsText from "../../utils/CollapsText";
import Speciality from "./Speciality";
import CurrentBider from "./CurrentBider";
import { formatCurrency } from "../../utils/helper";
import { useQuery } from "@tanstack/react-query";

function Product() {
  // const {data:product,isLoading,status}=useQuery({

  // })

  return <p>This is product page</p>;

  // return (
  //   <div className={styles.productContainer}>
  //     <img src={product.image} alt={`image fo a ${product.title}`} />
  //     <div className={styles.productHader}>
  //       <h1>{product.title}</h1>
  //       <p>
  //         <CollapsText colaps={product.latestBidder !== null} wordShown={30}>
  //           {product.longDescription}
  //         </CollapsText>
  //       </p>
  //       <ProductStatus product={product} />
  //       {product.latestBidder && <CurrentBider product={product} />}
  //     </div>
  //     <div className={styles.ortherDtails}>
  //       <Speciality product={product} />
  //     </div>
  //     <div className="bidAction">
  //       <button>BID For the Product</button>
  //     </div>
  //   </div>
  // );
}

// function ProductStatus({ product }) {
//   return (
//     <div className={styles.statusConatiner}>
//       <p>
//         <strong>Status: </strong>
//         {product.status}
//       </p>
//       <p>
//         <strong>Base Price: </strong>
//         {formatCurrency(product.basePrice)}
//       </p>
//     </div>
//   );
// }

export default Product;
