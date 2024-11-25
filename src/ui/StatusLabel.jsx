import styles from "./StatusLabel.module.css";

function StatusLabel({ status }) {
  return <span className={`${styles.label} ${styles[status]}`}>{status}</span>;
}

export default StatusLabel;
