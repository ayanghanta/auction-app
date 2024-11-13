import styles from "./AddressEditOptions.module.css";
import Modal from "./Modal";
import ConfirmDelete from "./confirmDelete";

function AddressEditOptions({ onEdit }) {
  return (
    <div className={styles.options}>
      <p className={styles.button} onClick={() => onEdit((edit) => !edit)}>
        Edit{" "}
      </p>
      <Modal>
        <Modal.Button id="delete">
          <p className={styles.button}>Delete </p>
        </Modal.Button>
        <Modal.Window id="delete">
          <ConfirmDelete resourceName="Address" />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddressEditOptions;

/*
function AddressEditOptions({ onEdit }) {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = (event) => {
    event.stopPropagation(); // Prevents click event from closing the menu
    setShowOptions((show) => !show);
  };

  return (
    <div className={styles.options} onClick={toggleOptions}>
      <IoEllipsisVertical className={styles.optionIcon} />
      {showOptions && (
        <div>
          <p onClick={() => onEdit((edit) => !edit)}>Edit </p>
          <Modal>
            <Modal.Button id="delete">
              <p>Delete </p>
            </Modal.Button>
            <Modal.Window id="delete">
              <ConfirmDelete resourceName="Address" />
            </Modal.Window>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default AddressEditOptions;
*/
