import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { publishProduct as publishProductApi } from "../../services/apiProduct";

export function usePublishProduct() {
  const queryClient = useQueryClient();
  const { mutate: publishProduct, isLoading } = useMutation({
    mutationFn: ({ id, data }) => publishProductApi({ id, data }),
    onSuccess: () => {
      queryClient.invalidateQueries(["myProducts"]);
      toast.success("Your product is successfully published");
    },
    onError: (err) => toast.error(err.message),
  });

  return { publishProduct, isLoading };
}
