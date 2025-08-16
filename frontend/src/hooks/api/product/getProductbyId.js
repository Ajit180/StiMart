import { useQuery } from "@tanstack/react-query"
import { GetProductByIdRequest } from "../../../api/products"


export const getProductbyId = (id)=>{
   

    const {data,isLoading,isError,error,isSuccess}=useQuery({
        queryKey:['getallProduct'],
        onError:()=>{
            console.log("Error while fetching the data from the api",error)
        },
        queryFn:()=>GetProductByIdRequest(id),
        //   enabled: !!id, // Important: don’t run unless ID exists
    });

    return {
          data,
          isLoading,
          isError,
          error,
          isSuccess
    }
}