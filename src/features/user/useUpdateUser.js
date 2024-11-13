import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMe } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateMe,
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      toast.success(`Your account is updated successfully`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateUser, isLoading };
}
