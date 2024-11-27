import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

import {
  IoCardOutline,
  IoFlameOutline,
  IoHammerOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoTrophyOutline,
} from "react-icons/io5";
import ProductCategory from "./ProductCategory";
import { useUser } from "../features/auth/useUser";
import AdminSideBar from "../features/admin/AdminSideBar";

function Sidebar() {
  const { user } = useUser();
  if (user?.role === "admin") return <AdminSideBar />;
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
            to="/myBids"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoHammerOutline />
            <span>My Bids</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mywinings"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoTrophyOutline />
            <span>Winnings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recharge"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoCardOutline />
            <span>Recharge</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
