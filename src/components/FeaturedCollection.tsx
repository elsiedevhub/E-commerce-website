import React from "react";
import ProductCard from "./ProductCard";
import ShoeImage from "../assets/shoe.png"; // Replace with your actual path

const FeaturedCollection: React.FC = () => {
    const products = Array(4).fill(null).map((_, index) => ({
    id: index + 100, // use unique ids
    image: ShoeImage,
    title: "Adidas originals ballet v-neck sweat in balck",
    price: "NGN 37,500",
    discount: "-60%",
}));

  return (
    <section className="px-6 md:px-12 py-16 bg-white mt-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl md:text-2xl leading-8 font-bold mb-5">FEATURED COLLECTION</h2>
        <a href="#" className="text-base leading-6 font-medium text-black  hover:text-gray-600">
          VIEW ALL
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            id={product.id}
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollection;
