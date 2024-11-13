import { Link } from "react-router-dom";
import styles from "./Button.module.css";
function Button({
  children,
  type,
  size = "mid",
  onClick,
  role = "button",
  to,
  disabled = false,
}) {
  if (onClick)
    return (
      <button
        className={`${styles.btn} ${type} ${size}`}
        onClick={onClick}
        type={role}
        disabled={disabled}
      >
        {children}
      </button>
    );
  if (to)
    return (
      <Link to={to} className={`${styles.btn} ${type} ${size}`}>
        {children}
      </Link>
    );

  return (
    <button
      className={`${styles.btn} ${type} ${size}`}
      type={role}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
