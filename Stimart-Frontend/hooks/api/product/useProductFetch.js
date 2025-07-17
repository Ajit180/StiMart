"use client";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/apis/product";

const useProductFetch = (page) => {
    const {
      data,
      isLoading,
      isError,
      isSuccess,
      error,
      refetch,
    } = useQuery({
      queryKey: ["products",page],
      queryFn:()=> getAllProducts(page),
      keepPreviousData: true,
    });
  
    return { data, isLoading, isError, isSuccess, error, refetch };
  };
  
  export default useProductFetch;