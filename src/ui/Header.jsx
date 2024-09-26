import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./Header.module.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./buttons/Button";
import UserOverview from "../features/user/UserOverview";

function Header() {
  const { isLogin, user } = useSelector((store) => store.user);
  return (
    <div className={styles.pageNav}>
      <Logo />
      <SearchBar />
      <ul>
        <ul>
          <li>
            <NavLink to="/aboutus">About us</NavLink>
          </li>
          <li>
            {!isLogin ? (
              <NavLink to="/login">
                <Button type="cta">Singin</Button>
              </NavLink>
            ) : (
              <UserOverview />
            )}
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Header;
