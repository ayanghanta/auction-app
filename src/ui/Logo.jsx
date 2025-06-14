import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Link to="/app">
        <img
          src="/logo.png"
          alt="logo of Antique Bazzar"
          className={styles.logo}
        />
      </Link>
    </div>
  );
}

export default Logo;
