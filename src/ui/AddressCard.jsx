import { useState } from "react";
import styles from "./AddressCard.module.css";
import AddressEditOptions from "./AddressEditOptions";
import AddressForm from "./AddressForm";
import ConfirmDelete from "./confirmDelete";

function AddressCard({ address }) {
  const [isEdit, setIsEdit] = useState(false);
  const {
    phoneNumber,
    pinCode,
    locality,
    address: addressText,
    city,
    state: addressState,
    tag,
  } = address;

  if (isEdit) return <AddressForm address={address} onCancelEdit={setIsEdit} />;

  return (
    <>
      <div className={styles.addressBox}>
        <div>
          <div className={styles.editContainer}>
            <span className={styles.tag}>{tag}</span>
            <AddressEditOptions onEdit={setIsEdit} />
          </div>
          <p className={styles.userText}>User Name {phoneNumber}</p>
          <p className={styles.addresstext}>
            {`${addressText}, ${locality}, ${city}, ${addressState}-`}

            <strong> {pinCode}</strong>
          </p>
        </div>
      </div>
      <div className={styles.buttons}></div>
    </>
  );
}

export default AddressCard;
