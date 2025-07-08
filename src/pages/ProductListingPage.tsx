import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import PageHeading from "../components/PageHeading";
import ProductCard from "../components/ProductCard";
import ShoeImage from "../assets/shoe.png";
import Footer from "../components/Footer";
import FilterPanel from "../components/FilterPanel";
import AddProductModal from "../components/AddProductModal";



const ProductListingPage: React.FC = () => {
  const totalProducts = 3909;

  // Simulate product list
  const [products, setProducts] = useState(() =>
  Array(100).fill(null).map((_, index) => ({
    id: index + 1,
    image: ShoeImage,
    title: "Adidas Originals V-Neck Sweatshirt",
    price: "NGN 37,500",
    discount: "-60%",
  }))
);
const [showAddModal, setShowAddModal] = useState(false);

  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, totalProducts));
  };

  const visibleProducts = products.slice(0, visibleCount);
  const handleAddProduct = (data: {
  title: string;
  description: string;
  price: string;
  image: File | null;
}) => {
  if (!data.image) return;

  const imageUrl = URL.createObjectURL(data.image);

  const newProduct = {
    id: Date.now(),
    image: imageUrl,
    title: data.title,
    price: `NGN ${parseFloat(data.price).toLocaleString()}`,
    discount: "-30%",
  };

  setProducts([newProduct, ...products]);
};
  <AddProductModal
  open={showAddModal}
  onClose={() => setShowAddModal(false)}
  onSubmit={handleAddProduct}
/>

  return (
    <>
      <Navbar />
      <Discount />
      <PageHeading />

      <FilterPanel />
      
      {/* Main Content */}
      <main className="px-6 md:px-12 py-10 bg-white">
        <p className="text-center text-gray-600 text-sm md:text-xl mb-6 italic">
          {totalProducts.toLocaleString()} styles found
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product, index) => (
           <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={product.discount}
          />

          ))}
        </div>

        {/* Load More Button Section */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-3">
            You’ve viewed {visibleCount} of {totalProducts.toLocaleString()} products
          </p>

          {visibleCount < totalProducts && (
            <button
              onClick={handleLoadMore}
              className="border border-gray-300 px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition"
            >
              LOAD MORE
            </button>
          )}
        </div>
      </main>
      <Footer/>
    </>
  );
};

export default ProductListingPage;
