import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { FaHome, FaUser, FaEnvelope, 
  FaProjectDiagram, FaSun, FaMoon,FaLinkedin ,FaGithub} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Logout from "./logout/Logout";



const Navbar = () => {
  const [isopen , setisopen]=useState(false);
   const navigate = useNavigate();
  return (
    <>
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-300 bg-white">
      {/* Left section: Logo + Links */}
      <div className="flex items-center gap-8">

        <h1 onClick={()=>navigate('/')} className="text-2xl font-bold text-blue-600 cursor-pointer">Stimart</h1>
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            Products
          </a>
          <a href="#" className="hover:text-blue-500">
            Category
          </a>
          <Logout/>
        </div>
      </div>

      {/* Right section: Search + Icons */}
      <div className="hidden md:flex items-center gap-6">
        <div className="w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-4 text-gray-600">
          <div className="hover:text-blue-500 cursor-pointer">Wishlist</div>
          <div className="hover:text-blue-500 cursor-pointer">Cart</div>
          <div className="hover:text-blue-500 cursor-pointer">User</div>
        </div>
      </div>

      <button className="md:hidden" onClick={() => setisopen(!isopen)}>
        {<CiMenuBurger />}
      </button>
    </nav>
    {isopen && (
        <div className="md:hidden bg-gray-100 text-black text-center mt-4 space-y-3 p-4">
          <a
            href="/"
            className="flex justify-center items-center space-x-2 hover:text-blue-400"
          >
            <FaHome /> <span>Home</span>
          </a>
            <a
            href="/"
            className="flex justify-center items-center space-x-2 hover:text-blue-400"
          >
            <FaHome /> <span>Product</span>
          </a>
            <a
            href="/"
            className="flex justify-center items-center space-x-2 hover:text-blue-400"
          >
            <FaHome /> <span>Category</span>
          </a>
            <a
            href="/"
            className="flex justify-center items-center space-x-2 hover:text-blue-400"
          >
            <FaHome /> <span>Wishlist</span>
          </a>
          <Logout/>
          
        </div>
      )}
      </>
  );
};

export default Navbar;
