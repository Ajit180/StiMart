import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-300 bg-white">
      {/* Left section: Logo + Links */}
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold text-blue-600">Stimart</h1>
        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-500">
            Home
          </a>
          <a href="#" className="hover:text-blue-500">
            Products
          </a>
          <a href="#" className="hover:text-blue-500">
            Category
          </a>
        </div>
      </div>

      {/* Right section: Search + Icons */}
      <div className="flex items-center gap-6">
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
    </nav>
  );
};

export default Navbar;
