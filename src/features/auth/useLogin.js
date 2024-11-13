import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      // toast.success(`Welcome ${data.user.fullName}`);
    },
    onError: (err) => toast.error(err.message),
  });

  return { login, isLoading };
}
