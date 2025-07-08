import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  const baseStyle = "px-6 py-3 rounded-md font-medium transition";
  const variants = {
    primary: "bg-[#553CDD] text-white hover:bg-gray-800 w-[338px] h-12 text-base font-medium leading-6",
    secondary: "bg-white text-black w-52 h-12 text-base font-medium leading-6 hover:bg-gray-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
