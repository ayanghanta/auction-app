import styles from "./Button.module.css";
function Button({ children, type, size = "mid", onClick, role = "button" }) {
  if (onClick)
    return (
      <button className={`${styles.btn} ${type}`} onClick={onClick} type={role}>
        {children}
      </button>
    );
  return (
    <button className={`${styles.btn} ${type} ${size}`} type={role}>
      {children}
    </button>
  );
}

export default Button;
