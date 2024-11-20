import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAddress as updateAddressApi } from "../../services/apiAddress.";
import toast from "react-hot-toast";

export function useUpdateAddress() {
  const queryClinet = useQueryClient();
  const { mutate: updateAddress, isLoading } = useMutation({
    mutationFn: ({ id, addressObj }) => updateAddressApi({ id, addressObj }),
    onSuccess: () => {
      queryClinet.invalidateQueries(["user"]);
      toast.success(`Your address sucessfully updated`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateAddress, isLoading };
}
