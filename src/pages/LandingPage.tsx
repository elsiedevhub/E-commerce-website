import React from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
import HeroSection from "../components/HeroSection";
import FeaturedCollection from "../components/FeaturedCollection";
import Accessories from "../components/Accessories";
import PopularCategories from "../components/PopularCategories";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Discount />
      
      <HeroSection/>
      <FeaturedCollection/>
      <Accessories />
      <PopularCategories />
      <Footer/>

    </>
  );
};


export default LandingPage;
