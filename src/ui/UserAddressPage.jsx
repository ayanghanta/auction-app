import AddressCard from "./AddressCard";
import styles from "./UserAddressPage.module.css";
import Button from "./buttons/Button";

// DUMMY ADRESS
const ADDRESS = [
  {
    id: "1",
    phoneNumber: "9832838188",
    pinCode: "721166",
    locality: "Lutunia",
    address: "Sabang, temathani",
    city: "Medinipur",
    state: "West bengal",
    landMark: "near barik nursing home",
    alternativeNumber: "8116733102",
    tag: "Home",
  },
  {
    id: "2",
    phoneNumber: "7685748744",
    pinCode: "883366",
    locality: "Lutunia",
    address: "Sabang, temathani",
    city: "Medinipur",
    state: "West bengal",
    landMark: "near barik nursing home",
    alternativeNumber: "7484648484",
    tag: "Home",
  },
];

function UserAddressPage() {
  return (
    <div className={styles.addressInfo}>
      {ADDRESS.map((address) => (
        <AddressCard address={address} key={address.id} />
      ))}
      <Button type="primary">+ Add Address</Button>
    </div>
  );
}

export default UserAddressPage;
