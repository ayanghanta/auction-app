import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Button from "./buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user/userSlice";
function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((store) => store.user.isLogin);

  function handleLogout() {
    dispatch(logout());
  }

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
      {isLogin && (
        <Button type="logout" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}

export default Sidebar;
