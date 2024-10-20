import styles from "./AddProductForm.module.css";
import Button from "../../ui/buttons/Button";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createNewProduct } from "../../services/apiProduct";
import toast from "react-hot-toast";

function AddProductForm() {
  const { register, handleSubmit, reset } = useForm();
  const { isLoading: isProductAdding, mutate } = useMutation({
    mutationFn: (newProduct) => createNewProduct(newProduct),

    onSuccess: () => {
      toast.success("Your product is successfully created");
      reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    const formData = new FormData();

    // Append form data to FormData object
    formData.append("title", data.title);
    formData.append("summary", data.summary);
    formData.append("description", data.description);
    formData.append("basePrice", data.basePrice);
    formData.append("originCountry", data.originCountry);
    formData.append("timePeriod", data.timePeriod);
    formData.append("coverImage", data.coverImage[0]); // Append the file

    // console.log(formData);
    mutate(formData);
  }

  return (
    <div>
      <form className={styles.addProductForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Product Title</label>
          <input type="text" name="title" id="title" {...register("title")} />
        </div>

        <div>
          <label htmlFor="summary">Product Summary</label>
          <textarea
            name="summary"
            id="summary"
            placeholder="short product summary 30-40 words..."
            {...register("summary")}
          ></textarea>
        </div>

        <div>
          <label htmlFor="description">Product Desciption</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            placeholder="details descrption of the product ..."
            {...register("description")}
          ></textarea>
        </div>

        <div>
          <label htmlFor="basePrice">Base Price</label>
          <input
            type="number"
            name="basePrice"
            id="basePrice"
            {...register("basePrice")}
          />
        </div>

        <div>
          <label htmlFor="originCountry">Product origin country</label>
          <input
            type="text"
            name="originCountry"
            id="originCountry"
            {...register("originCountry")}
          />
        </div>

        <div>
          <label htmlFor="timePeriod">Product Time Period</label>
          <input
            type="text"
            name="timePeriod"
            id="timePeriod"
            {...register("timePeriod")}
          />
        </div>

        <div>
          <label htmlFor="coverImage">Product Cover Image</label>
          <input
            type="file"
            name="coverImage"
            id="coverImage"
            {...register("coverImage")}
          />
        </div>
        <div className={styles.buttons}>
          <Button type="secondary" role="reset">
            cancel
          </Button>
          <Button type="primary" role="submit">
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
