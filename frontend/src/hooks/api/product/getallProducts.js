import { GetAllProductsRequest } from "../../../api/orders"
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


