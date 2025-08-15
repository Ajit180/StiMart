import { useQuery } from "@tanstack/react-query";
import { getallcategoryRequest } from "../../../api/category";


export const getCategory = ()=>{

    const{data,isSuccess,isError,isLoading}=useQuery({
          queryKey:["getcategory"],
          queryFn:()=>getallcategoryRequest(),
          onError:(error)=>{
            console.log("Error while fetching the data",error)
          }
    })


    return {
        data,
        isError,
        isSuccess,
        isLoading
    }
}