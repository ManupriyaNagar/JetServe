"use client";
import { usePathname } from "next/navigation";
import { FaBars, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between page-container">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src="/commercial-pilot-license/JSA.svg" alt="Logo" className="h-20 w-20 object-contain" /> */}
          <img src="image.png" alt="" className="h-20 w-40 object-contain"/>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
          <a
            href="tel:18003090503"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-shadow shadow-sm"
          >
            <FaPhone size={18} />
            <span>Call Us</span>
          </a>
          <a
            href="https://wa.me/918003090503"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-shadow shadow-sm"
          >
            <FaWhatsapp size={18} />
            <span>WhatsApp</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full border border-gray-600 text-gray-600 hover:bg-gray-100 transition"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-3/4 sm:w-1/2 bg-white h-full p-6 relative shadow-lg">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl text-gray-600"
          >
            &times;
          </button>

          <nav className="mt-12 flex flex-col gap-6">
            <a
              href="tel:18003090503"
              className="flex items-center gap-3 px-5 py-3 rounded-lg bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-shadow shadow"
            >
              <FaPhone size={20} /> Call Us
            </a>
            <a
              href="https://wa.me/918003090503"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 rounded-lg bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-shadow shadow"
            >
              <FaWhatsapp size={20} /> WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
);
}