import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllAuctions as getAllAuctionsApi } from "../../services/apiAuctions";
import { useSearchParams } from "react-router-dom";
import { RES_PER_PAGE_HOME } from "../../constant";

export function useAuctions() {
  const [searchParams] = useSearchParams();
  const queryClinet = useQueryClient();

  // PAGINATING
  const numPage = +searchParams.get("page") || 1;
  const queryStr = `page=${numPage}&limit=${RES_PER_PAGE_HOME}`;

  const { data, isLoading, status } = useQuery({
    queryKey: ["auctions", numPage],
    queryFn: () => getAllAuctionsApi(queryStr),
  });

  // PRE FETCHING
  const totalPage = Math.ceil(data?.totals / RES_PER_PAGE_HOME);

  if (totalPage > numPage) {
    const queryStr = `page=${numPage + 1}&limit=${RES_PER_PAGE_HOME}`;
    queryClinet.prefetchQuery({
      queryKey: ["auctions", numPage + 1],
      queryFn: () => getAllAuctionsApi(queryStr),
    });
  }
  if (numPage > 1) {
    const queryStr = `page=${numPage - 1}&limit=${RES_PER_PAGE_HOME}`;
    queryClinet.prefetchQuery({
      queryKey: ["auctions", numPage - 1],
      queryFn: () => getAllAuctionsApi(queryStr),
    });
  }

  return {
    auctions: data?.data?.auctions,
    isLoading,
    status,
    totalSize: data?.totals,
  };
}
