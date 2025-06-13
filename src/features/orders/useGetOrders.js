import { useQuery } from "@tanstack/react-query";
import { getAllOrders, getOrder } from "../../services/apiOrder";

export function useGetOrders(orderId) {
  const { data, isLoading } = useQuery({
    queryFn: () => {
      return orderId ? getOrder(orderId) : getAllOrders();
    },
    queryKey: ["orders"],
  });

  return { data, isLoading };
}
