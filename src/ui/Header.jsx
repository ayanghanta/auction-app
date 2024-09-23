import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
function Header() {
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
            <NavLink to="/account">Account</NavLink>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Header;
