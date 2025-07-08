import React from "react";
import FilterSelect from "./FilterSelect";

const FilterPanel: React.FC = () => {
  return (
   <div className="bg-[#f9f9f9] px-6 py-4">
  <div className="bg-[#f9f9f9] px-6 py-4">
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    <FilterSelect options={["Sort", "Price (Low to High)", "Price (High to Low)"]} />
    <FilterSelect options={["Colour", "White", "Black"]} />
    <FilterSelect options={["Category", "Shoes", "Shirts"]} />
    <FilterSelect options={["Size", "Small", "Medium","large"]} />
  </div>
</div>

</div>

  );
};

export default FilterPanel;
