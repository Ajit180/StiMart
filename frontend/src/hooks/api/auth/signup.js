import { useMutation } from "@tanstack/react-query";
import { signupRequest } from "../../../api/auth";



export const SignUp = ()=>{
      
    const {isError,isPending,error,mutateAsync:signupMutate,isSuccess} = useMutation({
           mutationKey:['Signup'],
           mutationFn:()=>signupRequest,
           onError:(error)=>{
            console.log("Error while Registering the User",error);
           }
           
    })

    return {
        isError,
        isPending,
        error,
        isSuccess,
        signupMutate
    }
}

