import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helper";
import styles from "./UserProductTableItem.module.css";
import {
  IoCheckmarkCircle,
  IoCloseCircle,
  IoCopyOutline,
  IoCreateOutline,
  IoHourglassOutline,
  IoPencil,
  IoRemoveCircle,
  IoTrash,
} from "react-icons/io5";
import Menus from "../../ui/Menu";

function UserProductTableItem({ id }) {
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
        <IoHourglassOutline className="pending" />
        <span className="pending">Pending</span>
      </p>

      <Menus.Menu id={id}>
        <Menus.MenusToggle id={id} />
        <Menus.List id={id}>
          <Menus.Button>
            <IoTrash />
            <span>Delete</span>
          </Menus.Button>
          <Menus.Button>
            <IoCreateOutline />
            <span>Edit</span>
          </Menus.Button>
          <Menus.Button>
            <IoCopyOutline />
            <span>Coppy</span>
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
    </div>
  );
}

export default UserProductTableItem;
