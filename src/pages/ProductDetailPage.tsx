import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import ShoeImage from "../assets/shoe.png"; 
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard"; 
import { useCart } from "..//Context/CartContext"; // Adjust the path if needed

const ProductDetailPage: React.FC = () => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // ✅ Get ID from route
  const images = [
  ShoeImage, // Main image
  ShoeImage,
  ShoeImage,
  ShoeImage,
  ShoeImage,
];

const [selectedImage, setSelectedImage] = useState(images[0]);
    const recommendedProducts = Array(4).fill(null).map((_, index) => ({
    id: index + 100, // use unique ids
    image: ShoeImage,
    title: "Adidas originals ballet v-neck sweat in balck",
    price: "NGN 37,500",
    discount: "-60%",
}));



  return (
    <>
      <Navbar />
      <Discount />
      <main className="px-6 md:px-12 py-12 bg-white h-">
          {/* 🔙 Back Button */}
        <button
            onClick={() => navigate(-1)}
            className="flex items-center text-sm text-gray-600 hover:underline mb-6"
        >
            <FaAngleLeft className="mr-2"/> Back
           
        </button>
        <div className="flex flex-col md:flex-row gap-10">
            {/* Left: Product Image */}
            <div className="flex gap-4 w-full md:w-1/2">
            {/* Thumbnails */}
            <div className="flex flex-col gap-5 ">
                {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index}`}
                    onClick={() => setSelectedImage(img)}
                    className={`w-24 h-24 object-cover cursor-pointer  ${
                    selectedImage === img ? "" : "border-gray-200"
                    }`}
                />
                ))}
            </div>

            {/* Main Image */}
            <div className="flex-1">
                <img
                src={selectedImage}
                alt="Selected Product"
                className="w-full h-[622px] object-cover rounded"
                />
            </div>
            </div>


          {/* Right: Product Info */}

            <div className="w-full md:w-[400px] h-10 space-y-6 ">
                {/* Title + Price */}
                <div>
                    <h1 className="text-xl leading-6">Design oversized shirt in white with no print</h1>
                    <p className="text-2xl leading-8 font-bold mt-2">NGN 31,000</p>
                </div>

                {/* Color */}
                <p className="text-base leading-6 text-gray-700">
                    <span className="font-semibold">COLOUR:</span> WHITE
                </p>

                {/* Size Dropdown */}
                <div>
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">Size:</label>
                    <select
                    id="size"
                    className="w-full h-10 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    >
                    <option value="" className="text-gray-50">Please select</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">Extra Large</option>
                    </select>
                </div>

                {/* Add to Bag + Wishlist */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="primary"
                        onClick={() =>
                            addToCart({
                            id: Number(id),
                            title: "Design oversized shirt in white with no print", // or get from props
                            image: selectedImage,
                            price: 31000, // use as a number, not "NGN 31,000"
                            quantity: 1,
                            })
                        }
                        >
                        ADD TO BAG
                    </Button>
                    <button
                    className="bg-gray-50 p-2 rounded-full hover:shadow transition"
                    aria-label="Add to wishlist"
                    >
                    🤍
                    </button>
                </div>

                {/* Shipping Info */}
                <div className="text-sm leading-5 text-gray-600 border border-gray-200 p-4  ">
                    <p>🚚 Free shipping on qualifying orders</p>
                    <a href="#" className="underline text-sm leading-5 text-gray-500 mt-3 block">
                    View our Delivery & Return Policy
                    </a>
                </div>

                {/* Reviews */}
                <div className="flex items-center justify-between text-sm leading-5 border border-gray-200 p-4">
                    <p>Reviews (121)</p>
                    <div className="flex gap-1 text-sm text-yellow-400">
                    {"★★★★☆".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                    ))}
                    </div>
                </div>
            </div>
        </div>
      </main>
        {/* Recommended Products */}
        
        <section className="px-6 md:px-12 py-5 mb-8 bg-white ">
            <hr className="border-t border-gray-200 mt-5" />
           {/* Header */}
            <div className="flex items-center justify-between ">
                <h2 className="text-xl md:text-2xl leading-8 font-bold my-7">YOU MIGHT ALSO LIKE</h2>
                <a href="#" className="text-base leading-6 font-medium text-black  hover:text-gray-600">
                VIEW ALL
                </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5 mb-7">
                {recommendedProducts.map((product) => (
                <div key={product.id} className="min-w-[200px] flex-shrink-0">
                    <ProductCard
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    discount={product.discount}
                    />
                </div>
                ))}
            </div>
        </section>

      <Footer />
    </>
  );
};

export default ProductDetailPage;
