import { NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

import {
  IoCardOutline,
  IoFlameOutline,
  IoHammerOutline,
  IoHomeOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { PiPackage } from "react-icons/pi";
import AdminSideBar from "../features/admin/AdminSideBar";
import { useUser } from "../features/auth/useUser";
import ProductCategory from "./ProductCategory";

function Sidebar() {
  const { user } = useUser();
  const location = useLocation();
  console.log(location.pathname);

  if (user?.role === "admin") return <AdminSideBar />;
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/app"
            className={location.pathname === "/app" ? styles.activeLink : ""}
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
            to="/app/myBids"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <IoHammerOutline />
            <span>My Bids</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/app/myOrders"
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <PiPackage />

            <span>Orders</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
