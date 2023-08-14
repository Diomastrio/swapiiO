import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../services/apiMessages";

export function useMessages() {
  const {
    isLoading,
    data: messages,
    error,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: getMessages,
  });

  return { isLoading, error, messages };
}
