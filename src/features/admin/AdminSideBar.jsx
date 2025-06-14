import { NavLink } from "react-router-dom";
import styles from "./AdminSideBar.module.css";
import {
  IoFileTrayFullOutline,
  IoFlameOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";
import ProductCategory from "../../ui/ProductCategory";

function AdminSideBar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/app"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoHomeOutline />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/live-auctions"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoFlameOutline />
            <span>Live Auction</span>
          </NavLink>
        </li>
        <li>
          <ProductCategory />
        </li>
        <li>
          <NavLink
            to="/app/me"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoPersonOutline />
            <span>My Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/manageProducts"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoFileTrayFullOutline />
            <span>Manage Products</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdminSideBar;
