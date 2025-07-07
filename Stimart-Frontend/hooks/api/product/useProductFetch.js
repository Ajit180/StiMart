"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/apis/product";

const useProductFetch = () => {
    const {
      data,
      isLoading,
      isError,
      isSuccess,
      error,
      refetch,
    } = useQuery({
      queryKey: ["products"],
      queryFn: getAllProducts,
    });
  
    return { data, isLoading, isError, isSuccess, error, refetch };
  };
  
  export default useProductFetch;