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
    },
    [editProductData, reset, isCreate]
  );

  const { errors } = formState;

  function handleReserForm() {
    reset();
    setSelectedCoverImage([]);
    setSelectedOtherImages([]);
  }

  function onSubmit(data) {
    const formData = new FormData();

    // Append form data to FormData object
    Object.keys(data).forEach((field) => {
      if (field !== "coverImage") formData.append(field, data[field]);
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
        navigate("/myProducts");
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
            disabled={isLoading}
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
            disabled={isLoading}
            {...register("basePrice", {
              required: "This field required",
            })}
          />
          <InputError error={errors.basePrice?.message} />
        </div>

        <div>
          <label htmlFor="originCountry">Product origin country</label>
          <input
            type="text"
            id="originCountry"
            disabled={isLoading}
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
            disabled={isLoading}
            {...register("timePeriod", {
              required: "This field required",
            })}
          />
          <InputError error={errors.timePeriod?.message} />
        </div>

        <ChooseFile
          multiple={false}
          selectedFiles={selectedCoverImage}
          onSelectFiles={setSelectedCoverImage}
          id="coverImage"
        >
          Select Cover Image
        </ChooseFile>

        <ChooseFile
          selectedFiles={selectedOtherImages}
          onSelectFiles={setSelectedOtherImages}
          id="otherImages"
        >
          Select Other Images
        </ChooseFile>

        <ChooseFile
          selectedFiles={selectedLegalDoc}
          onSelectFiles={setSelectedLegalDoc}
          id="legalDoc"
          multiple={false}
          accept="application/pdf"
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
          <Button type="primary" role="submit" disabled={isLoading}>
            {isLoading ? <SmallSpinner /> : buttonText}
          </Button>
        </div>
      </form>
    </>
  );
}

export default ProductForm;
