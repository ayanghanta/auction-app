import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAddress as deleteAddressApi } from "../../services/apiAddress.";
import toast from "react-hot-toast";

export function useDeleteAddress() {
  const queryClinet = useQueryClient();

  const { mutate: deleteAddress, isLoading } = useMutation({
    mutationFn: deleteAddressApi,
    onSuccess: () => {
      queryClinet.invalidateQueries(["user"]);
      toast.success(`Your address sucessfully Deleted`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteAddress, isLoading };
}
