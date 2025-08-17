import { useQuery } from "@tanstack/react-query";
import { getcartdetailsRequest } from "../../../api/cart";


export const useGetCartDetails =(token)=>{

        const{data,isLoading,isSuccess,isError}=useQuery({
              queryKey:['getcart'],
              queryFn:()=>getcartdetailsRequest(token),
              onError:(error)=>{
                console.log("Error while getting the cart ",error)
              }
        })


        return{
            data,
            isLoading,
            isSuccess,
            isError
        }
}