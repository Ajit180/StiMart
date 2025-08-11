import { useMutation } from "@tanstack/react-query";
import { signupRequest } from "../../../api/auth";



export const SignUp = ()=>{
      
    const {isError,isPending,error,mutateAsync:signupMutate,isSuccess} = useMutation({
           mutationFn:signupRequest,
           onSuccess:(data)=>{console.log("Successfully Signup",data)},
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

