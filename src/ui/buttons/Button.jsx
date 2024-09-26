import styles from "./Button.module.css";
function Button({ children, type, onClick }) {
  if (onClick)
    return (
      <button className={`${styles.btn} ${type}`} onClick={onClick}>
        {children}
      </button>
    );
  return <button className={`${styles.btn} ${type}`}>{children}</button>;
}

export default Button;
