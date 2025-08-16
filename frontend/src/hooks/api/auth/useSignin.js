import { useMutation } from "@tanstack/react-query"
import { siginRequest } from "../../../api/auth"
import useAuth from "../../../store/useAuth";



export const useSigin =()=>{

    const {setAuth} = useAuth();

    const{isSuccess,isPending,isError, mutateAsync:siginmuation}=useMutation({
        mutationFn:siginRequest,
        onSuccess:(response)=>{
     
            const user = {
                _id: response.data._id,
                email: response.data.email,
                username: response.data.username,
                avatar: response.data.avatar,
              };
            
              const token = response.data.token;

         console.log('Sigin Successfully',response);
         console.log('token',token);
         console.log('user',user);


         //save user and token in localstorage
         localStorage.setItem('token',token);
         localStorage.setItem('user',JSON.stringify(user));

         //update the zustand store
         setAuth({
            user:user,
            token:token
            
         });

             
        },
        onError:(error)=>{
            console.log("Error while signin the user",error)
        }
    })

    return{
        isSuccess,
        isPending,
        isError,
        siginmuation
    }
}