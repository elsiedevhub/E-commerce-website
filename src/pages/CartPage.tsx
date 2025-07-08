import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ShoeImage from "../assets/shoe.png";
import Discount from "../components/Discount";
import { useState } from "react";
import CheckoutModal from "../components/CheckoutModal";
import { useCart } from "../Context/CartContext";



const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  const [showCheckout, setShowCheckout] = useState(false);


  return (
    <>
      <Navbar />
      <Discount />
      <CheckoutModal open={showCheckout} onClose={() => setShowCheckout(false)} />
      <main className="px-6 md:px-12 pt-10 bg-gray-100 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 🧺 Left: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
          <div className=" p-4 mb-6 bg-white  flex justify-between ">
            <h1 className="text-xl font-bold leading-8  ">MY BAG</h1>
            <p className="text-base leading-6 text-gray-500 ">Items reserved for 60 minutes</p>
          </div>
  
          {cart.map(item => (

              <div
                key={item.id}
                className="bg-white p-4  flex flex-col sm:flex-row sm:items-center gap-4 "
              >
                {/* 🖼 Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className=" object-cover rounded w-[156px] h-[128px]"
                />

                {/* ⬅️ Info + Actions Wrapper */}
                <div className="flex justify-between w-full gap-4">
                  {/* 🧾 Product Info + Selectors */}
                  <div className="flex flex-col gap-4">
                    <div className="space-y-1">
                      <p className="text-black font-semibold text-lg leading-7">{item.price}</p>
                      <p className="text-base leading-7">{item.title}</p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {/* <select
                        className="border border-gray-300 text-base leading-6 px-4 py-2 "
                        defaultValue={item.color}
                        aria-label="Select color"
                      >
                        <option>{item.color}</option>
                      </select>
                      <select
                        className="border border-gray-300 text-base leading-6 px-3 py-2"
                        defaultValue={item.size}
                        aria-label="Select size"
                      >
                        <option>{item.size}</option>
                      </select> */}
                      <select
                        aria-label="Select quantity"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="border border-gray-300 text-base leading-6 px-4 py-2"
                      >
                        {[1, 2, 3, 4, 5].map((qty) => (
                          <option key={qty} value={qty}>
                            Qty: {qty}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 💬 Action Buttons */}
                  <div className="flex flex-row items-end justify-between text-gray-500 gap-4">
                    <button aria-label="Add to wishlist">
                      <AiOutlineHeart size={20} />
                    </button>
                    <button onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                      <RxCross2 size={20} />
                    </button>

                  </div>
                </div>
              </div>
          ))}

            {/* Free Delivery Notice */}
            <div className="bg-white p-4   text-sm text-gray-700 flex gap-3">
              <div>
                <GrDeliver className="w-6 h-4" />
              </div>
              <div>

              <p className="font-semibold text-sm leading-5">FREE STANDARD DELIVERY</p>
              <p className="text-sm leading-5 mt-1">Faster delivery options available to most countries.</p>
              <a href="#" className=" text-sm leading-5 underline mt-1 inline-block">More info</a>
              </div>
            </div>

            {/* Extras */}
            <div className="p-4 bg-white">
              <h2 className="text-sm font-bold mb-4 uppercase">A Little Something Extra?</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {Array(4).fill(0).map((_, i) => (
                  <ProductCard
                    key={i}
                    id={100 + i}
                    image={ShoeImage}
                    title="Adidas originals ballet v‑neck sweat in black"
                    price="NGN 37,500"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 💳 Right: Order Summary */}
          <div className="bg-white p-6 space-y-4 h-fit">
            <h2 className="text-lg font-bold">Total</h2>

            {/* Divider after heading */}
            <hr className="border-t border-gray-200" />

            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>NGN {getTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            {/* Divider before button */}
            <hr className="border-t border-gray-200" />

            <button
              onClick={() => setShowCheckout(true)}
              className="w-full bg-[#5C27FE] text-white py-3 rounded-md font-semibold hover:bg-[#4821c9]"
            >
              CHECKOUT
            </button>


            <p className="text-xs text-gray-500">
              Got a discount code? Add it in the next step.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
