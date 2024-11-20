import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct, isLoading } = useMutation({
    mutationFn: deleteProductApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["myProducts"]);
      toast.success("Your product is successfully deleted");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteProduct, isLoading };
}
