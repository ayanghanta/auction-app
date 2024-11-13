import { useNavigate } from "react-router-dom";
import styles from "./DropdownMenu.module.css";
import { IoLogOutOutline, IoPersonOutline } from "react-icons/io5";
import { useLogout } from "../features/auth/useLogout";

function DropdownMenu() {
  const { logout, isLoading } = useLogout();
  const navigate = useNavigate();
  return (
    <div className={styles.dropdownMenu}>
      <button className={styles.dropdownItem} onClick={() => navigate("/me")}>
        <IoPersonOutline />
        <span>Visit Profile</span>
      </button>
      <button
        className={styles.dropdownItem}
        onClick={logout}
        disabled={isLoading}
      >
        <IoLogOutOutline /> <span>Logout</span>
      </button>
    </div>
  );
}

export default DropdownMenu;
