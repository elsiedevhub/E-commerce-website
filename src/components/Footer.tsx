import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 md:px-12 py-10 h-[321px]">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row items-center justify-between  mt-14 space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-300">Link One</li>
          <li className="cursor-pointer hover:text-gray-300">Link Two</li>
          <li className="cursor-pointer hover:text-gray-300">Link Three</li>
          <li className="cursor-pointer hover:text-gray-300">Link Four</li>
          <li className="cursor-pointer hover:text-gray-300">Link Five</li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaInstagram className="cursor-pointer hover:text-gray-300" />
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-300" />
          <FaYoutube className="cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white my-6 mt-10" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
        <p>© 2023 Relume. All right reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookies Settings
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
