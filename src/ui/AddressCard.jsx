import { useState } from "react";
import styles from "./AddressCard.module.css";
import AddressEditOptions from "./AddressEditOptions";
import AddressForm from "./AddressForm";
import Menus from "./Menu";
import { useUpdateAddress } from "../features/user/useUpdateAddress";

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
    _id: addressId,
    fullName,
  } = address;

  const { updateAddress, isLoading } = useUpdateAddress();

  if (isEdit)
    return (
      <AddressForm
        address={address}
        onCancel={() => setIsEdit(false)}
        submitHandler={updateAddress}
        isLoading={isLoading}
        isEdit={true}
      />
    );

  return (
    <>
      <div className={styles.addressBox}>
        <div>
          <div className={styles.editContainer}>
            <span className={styles.tag}>{tag}</span>
            <AddressEditOptions onEdit={setIsEdit} addressId={addressId} />
          </div>
          <p className={styles.userText}>
            {fullName} &mdash; {phoneNumber}
          </p>
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
