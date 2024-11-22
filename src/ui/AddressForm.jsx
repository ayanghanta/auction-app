import { useForm } from "react-hook-form";
import styles from "./AddressForm.module.css";
import Button from "./buttons/Button";
import SmallSpinner from "./SmallSpinner";
import InputError from "./InputError";
import { IoLocationOutline } from "react-icons/io5";
import { getPosition } from "../utils/getCurretGeoPosition";
import { useState } from "react";
import toast from "react-hot-toast";
import { getGeoPositionAddress } from "../services/apiGeoLocation";

/*
phone number validtor regular expresssion :/^\d{10}$/
Indian pincode validtor regular expresssion :/^[1-9][0-9]{5}$/
*/

function AddressForm({
  address = {},
  onCancel,
  submitHandler,
  isLoading,
  isEdit = false,
}) {
  const { reset, register, formState, handleSubmit } = useForm({
    defaultValues: address,
  });
  const { errors } = formState;
  const [isGettingPosition, setIsGettingPosition] = useState(false);

  function onSubmit(data) {
    const addresData = isEdit
      ? { id: address._id, addressObj: { ...data } }
      : { ...data };

    submitHandler(addresData, {
      onSettled: (data) => {
        reset(data?.address);
        onCancel?.();
      },
    });
  }

  const getCurrentPosition = async () => {
    try {
      setIsGettingPosition(true);
      const coords = await getPosition();
      const currentAddress = await getGeoPositionAddress({ ...coords });
      reset(currentAddress);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsGettingPosition(false);
    }
  };

  return (
    <div className={styles.addressEditBox}>
      <p>Edit Address</p>
      <Button type="primary" onClick={getCurrentPosition}>
        <IoLocationOutline />
        {isGettingPosition ? (
          <SmallSpinner />
        ) : (
          <span>Use My Current Location</span>
        )}
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fromCols}>
          <div>
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              {...register("fullName", {
                required: "This field is required",
              })}
            />
            <InputError error={errors.fullName?.message} />
          </div>

          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: "This field is required",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please provide a valid phone number",
                },
              })}
            />
            <InputError error={errors.phoneNumber?.message} />
          </div>
          <div>
            <label htmlFor="pinCode">Pin Code</label>
            <input
              type="text"
              id="pinCode"
              {...register("pinCode", {
                required: "This field is required",
                pattern: {
                  value: /^[1-9][0-9]{5}$/,
                  message: "Please provide a valid pincode",
                },
              })}
            />
            <InputError error={errors.pinCode?.message} />
          </div>

          <div>
            <label htmlFor="locality">Locality</label>
            <input
              type="text"
              id="locality"
              {...register("locality", {
                required: "This field is required",
              })}
            />
            <InputError error={errors.locality?.message} />
          </div>
        </div>

        <div className={styles.textareaContainer}>
          <label htmlFor="address">Address(Area and street)</label>
          <textarea
            rows="4"
            id="address"
            {...register("address", {
              required: "This field is required",
            })}
          ></textarea>
          <InputError error={errors.address?.message} />
        </div>

        <div className={styles.fromCols}>
          <div>
            <label htmlFor="city">City/Town</label>
            <input
              type="text"
              id="city"
              {...register("city", {
                required: "This field is required",
              })}
            />
            <InputError error={errors.city?.message} />
          </div>

          <div>
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              {...register("state", {
                required: "This field is required",
              })}
            />
            <InputError error={errors.state?.message} />
          </div>

          <div>
            <label htmlFor="landMark">Land mark(optional)</label>
            <input type="text" id="landMark" {...register("landMark")} />
            <InputError error={errors.landMark?.message} />
          </div>

          <div>
            <label htmlFor="alternativeNumber">Alternametive phone no</label>
            <input
              type="text"
              id="alternativeNumber"
              {...register("alternativeNumber", {
                pattern: {
                  value: /^\d{10}$/,
                  message: "Please provide a valid phone number",
                },
              })}
            />
            <InputError error={errors.alternativeNumber?.message} />
          </div>
        </div>
        <div className={styles.buttons}>
          <Button type="secondary" size="big" onClick={onCancel}>
            Cancel
          </Button>

          <Button type="update" size="big" role="submit">
            {isLoading ? <SmallSpinner /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
