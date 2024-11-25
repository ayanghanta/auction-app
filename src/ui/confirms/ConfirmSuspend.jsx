import styles from "./ConfirmSuspend.module.css";
function ConfirmSuspend({
  resourceName,
  onDelete,
  handelCloseModal,
  disabled = false,
}) {
  return (
    <div className={styles.deleteContiner}>
      <h2 className={styles.heading}>Confirm Suspension of {resourceName}</h2>
      <p className={styles.warningText}>
        Are you sure you want to suspend this {resourceName}? This action is
        irreversible and will take effect immediately
      </p>
      <div className={styles.buttonContainer}>
        <button
          className={styles.cancelButton}
          onClick={handelCloseModal}
          disabled={disabled}
        >
          Cancel
        </button>
        <button
          className={styles.deleteButton}
          onClick={onDelete}
          disabled={disabled}
        >
          Suspend
        </button>
      </div>
    </div>
  );
}

export default ConfirmSuspend;
