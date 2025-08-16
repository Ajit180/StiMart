import { useEffect } from "react";
import useAuth from "../../store/useAuth"
import { useNavigate } from "react-router-dom";

const ProtectedCom = ({children}) => {
    const navigate = useNavigate();
     const {user,token,isLoading,loadUserfromLocalStorage}=useAuth();
      
     //load the user auth from the local storage from the 
     useEffect(()=>{
        loadUserfromLocalStorage()
     },[loadUserfromLocalStorage])

     if(isLoading){
        return(<div>...Loading</div>)
     }

     if(!user || !token){
        navigate('/signin');
     }

     return children;
}

export default ProtectedCom
