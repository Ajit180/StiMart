// hooks/api/Product/useGetAllProduct.js

import { useQuery } from "@tanstack/react-query";
import { GetAllProductsRequest } from "@/api/orders";

export const useGetAllProduct = (page) => {
  const {
    data,
    isLoading,
    isError,
    error,
    // refetch: fetchProduct,
  } = useQuery({
    queryKey: ["getAllProduct",page],
    queryFn: () => GetAllProductsRequest(page),
    onError: (err) => {
      console.error("GetAllProduct error:", err);
    },
  });

  return {
    data,
    isLoading,
    isError,
    error
  };
};
