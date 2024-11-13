import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword as updatePasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdatePassword() {
  const queryClient = useQueryClient();
  const { mutate: updatePassword, isLoading } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      toast.success(`Your account passsword is updated successfully`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updatePassword, isLoading };
}
