import { useState } from "react";
import styles from "./AddressEditOptions.module.css";
import { IoEllipsisVertical } from "react-icons/io5";

function AddressEditOptions({ onEdit }) {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div
      className={styles.options}
      onClick={() => setShowOptions((show) => !show)}
    >
      <IoEllipsisVertical className={styles.optionIcon} />
      {showOptions && (
        <div>
          <p onClick={() => onEdit((edit) => !edit)}>Edit</p>
          <p>Delete</p>
        </div>
      )}
    </div>
  );
}

export default AddressEditOptions;
