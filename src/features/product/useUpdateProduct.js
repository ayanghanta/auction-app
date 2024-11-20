import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct as updateProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export function useUpdateProduct() {
  const queryClient = useQueryClient();
  const { mutate: updateProduct, isLoading } = useMutation({
    mutationFn: ({ id, productObj }) => updateProductApi({ id, productObj }),
    onSuccess: () => {
      queryClient.invalidateQueries(["myProducts"]);
      toast.success("Your product is successfully updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateProduct, isLoading };
}
