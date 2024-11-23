import styles from "./EmptyPage.module.css";
function EmptyPage({ resourceName = "Auction in this category" }) {
  return (
    <div className={styles.container}>
      <p>No {resourceName} is found</p>
    </div>
  );
}

export default EmptyPage;
