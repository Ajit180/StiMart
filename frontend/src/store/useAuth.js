import {create} from 'zustand'

 const useAuth = create((set)=>({
    user:null,
    token:null,
    isLoading:true,
    setAuth:({user,token})=>set({user , token, isLoading:false}),

    logout:()=>{
        localStorage.removeItem("user"),
        localStorage.removeItem("token"),
        set({user:null,token:null,isLoading:true})
    },

    loadUserfromLocalStorage:()=>{
         try {
            const user = localStorage.getItem("user");
            const token = localStorage.getItem("token");

            if(!user || user=="undefined"||!token){
                throw new Error("Invalid user or Token in the localstorage")
            }

            if(user&&token){
                set({user:JSON.parse(user), token , isLoading:false})
            }else{
                //if user and token is not given
                set({user:null,token:null, isLoading:true})
            }
            
         } catch (error) {
            
         }
    }
}));


export default useAuth