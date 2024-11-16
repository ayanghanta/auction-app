import styles from "./TableHeader.module.css";
function TableHeader({ headers }) {
  return (
    <div
      className={styles.tableHeader}
      style={{ gridTemplateColumns: `repeat(${headers.length}, 1fr)` }}
    >
      {headers.map((header) => (
        <p key={header}>{header}</p>
      ))}
    </div>
  );
}

export default TableHeader;
