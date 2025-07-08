import React from "react";
import CategoriesCard from "./CategoriesCard";
import ShirtImage from "../assets/shirt.png";
import BottomsImage from "../assets/bottoms.png";
import FootwearImage from "../assets/footwear.png";
import AccessoriesImage from "../assets/accessories.png";

const PopularCategories: React.FC = () => {
  const products = [
    { image: ShirtImage, title: "T-Shirts" },
    { image: BottomsImage, title: "Bottoms" },
    { image: FootwearImage, title: "Footwear" },
    { image: AccessoriesImage, title: "Accessories" },
  ];

  return (
    <section className="px-6 md:px-12 py-16 bg-white ">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl md:text-2xl leading-8 font-bold mb-5">
          Popular categories
        </h2>
        <a
          href="#"
          className="text-base leading-6 font-medium text-black hover:text-gray-600"
        >
          VIEW ALL
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <CategoriesCard
            key={index}
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
