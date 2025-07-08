import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  price: string;
  discount?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id, // ✅ Added this line to receive the id
  image,
  title,
  price,
  discount,
}) => {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className="relative bg-white overflow-hidden">
        {/* Image */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-[250px] object-cover"
          />

          {/* Discount badge */}
          {discount && (
            <span className="absolute top-0 left-0 bg-white text-red-400 text-xs px-2 py-1">
              {discount}
            </span>
          )}

          {/* Heart icon */}
          <button
            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow hover:scale-105"
            aria-label="Add to wishlist"
            onClick={() => console.log("Wishlisted!")}
            data-testid="wishlist-button"
          >
            <FaHeart className="text-gray-700 text-sm" />
          </button>
        </div>

        {/* Info */}
        <div className="mt-4">
          <p className="text-base leading-6 text-gray-800">{title}</p>
          <p className="font-bold text-base leading-6 mt-2">{price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
