import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className={styles.sidebar}>
      <ul>
        <li className={styles.active} onClick={() => navigate("/")}>
          Home
        </li>
        <li>Catogory</li>
        <li>Live Acutions</li>
        <li>Price Range</li>
        <li>Account</li>
        <li>Winings</li>
        <li>Recharge</li>
      </ul>
    </div>
  );
}

export default Sidebar;
