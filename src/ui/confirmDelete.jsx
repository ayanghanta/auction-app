import { IoClose } from "react-icons/io5";
import styles from "./ConfirmDelete.module.css";

function ConfirmDelete({ resourceName, onDelete, onCancel }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onCancel}>
          <IoClose />
        </button>
        <h2 className={styles.heading}>Delete {resourceName}?</h2>
        <p className={styles.warningText}>
          Are you sure you want to delete this {resourceName}? This action
          cannot be undone.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.deleteButton} onClick={onDelete}>
            Delete
          </button>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDelete;
