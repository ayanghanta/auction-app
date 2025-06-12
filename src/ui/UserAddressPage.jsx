import { useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import Menus from "./Menu";
import styles from "./UserAddressPage.module.css";
import Button from "./buttons/Button";
import { useCreateAddress } from "../features/user/useCreateAddress";

function UserAddressPage({ user }) {
  const [addAddress, setAddAddress] = useState(false);
  const { createAddress, isLoading } = useCreateAddress();

  return (
    <Menus>
      <div className={styles.editFormConainer}>
        {addAddress && (
          <AddressForm
            onCancel={() => setAddAddress(false)}
            isLoading={isLoading}
            submitHandler={createAddress}
          />
        )}
      </div>
      {user.addresses?.length > 0 ? (
        <div className={styles.addressInfo}>
          {user.addresses.map((address) => (
            <AddressCard address={address} key={address._id} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No Address found add a new address</p>
      )}
      <div className={styles.addButton}>
        <Button type="primary" onClick={() => setAddAddress((ad) => !ad)}>
          {addAddress ? "Cancel" : "+ Add new Address"}
        </Button>
      </div>
    </Menus>
  );
}

export default UserAddressPage;
