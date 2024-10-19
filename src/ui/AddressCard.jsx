import { useState } from "react";
import styles from "./AddressCard.module.css";
import AddressEditOptions from "./AddressEditOptions";
import AddressForm from "./AddressForm";

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

  if (isEdit) return <AddressForm address={address} onCalcelEdit={setIsEdit} />;

  return (
    <>
      <div className={styles.addressBox}>
        <div>
          <span className={styles.tag}>{tag}</span>
          <p className={styles.userText}>User Name {phoneNumber}</p>
          <p className={styles.addresstext}>
            {`${addressText}, ${locality}, ${city}, ${addressState}-`}

            <strong> {pinCode}</strong>
          </p>
        </div>
        <AddressEditOptions onEdit={setIsEdit} />
      </div>
      <div className={styles.buttons}>

      </div>
    </>
  );
}

export default AddressCard;
