import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { PRODUCT_IMG_URL } from "../../constant";
import { useCreateAddress } from "../../features/user/useCreateAddress";
import AddressCard from "../../ui/AddressCard";
import AddressForm from "../../ui/AddressForm";
import Back from "../../ui/Back";
import Menus from "../../ui/Menu";
import Spinner from "../../ui/Spinner";
import CollapsText from "../../utils/CollapsText";
import { formatCurrency } from "../../utils/helper";
import { useGetProduct } from "../admin/useGetProduct";
import { useUser } from "../auth/useUser";
import styles from "./Checkout.module.css";
import CheckOutButton from "./CheckOutButton";

function Checkout() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addNewAddress, setAddNewAddress] = useState(false);
  const { createAddress, isLoading: isAddressCreating } = useCreateAddress();

  const { productId } = useParams();
  const { product, isLoading } = useGetProduct(productId);
  const { isLoading: loadingUserData, user } = useUser();

  // console.log(product);

  function handleSelectAddress(addressId) {
    if (!addressId) return;

    setSelectedAddress(addressId);
  }
  function handleContinue() {
    if (!selectedAddress) {
      toast.error("Plase select a address");
      return;
    }

    // redirect to the playment page
  }

  useEffect(
    function () {
      if (!user?.addresses?.length || user.addresses.length === 0) return;

      const defaultAddress = user.addresses[0]._id;
      setSelectedAddress(defaultAddress);
    },
    [user?.addresses]
  );

  if (isLoading) return <Spinner />;
  const { coverImage, title, summary, basePrice, currentBid } = product || {};

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>
      <Back />

      <div className={styles.productDetails}>
        <img
          src={`${PRODUCT_IMG_URL}/${coverImage}`}
          alt={`image of ${title}`}
          className={styles.coverImage}
        />
        <div className={styles.details}>
          <p className={styles.title}>{title}</p>
          <p className={styles.summary}>
            <CollapsText wordShown={20}>{summary}</CollapsText>
          </p>
          <div className={styles.basePrice}>
            <p>Base price:</p> <p>{formatCurrency(basePrice)}</p>
          </div>
          <div className={styles.finalPrice}>
            <p className={styles.tag}>Winning price:</p>
            <p>{formatCurrency(currentBid)}</p>
          </div>
          <div className={styles.linkBox}>
            <a
              href={`/app/auctions/${productId}`}
              className={styles.productLink}
            >
              <HiMiniArrowTopRightOnSquare />
              <span>View item details</span>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.addressDetails}>
        <h3>Delivary Address</h3>
        {loadingUserData && <Spinner />}
        <Menus>
          <div className={styles.addressInfo}>
            {user.addresses?.length !== 0 ? (
              user.addresses.map((address) => (
                <div key={address._id} className={styles.addressContainer}>
                  <input
                    type="checkbox"
                    checked={address._id === selectedAddress}
                    className={styles.selectCheckBox}
                    onClick={() => handleSelectAddress(address._id)}
                    onChange={() => ""}
                  />
                  <AddressCard address={address} />
                </div>
              ))
            ) : (
              <p className={styles.noAddress}>No Address saved</p>
            )}
          </div>
        </Menus>

        <div className={styles.editFormConainer}>
          {addNewAddress && (
            <AddressForm
              onCancel={() => setAddNewAddress(false)}
              isLoading={isAddressCreating}
              submitHandler={createAddress}
              isNewAddress={true}
            />
          )}
        </div>
        <div className={styles.btnsConteiner}>
          {!addNewAddress && (
            <button
              className={styles.addNewAddress}
              onClick={() => setAddNewAddress(true)}
            >
              + Add New Address
            </button>
          )}
        </div>
      </div>

      <div className={styles.btnsConteiner}>
        <CheckOutButton productId={productId} addressId={selectedAddress} />
      </div>
    </div>
  );
}

export default Checkout;
