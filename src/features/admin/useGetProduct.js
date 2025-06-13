import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/apiProduct";
import { useParams } from "react-router-dom";

export function useGetProduct(id) {
  const { productId } = useParams();
  const { data: product, isLoading } = useQuery({
    queryFn: () => getProduct(id || productId),
    queryKey: ["product", productId || id],
    retry: false,
  });

  return { product, isLoading };
}
