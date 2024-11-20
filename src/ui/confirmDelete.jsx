import styles from "./ConfirmDelete.module.css";

function ConfirmDelete({
  resourceName,
  onDelete,
  handelCloseModal,
  disabled = false,
}) {
  return (
    <div className={styles.deleteContiner}>
      <h2 className={styles.heading}>Delete {resourceName}?</h2>
      <p className={styles.warningText}>
        Are you sure you want to delete this {resourceName}? This action cannot
        be undone.
      </p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.deleteButton}
          onClick={onDelete}
          disabled={disabled}
        >
          Delete
        </button>
        <button
          className={styles.cancelButton}
          onClick={handelCloseModal}
          disabled={disabled}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
