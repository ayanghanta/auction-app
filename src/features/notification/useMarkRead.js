import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markRead } from "../../services/apiNotification";

export function useMarkRead() {
  const queryClinet = useQueryClient();

  const { mutate: markReadNotification, isLoading } = useMutation({
    mutationFn: (id) => markRead(id),
    onSuccess: () => {
      queryClinet.fetchInfiniteQuery(["notifications"]);
    },
  });

  return { markReadNotification, isLoading };
}
