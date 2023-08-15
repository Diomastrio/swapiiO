import { useQuery } from "@tanstack/react-query";
import { getProductos } from "../../services/apiProductos";

export function useProductos() {
  const {
    isLoading,
    data: productos,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductos,
  });

  return { isLoading, error, productos };
}
