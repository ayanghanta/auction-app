import styles from "./ProductForm.module.css";
import Button from "../../ui/buttons/Button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ChooseFile from "../../ui/ChooseFile";
import SmallSpinner from "../../ui/SmallSpinner";
import InputError from "../../ui/InputError";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProduct";
import Spinner from "../../ui/Spinner";
import { inchToCm, poundToKg } from "../../utils/helper";

function ProductForm({
  productToEditId,
  submitHandler,
  isCreate = true,
  isLoading,
  handelCloseModal,
  formHeader,
}) {
  const [selectedCoverImage, setSelectedCoverImage] = useState([]);
  const [selectedOtherImages, setSelectedOtherImages] = useState([]);
  const [selectedLegalDoc, setSelectedLegalDoc] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [editAllfields, setEditAllFileds] = useState(false);
  const [unit, setUnit] = useState("Cm");
  const navigate = useNavigate();

  const buttonText = isCreate ? "Add Product" : "Update Product";

  const { data: editProductData, isLoading: isGeteeingProductDetails } =
    useQuery({
      queryFn: () => (isCreate ? {} : getProduct(productToEditId)),
      queryKey: ["product", productToEditId],
    });

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });

  // SYNC WITH THE INFORMMATION OF THE PRODUCT
  useEffect(
    function () {
      if (!isCreate) reset(editProductData);
      setIsVerified(editProductData?.verified);
      if (editAllfields) setIsVerified(false);
    },
    [editProductData, reset, isCreate, editAllfields]
  );

  const { errors } = formState;

  function handleReserForm() {
    reset();
    setSelectedCoverImage([]);
    setSelectedOtherImages([]);
  }

  // handle the unit chnage

  // handle the form submition
  function onSubmit(data) {
    const formData = new FormData();

    // Append form data to FormData object
    Object.keys(data).forEach((field) => {
      if (field !== "coverImage") formData.append(field, data[field]);
      // Convert dimensions (inches to cm)
      if (["height", "width", "depth"].includes(field))
        formData.set(field, inchToCm(data[field]));

      // Convert weight (pounds to kg)
      if (field === "weight") formData.set(field, poundToKg(data[field]));
    });

    if (isCreate && selectedCoverImage.length === 0) return;
    if (isCreate && selectedLegalDoc.length === 0) return;

    // append coverimage
    if (selectedCoverImage[0])
      formData.append("coverImage", selectedCoverImage[0]);
    // append other images
    selectedOtherImages.forEach((img) => formData.append("otherImages", img));
    // append legal pdf
    if (selectedLegalDoc[0])
      formData.append("legalDocument", selectedLegalDoc[0]);

    const productData = isCreate
      ? formData
      : { id: productToEditId, productObj: formData };

    submitHandler(productData, {
      onSuccess: () => {
        navigate("/app/myProducts");
        handelCloseModal?.();
      },
    });
  }

  if (isGeteeingProductDetails && !isCreate)
    return (
      <div className={styles.spinnerContiner}>
        <Spinner />
      </div>
    );

  return (
    <>
      {!isCreate && formHeader}
      <form
        className={isCreate ? styles.ProductForm : styles.ProductFormModal}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            id="title"
            disabled={isLoading || isVerified}
            {...register("title", {
              required: "This field required",
            })}
          />
          <InputError error={errors.title?.message} />
        </div>

        <div>
          <label htmlFor="summary">Product Summary</label>
          <textarea
            id="summary"
            disabled={isLoading || isVerified}
            placeholder="short product summary 30-40 words..."
            {...register("summary", {
              required: "This field required",
            })}
          ></textarea>
          <InputError error={errors.summary?.message} />
        </div>

        <div>
          <label htmlFor="description">Product Desciption</label>
          <textarea
            id="description"
            rows="5"
            disabled={isLoading || isVerified}
            placeholder="details descrption of the product ..."
            {...register("description", {
              required: "This field required",
            })}
          ></textarea>
          <InputError error={errors.description?.message} />
        </div>

        <div>
          <label htmlFor="basePrice">Base Price</label>
          <input
            type="number"
            id="basePrice"
            disabled={isLoading || isVerified}
            {...register("basePrice", {
              required: "This field required",
              min: {
                value: 5000,
                message: "Base price must be at leat ₹5000.00",
              },
            })}
          />
          <InputError error={errors.basePrice?.message} />
        </div>

        <div>
          <label htmlFor="originCountry">Product origin country</label>
          <input
            type="text"
            id="originCountry"
            disabled={isLoading || isVerified}
            {...register("originCountry", {
              required: "This field required",
            })}
          />
          <InputError error={errors.originCountry?.message} />
        </div>

        <div>
          <label htmlFor="timePeriod">Product Time Period</label>
          <input
            type="text"
            id="timePeriod"
            disabled={isLoading || isVerified}
            {...register("timePeriod", {
              required: "This field required",
            })}
          />
          <InputError error={errors.timePeriod?.message} />
        </div>

        <ChooseFile
          disabled={isLoading || isVerified}
          multiple={false}
          selectedFiles={selectedCoverImage}
          onSelectFiles={setSelectedCoverImage}
          id="coverImage"
        >
          Select Cover Image
        </ChooseFile>

        <ChooseFile
          disabled={isLoading || isVerified}
          selectedFiles={selectedOtherImages}
          onSelectFiles={setSelectedOtherImages}
          id="otherImages"
        >
          Select Other Images
        </ChooseFile>

        <p className={styles.tagTitle}>Product Dimetions</p>
        <div className={styles.productDimentions}>
          <div>
            <label htmlFor="height">Height</label>
            <input
              type="number"
              id="height"
              step="0.01"
              disabled={isLoading || isVerified}
              {...register("height", {
                required: "This field required",
                min: {
                  value: 0,
                  message: "height can not be 0",
                },
              })}
            />
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              disabled={isLoading || isVerified}
            >
              <option value="Cm">Cm</option>
              <option value="Inch">Inch</option>
            </select>
            <InputError error={errors.height?.message} />
          </div>
          <div>
            <label htmlFor="width">Width</label>
            <input
              type="number"
              id="width"
              step="0.01"
              disabled={isLoading || isVerified}
              {...register("width", {
                required: "This field required",
                min: {
                  value: 0,
                  message: "width can not be 0",
                },
              })}
            />
            <p className={styles.unit}>{unit}</p>
            <InputError error={errors.width?.message} />
          </div>
          <div>
            <label htmlFor="depth">Depth</label>
            <input
              type="number"
              id="depth"
              step="0.01"
              disabled={isLoading || isVerified}
              {...register("depth", {
                required: "This field required",
              })}
            />
            <p className={styles.unit}>{unit}</p>
            <InputError error={errors.depth?.message} />
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              id="weight"
              step="0.01"
              disabled={isLoading || isVerified}
              {...register("weight", {
                required: "This field required",
                min: {
                  value: 0,
                  message: "weight can not be 0",
                },
              })}
            />
            <p className={styles.unit}>{unit === "Cm" ? "Kg" : "Pound"}</p>
            <InputError error={errors.weight?.message} />
          </div>
        </div>

        <div>
          <label htmlFor="material">Material</label>
          <input
            type="text"
            id="material"
            disabled={isLoading || isVerified}
            {...register("material", {
              required: "This field required",
            })}
          />
          <InputError error={errors.material?.message} />
        </div>

        <div>
          <label htmlFor="overallCondition">
            Product&apos;s overall condition
          </label>
          <input
            type="text"
            id="overallCondition"
            disabled={isLoading || isVerified}
            {...register("overallCondition", {
              required: "This field required",
            })}
          />
          <InputError error={errors.overallCondition?.message} />
        </div>

        <div>
          <label htmlFor="historicalSignificance">
            Product&apos;s historical significance
          </label>
          <input
            type="text"
            id="historicalSignificance"
            disabled={isLoading || isVerified}
            {...register("historicalSignificance", {
              required: "This field required",
            })}
          />
          <InputError error={errors.historicalSignificance?.message} />
        </div>

        <div>
          <label htmlFor="certificateNumber">
            Product&apos;s certificate number
          </label>
          <input
            type="text"
            id="certificateNumber"
            disabled={isLoading || isVerified}
            {...register("certificateNumber", {
              required: "This field required",
            })}
          />
          <InputError error={errors.certificateNumber?.message} />
        </div>

        <div>
          <label htmlFor="verifiedBy">Product is verified by</label>
          <input
            type="text"
            id="verifiedBy"
            disabled={isLoading || isVerified}
            {...register("verifiedBy", {
              required: "This field required",
            })}
          />
          <InputError error={errors.verifiedBy?.message} />
        </div>

        <ChooseFile
          selectedFiles={selectedLegalDoc}
          onSelectFiles={setSelectedLegalDoc}
          id="legalDoc"
          multiple={false}
          accept="application/pdf"
          disabled={isLoading || isVerified}
        >
          Upload Legal Document
        </ChooseFile>

        <div className={styles.buttons}>
          <Button
            type="secondary"
            onClick={isCreate ? handleReserForm : handelCloseModal}
          >
            cancel
          </Button>

          {(isCreate || editAllfields) && (
            <Button type="primary" role="submit" disabled={isLoading}>
              {isLoading ? <SmallSpinner /> : buttonText}
            </Button>
          )}

          {isVerified && (
            <Button
              type="warn"
              onClick={() => setEditAllFileds(true)}
              disabled={isLoading}
            >
              Enable Product update
            </Button>
          )}
        </div>
      </form>
    </>
  );
}

export default ProductForm;
