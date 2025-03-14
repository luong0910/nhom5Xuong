import React from "react";
// import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const FooterClient: React.FC = () => {
  return (
    <>
      {/* Footer */}
      <footer className="border-t mt-8 p-8 bg-white">
        <div className="container mx-auto grid grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">Furniro.</h2>
            <p className="text-gray-600 mt-2">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Links</h3>
              <ul className="mt-2 space-y-1">
                <li className="hover:text-gray-600 cursor-pointer">Home</li>
                <li className="hover:text-gray-600 cursor-pointer">Shop</li>
                <li className="hover:text-gray-600 cursor-pointer">About</li>
                <li className="hover:text-gray-600 cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Help</h3>
              <ul className="mt-2 space-y-1">
                <li className="hover:text-gray-600 cursor-pointer">Payment Options</li>
                <li className="hover:text-gray-600 cursor-pointer">Returns</li>
                <li className="hover:text-gray-600 cursor-pointer">Privacy Policies</li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold">Newsletter</h3>
            <div className="mt-2 flex">
              <input type="email" placeholder="Enter Your Email Address" className="border p-2 flex-1" />
              <button className="bg-black text-white px-4 py-2 ml-2">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="border-t mt-4 pt-4 text-center text-gray-600">2023 Furniro. All rights reserved</div>
      </footer>
    </>
  );
};

export default FooterClient