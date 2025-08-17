import { addtocartRequest } from "../../../api/cart";
import { useMutation } from "@tanstack/react-query";


export const useAddProductToCart =()=>{

  
    const{isSuccess,isPending,isError,mutateAsync:addproductToCartmutate}=useMutation({
           mutationFn:addtocartRequest,
           onSuccess:(response)=>{
              console.log("The cart is added to the ",response)
           },
           onError:(error)=>{
            console.log("Error while adding product to cart",error)
           }
    })

    return{
        addproductToCartmutate,
        isSuccess,
        isPending,
        isError
    }
  
}