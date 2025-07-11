import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Button from "./buttons/Button";
import UserOverview from "../features/user/UserOverview";
import { useUser } from "../features/auth/useUser";
import NotificationBell from "../features/notification/NotificationBell";

function Header() {
  const { user, isAuthenticated } = useUser();
  return (
    <div className={styles.pageNav}>
      <Logo />
      {/* <SearchBar /> */}
      <ul>
        <ul>
          <li>
            <NavLink to="/aboutus">About us</NavLink>
          </li>
          {isAuthenticated && <NotificationBell />}
          <li>
            {isAuthenticated ? (
              <UserOverview imageUrl={user.photo} />
            ) : (
              <NavLink to="/login">
                <Button type="cta">Singin</Button>
              </NavLink>
            )}
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Header;
