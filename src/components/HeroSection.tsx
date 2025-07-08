import React from "react";
import WomenImage from "../assets/women-hero.png";
import MenImage from "../assets/men-hero.png";
import Button from "./Button";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex h-[871px]">
      {/* Left Image */}
      <div className="w-1/2 relative">
        <img
          src={WomenImage}
          alt="Women"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 w-full flex justify-center">
          <Button variant="secondary">SHOP WOMEN</Button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-1/2 relative">
        <img
          src={MenImage}
          alt="Men"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-8 w-full flex justify-center">
          <Button variant="secondary">SHOP MEN</Button>
        </div>
      </div>

      {/* Centered Text Over Both Images */}
      <div className="absolute inset-0 flex items-center justify-center z-10 top-18">
        <h1 className="text-9xl  font-semibold leading-10 w text-white drop-shadow-md">
          This is Fashion
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
