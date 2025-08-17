import { useEffect } from "react";
import useAuth from "../../store/useAuth"
import { Navigate } from "react-router-dom";

const ProtectedCom = ({children}) => {
     const {user,token,isLoading,loadUserfromLocalStorage}=useAuth();
      
     //load the user auth from the local storage from the 
     useEffect(()=>{
        loadUserfromLocalStorage()
     },[loadUserfromLocalStorage])

     if(isLoading){
        return(<div>Loading... in the protected route</div>)
     }

     if(!user || !token){
       return  <Navigate to={'/signin'}/>
     }

     return children;
}

export default ProtectedCom
