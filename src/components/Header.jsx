
"use client";
import { FaSearch, FaShoppingCart, FaThLarge, FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white p-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="/JSA.svg" alt="Logo" className="h-24 w-24" />
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-800">
          <div className="group relative">
            <button className="hover:text-blue-600">Home ▼</button>
          </div>
          <a href="#" className="hover:text-blue-600">About</a>
          <button className="hover:text-blue-600">Pages ▼</button>
          <button className="hover:text-blue-600">Course ▼</button>
          <button className="hover:text-blue-600">Blog ▼</button>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-3">
          <button className="p-2 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-100">
            <FaSearch />
          </button>
          <button className="px-4 py-1 border rounded-md text-blue-600 font-medium hover:bg-blue-100">
            Login
          </button>
          <button className="px-4 py-1 bg-[#342c74] text-white rounded-md font-medium hover:bg-blue-600">
            Register
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="md:hidden p-2 rounded-full border border-gray-600 text-gray-600 hover:bg-gray-100">
          <FaBars />
        </button>
      </div>

      {/* Sidebar / Slide-in Menu for Mobile */}
      <div className={`fixed inset-0 z-20 bg-black bg-opacity-50  transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="w-3/4 bg-white h-full p-4">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl text-gray-600">
            &times;
          </button>
          <nav className="flex flex-col space-y-4 text-lg font-medium text-gray-800">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Pages</a>
            <a href="#" className="hover:text-blue-600">Course</a>
            <a href="#" className="hover:text-blue-600">Shop</a>
            <a href="#" className="hover:text-blue-600">Blog</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
            <div className="flex items-center space-x-3 mt-6">
              <button className="p-2 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-100">
                <FaSearch />
              </button>
              <button className="px-4 py-1 border rounded-md text-blue-600 font-medium hover:bg-blue-100">
                Login
              </button>
              <button className="px-4 py-1 bg-[#342c74] text-white rounded-md font-medium hover:bg-blue-600">
                Register
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
