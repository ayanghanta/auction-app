import toast from "react-hot-toast";
import { createNewProduct as createNewProductApi } from "../../services/apiProduct";
import { useMutation } from "@tanstack/react-query";

export function useCreateNewProduct() {
  const { isLoading, mutate: createNewProduct } = useMutation({
    mutationFn: (newProduct) => createNewProductApi(newProduct),

    onSuccess: () => {
      toast.success("Your product is successfully created");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { isLoading, createNewProduct };
}
