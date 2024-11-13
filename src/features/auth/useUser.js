import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/apiAuth";

export function useUser() {
  const { data, isLoading } = useQuery({
    queryFn: getUser,
    queryKey: ["user"],
  });

  return { isAuthenticated: data?.authenticated, isLoading, user: data?.user };
}
