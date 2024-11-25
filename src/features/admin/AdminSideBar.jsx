import { NavLink } from "react-router-dom";
import styles from "./AdminSideBar.module.css";
import {
  IoFileTrayFullOutline,
  IoFlameOutline,
  IoHomeOutline,
  IoPeopleOutline,
  IoPersonOutline,
} from "react-icons/io5";
import ProductCategory from "../../ui/ProductCategory";
import { useUser } from "../auth/useUser";

function AdminSideBar() {
  const { user } = useUser();
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoHomeOutline />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/live-auctions"
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
            to="/me"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoPersonOutline />
            <span>My Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/manageProducts"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoFileTrayFullOutline />
            <span>Manage Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/me-bids"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoPeopleOutline />
            <span>Manage Users</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdminSideBar;
