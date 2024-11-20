import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAddress as createAddressApi } from "../../services/apiAddress.";
import toast from "react-hot-toast";

export function useCreateAddress() {
  const queryClinet = useQueryClient();

  const { mutate: createAddress, isLoading } = useMutation({
    mutationFn: createAddressApi,
    onSuccess: () => {
      queryClinet.invalidateQueries(["user"]);
      toast.success(`Your address sucessfully Created`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { createAddress, isLoading };
}
