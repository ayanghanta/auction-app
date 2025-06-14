import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllAuctions as getAllAuctionsApi } from "../../services/apiAuctions";
import { useSearchParams } from "react-router-dom";
import { RES_PER_PAGE_HOME } from "../../constant";

export function useAuctions(isLiveAuction, numResult) {
  const [searchParams] = useSearchParams();
  const queryClinet = useQueryClient();
  const queryFilter = {};
  const now = new Date().toISOString(); // Current date and time

  // LIVE-AUCTION FILTERING
  if (isLiveAuction) {
    queryFilter[`auctionsStartsAt[lte]`] = now;
    queryFilter[`auctionsEndsAt[gt]`] = now;
  }
  // OTHER FILTERING
  const category = searchParams.get("category");
  if (category) queryFilter.category = category;

  // PAGINATING
  const numPage = +searchParams.get("page") || 1;
  // const queryStr = `page=${numPage}&limit=${RES_PER_PAGE_HOME}`;
  queryFilter.page = numPage;
  queryFilter.limit = numResult || RES_PER_PAGE_HOME;

  const uniqueKey = `live-${isLiveAuction}-page-${numPage}-cate-${category}`;
  const { data, isLoading, status } = useQuery({
    queryKey: ["auctions", uniqueKey],
    queryFn: () => getAllAuctionsApi(queryFilter),
  });

  // PRE FETCHING
  const totalPage = Math.ceil(data?.totals / RES_PER_PAGE_HOME);

  if (totalPage > numPage) {
    const preQueryFilter = { ...queryFilter, page: numPage + 1 };
    const uniqueKey = `live-${isLiveAuction}-page-${
      numPage + 1
    }-cate-${category}`;
    queryClinet.prefetchQuery({
      queryKey: ["auctions", uniqueKey],
      queryFn: () => getAllAuctionsApi(preQueryFilter),
    });
  }
  if (numPage > 1) {
    const preQueryFilter = { ...queryFilter, page: numPage - 1 };
    const uniqueKey = `live-${isLiveAuction}-page-${
      numPage - 1
    }-cate-${category}`;
    queryClinet.prefetchQuery({
      queryKey: ["auctions", uniqueKey],
      queryFn: () => getAllAuctionsApi(preQueryFilter),
    });
  }

  return {
    auctions: data?.data?.auctions,
    isLoading,
    status,
    totalSize: data?.totals,
  };
}
