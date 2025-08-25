import { GetAllBrandbyAllProduct, GetAllproductFilter, GetAllProductsRequest } from "../../../api/products"
import {useQuery} from '@tanstack/react-query'

export const getallProducts = (page) => {

    const {data,isLoading,isError,error}=useQuery({
        queryKey:['getallProduct',page],
        onError:(error)=>{
            console.log("Error while getting an products",error)
        },
        queryFn:()=>GetAllProductsRequest(page)
    })

    
  return{
    data,
    isError,
    isLoading,
    error
  }
}

export const getallbrand =()=>{

  const {data,isLoading,isError,error}=useQuery({
    queryKey:['getallbrand'],
    onError:(error)=>{
      console.log("Error while getting an brand",error)
    },
    queryFn:()=>GetAllBrandbyAllProduct()
  })

  return {
    data,
    isError,
    isLoading,
    error
  }
}


export const usegetallProductfilter =(brand,category)=>{

  const {data,isLoading,isError,error}=useQuery({
    queryKey:['getallbrand',brand,category], // this is reason to refech when it's value got change 
    onError:(error)=>{
      console.log("Error while getting an brand",error)
    },
    queryFn:()=>GetAllproductFilter(brand,category),
    keepPreviousData: true, // optional: smoother pagination
  })

  return {
    data,
    isError,
    isLoading,
    error
  }
}



