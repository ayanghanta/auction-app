import { useMutation } from "@tanstack/react-query";
import { verifyProduct as verifyProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useVerifyProduct() {
  const navigate = useNavigate();

  const { mutate: verifyProduct, isLoading } = useMutation({
    mutationFn: verifyProductApi,
    onSuccess: () => {
      toast.success("Product is verified successfully");
      navigate("/app/manageProducts");
    },
    onError: (err) => toast.error(err.message),
  });

  return { verifyProduct, isLoading };
}
