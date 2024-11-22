import { NavLink, useNavigate } from "react-router-dom";
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

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            <IoHomeOutline />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/live-auctions"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
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
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            <IoPersonOutline />
            <span>My Account</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/me-bids"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            <IoHammerOutline />
            <span>My Bids</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/me-winnings"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            <IoTrophyOutline />
            <span>Winnings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/recharge"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
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
