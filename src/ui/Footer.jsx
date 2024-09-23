import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerColumn}>
        <Link to="/">
          <img src="footer-logo.png" alt="Vintage Vault Logo" />
        </Link>
        <p>
          &copy; {new Date().getFullYear()} Vintage Vault. All rights reserved.
        </p>
      </div>

      <div className={styles.footerColumn}>
        <h3>About Us</h3>
        <ul>
          <li>
            <Link to="/aboutus">Who We Are</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
          <li>
            <Link to="#">Careers</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerColumn}>
        <h3>Support</h3>
        <ul>
          <li>
            <Link to="/privacy#contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/help">Help Center</Link>
          </li>
        </ul>
      </div>

      <div className={styles.footerColumn}>
        <h3>Legal</h3>
        <ul>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
          <li>
            <Link to="/cookies">Cookies Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
