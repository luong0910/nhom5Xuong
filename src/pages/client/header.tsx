import React from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderClient: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 border-b shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-yellow-500 text-2xl font-bold">&#9650;</span>
        <span className="text-xl font-bold ml-2">Furniro</span>
      </div>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6 text-lg">
        <li className="hover:text-gray-600 cursor-pointer">Home</li>
        <li className="hover:text-gray-600 cursor-pointer">Shop</li>
        <li className="hover:text-gray-600 cursor-pointer">About</li>
        <li className="hover:text-gray-600 cursor-pointer">Contact</li>
      </ul>
      
      {/* Icons */}
      <div className="flex space-x-6 text-xl">
        <FaUser className="cursor-pointer hover:text-gray-600" />
        <FaSearch className="cursor-pointer hover:text-gray-600" />
        <FaHeart className="cursor-pointer hover:text-gray-600" />
        <Link to={'/shop'}><FaShoppingCart className="cursor-pointer hover:text-gray-600" /></Link>
      </div>
    </nav>
  );
};

export default HeaderClient