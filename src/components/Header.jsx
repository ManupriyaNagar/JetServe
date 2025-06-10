"use client";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const linkClasses = (path) =>
    `hover:text-blue-600 transition ${
      pathname === path ? "text-blue-700 font-semibold border-b-2 border-blue-700 pb-1" : ""
    }`;

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between page-container">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/JSA.svg" alt="Logo" className="h-20 w-20 object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800">
          <a href="/" className={linkClasses("/")}>
            Home
          </a>
          <a href="/#contact" className={linkClasses("/#contact")}>
  Contact
</a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full border border-gray-600 text-gray-600 hover:bg-gray-100"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-3/4 sm:w-1/2 bg-white h-full p-6 relative">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl text-gray-600"
          >
            &times;
          </button>

          <nav className="mt-12 flex flex-col gap-6 text-lg text-gray-800 font-medium">
            <a href="/" className={linkClasses("/")}>
              Home
            </a>
            <a href="/contact" className={linkClasses("/contact")}>
              Contact
            </a>
            <div className="mt-8 flex flex-col gap-3">
              <button className="border border-blue-600 text-blue-600 rounded-md py-2 px-4 hover:bg-blue-50">
                Login
              </button>
              <button className="bg-[#342c74] text-white rounded-md py-2 px-4 hover:bg-indigo-700">
                Register
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
