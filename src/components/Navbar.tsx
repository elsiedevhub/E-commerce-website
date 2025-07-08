import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import UserIcon from "./Icons/UserIcon";
import HeartIcon from "./Icons/HeartIcon";
import CartIcon from "./Icons/CartIcon";
import React, { useState } from "react";
import AddProductModal from "./AddProductModal"; 
import { useCart } from "../Context/CartContext"; // Adjust the path if needed



const Navbar: React.FC = () => {
  

const { cart } = useCart();
const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
const [showModal, setShowModal] = useState(false);

const handleAddProduct = (data: any) => {
  console.log("Product submitted:", data);
};

  return (
    <>
      <nav className="bg-black text-white px-8 py-4 flex items-center justify-between space-x-4 h-20">
        {/* Left: Logo + Links */}
        <div className="flex items-center">
          <Link to="/">
            <h1 className="font-bold text-2xl w-[150px] h-20 flex items-center">MY STORE</h1>
          </Link>

          <ul className="hidden md:flex text-lg font-medium">
            <li>
              <Link to="/products" className="cursor-pointer hover:text-gray-400 w-[150px] h-20 flex items-center justify-center border-r border-gray-600">
                WOMEN
              </Link>
            </li>

            <li>
              <Link to="/products" className="cursor-pointer hover:text-gray-400 w-[150px] h-20 flex items-center justify-center border-r border-gray-600">
                MEN
              </Link>
            </li>
          </ul>
        </div>

        {/* Center: Search Bar */}
        <div className="flex flex-1 max-w-lg mx-8">
          <div className="flex items-center w-full bg-white text-black rounded-full px-4 py-2 h-12">
            <FaSearch className="text-black mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-6 text-xl">
          <Link to="/account">
            <UserIcon className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          </Link>
          <Link to="/wishlist">
            <HeartIcon className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          </Link>
        <Link to="/cart" className="relative">
          <CartIcon className="w-6 h-6 cursor-pointer hover:text-gray-400" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>



          {/* Add Product Icon */}
          <button onClick={() => setShowModal(true)} title="Add Product" aria-label="Add Product">
            <IoAddCircleOutline className="w-6 h-6" />
          </button>

          <AddProductModal
            open={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={handleAddProduct}
          />

        </div>
      </nav>

     
    </>
  );
};

export default Navbar;
