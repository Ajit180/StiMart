import { useEffect, useState } from "react";
import { SignUp } from "../../hooks/api/auth/signup";
import { useNavigate } from "react-router-dom";


const Signup = () => {

  const [signupForm,setSignupForm]=useState({
    email:"",
    password:"",
    confirmpassword:"",
    username:""

  })

  console.log("email",signupForm.email);
  console.log("password",signupForm.password);
  console.log("confirmpassword",signupForm.confirmpassword);
  console.log("username",signupForm.username);
  
  const navigate = useNavigate();
   
   const {isPending,isError,signupMutate,isSuccess}=SignUp();

   //handle signup form 

   async function handlesubmit(){

     if(signupForm.password != signupForm.confirmpassword){
      alert("Your Password is Not Matched");
     }
       await signupMutate({
        email:signupForm.email,
        password:signupForm.password,
        username:signupForm.username
       })

       useEffect(()=>{
           if(isSuccess){
              navigate('/signin')
           }else{
            console.log("the user is not registred something went wrong")
           }
       },[isSuccess])
   }



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
              Create an Account
            </h1>
            <p className="text-gray-500 mt-2">Enter your details below</p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setSignupForm({...signupForm ,username:e.target.value})}
              value={signupForm.username}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setSignupForm({...signupForm , email:e.target.value})}
              value={signupForm.email}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setSignupForm({...signupForm , password:e.target.value})}
              value={signupForm.password}
            />
             <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e)=>setSignupForm({...signupForm , confirmpassword:e.target.value})}
              value={signupForm.confirmpassword}
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
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
