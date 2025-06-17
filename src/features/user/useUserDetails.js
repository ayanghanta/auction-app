import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../../services/apiUser";

export function useUserDetails(userId) {
  const { data, isLoading } = useQuery({
    queryFn: () => getUserDetails(userId),
    queryKey: [`user-${userId}`],
  });

  return { isLoading, user: data?.user };
}
