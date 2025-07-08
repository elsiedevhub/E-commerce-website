import React from "react";


interface CategoriesCardProps {
  image: string;
  title: string;

}

const CategoriesCard: React.FC<CategoriesCardProps> = ({
  image,
  title,
 
}) => {
  return (
    <div className="relative  bg-white overflow-hidden">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-[250px] object-cover" />
      </div>

      {/* Info */}
      <div className="mt-4">
        <p className="text-base leading-6 font-bold flex items-center justify-center text-gray-800">{title}</p>
      </div>
    </div>
  );
};

export default CategoriesCard;
