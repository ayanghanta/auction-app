import { useQuery } from "@tanstack/react-query";
import { getBid } from "../../services/apiBidDetail";

export function useGetBidDetail(bidId) {
  const { data, isLoading } = useQuery({
    queryFn: () => getBid(bidId),
    queryKey: ["bid", bidId],
  });

  return {
    data,
    isLoading,
  };
}
