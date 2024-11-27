import { useQuery } from "@tanstack/react-query";
import { getMyBids as getMyBidsApi } from "../../services/apiBidDetail";

export function useGetMyBids() {
  const { data, isLoading } = useQuery({
    queryFn: getMyBidsApi,
    queryKey: ["myBids"],
  });

  return { data, isLoading };
}
