import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import styles from "./UserProductTableItem.module.css";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoRemoveCircle,
} from "react-icons/io5";
function UserProductTableItem() {
  return (
    <div className={styles.container}>
      <img src="images/pocket-watch.jpg" alt="image of a PROPDUCT" />
      <p className={styles.title}>
        <Link to="/">The Vintage Pocket Watch</Link>
      </p>
      <p className={styles.price}> {formatCurrency(19999)}</p>
      <p className={styles.date}>March 31 2025</p>
      <p className={styles.status}>
        {/* <IoCheckmarkCircle className="verifiedTick" />
        <span className="verifiedTick">Verify</span> */}
        {/* <IoCloseCircle className="rejected" />
        <span className="rejected">Rejected</span> */}
        <IoRemoveCircle className="pending" />
        <span className="pending">Pending</span>
      </p>
    </div>
  );
}

export default UserProductTableItem;
