import styles from "./InputError.module.css";

function InputError({ error }) {
  if (!error) return null;
  return <p className={styles.error}>{error}</p>;
}

export default InputError;
