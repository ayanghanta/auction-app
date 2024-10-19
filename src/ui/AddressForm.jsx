import styles from "./AddressForm.module.css";
import Button from "./buttons/Button";

function AddressForm({ address, onCalcelEdit }) {
  const {
    phoneNumber,
    pinCode,
    locality,
    address: addressText,
    city,
    state: addressState,
    tag,
    landMark,
    alternativeNumber,
  } = address;
  return (
    <div className={styles.addressEditBox}>
      <p>Edit Address</p>
      <Button type="primary">Use my Cerruent location</Button>
      <form>
        <div className={styles.fromCols}>
          <div>
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              defaultValue={"username" || ""}
            />
          </div>

          <div>
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="text"
              name="phoneNo"
              id="phoneNo"
              defaultValue={phoneNumber || ""}
            />
          </div>
          <div>
            <label htmlFor="pinCode">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              id="pinCode"
              defaultValue={pinCode || ""}
            />
          </div>
          <div>
            <label htmlFor="locality">Locality</label>
            <input
              type="text"
              name="locality"
              id="locality"
              defaultValue={locality || ""}
            />
          </div>
        </div>

        <div className={styles.textareaContainer}>
          <label htmlFor="address">Address(Area and street)</label>
          <textarea
            name="address"
            id="address"
            rows="4"
            defaultValue={addressText || ""}
          ></textarea>
        </div>

        <div className={styles.fromCols}>
          <div>
            <label htmlFor="city">City/Town</label>
            <input
              type="text"
              name="city"
              id="city"
              defaultValue={city || ""}
            />
          </div>

          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              name="state"
              id="state"
              defaultValue={addressState || ""}
            />
          </div>
          <div>
            <label htmlFor="landMark">Land mark(optional)</label>
            <input
              type="text"
              name="landMark"
              id="landMark"
              defaultValue={landMark || ""}
            />
          </div>
          <div>
            <label htmlFor="alternativePhoneNo">Alternametive phone no</label>
            <input
              type="text"
              name="alternativePhoneNo"
              id="alternativePhoneNo"
              defaultValue={alternativeNumber || ""}
            />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button type="update" size="big">
            Save
          </Button>
          {onCalcelEdit && (
            <Button
              type="secondary"
              role="reset"
              size="big"
              onClick={() => onCalcelEdit(false)}
            >
              Cancel
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
