import { useEffect, useState } from "react";
import { useSigin } from "../../hooks/api/auth/useSignin";
import { useNavigate } from "react-router-dom";


const Signin = () => {

  const [SigninForm,setSigninForm] = useState({
      email:"",
      password:""

  })
  
   const navigate = useNavigate();

   const {isSuccess,isPending,isError,siginmuation}=useSigin()

   if(isError){
     return(<div>Something went Wrong</div>)
   }


   console.log("the value of the email and password is ",SigninForm.email ,"password is  ",SigninForm.password);


   async function handlesubmit(e){
      e.preventDefault();
    await siginmuation({
      email:SigninForm.email,
      password:SigninForm.password
     })

   }

   useEffect(()=>{
       if(isSuccess){
          navigate('/');
       }
   },[isSuccess])


  return (
    <div className="flex min-h-screen">
      {/* Side Image */}
      <div className="hidden lg:block w-1/2">
        <img src="https://images.pexels.com/photos/6214362/pexels-photo-6214362.jpeg" alt="Side" className="w-full h-full object-cover" />
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full px-6 py-10 bg-white shadow-lg rounded-lg">
          {/* Heading */}
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Login
            </h1>
            <p className="text-gray-500 mt-2">Enter your details below</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handlesubmit}>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setSigninForm({...SigninForm, email:e.target.value})}
              value={SigninForm.email}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setSigninForm({...SigninForm , password:e.target.value})}
              value={SigninForm.password}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

          {/* Already have account */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-600 hover:underline">
                SignUp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
