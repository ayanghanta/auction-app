import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rejectProduct as rejectProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useReject() {
  const { productId } = useParams();
  const queryClient = useQueryClient();

  const { mutate: rejectProduct, isLoading } = useMutation({
    mutationFn: ({ id, couse }) => rejectProductApi({ id, couse }),
    onSuccess: () => {
      queryClient.invalidateQueries(["product", productId]);
      toast.success("Product verification is rejected");
    },
    onError: (err) => toast.error(err.message),
  });

  return { rejectProduct, isLoading };
}
