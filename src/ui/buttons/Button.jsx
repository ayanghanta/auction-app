import styles from "./Button.module.css";
function Button({ children, type, onClick }) {
  return (
    <button className={`${styles.btn} ${type}`} onClick={() => onClick}>
      {children}
    </button>
  );
}

export default Button;
