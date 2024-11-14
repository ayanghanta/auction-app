import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

import {
  IoCardOutline,
  IoFlameOutline,
  IoGridOutline,
  IoHammerOutline,
  IoHomeOutline,
  IoPersonOutline,
  IoTrophyOutline,
} from "react-icons/io5";
function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.active} onClick={() => navigate("/")}>
          <NavLink to="/">
            <IoHomeOutline />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/category">
            <IoGridOutline />
            <span>Category</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/live-auctions">
            <IoFlameOutline />
            <span>Live auction</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/me">
            <IoPersonOutline />

            <span>My account</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/me-">
            <IoHammerOutline />
            <span>My Bids</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/me-">
            <IoTrophyOutline />
            <span>Winings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/me--">
            <IoCardOutline />

            <span>Recharge</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
