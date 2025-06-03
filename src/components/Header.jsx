// components/Header.js
import { FaSearch, FaShoppingCart, FaThLarge } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white p-0 ">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {/* <h1 className="text-2xl font-bold text-orange-600">Fi<span className="text-blue-900">Study</span></h1> */}
          <img src="/JSA.svg" alt="" className='h-24 w-24'/>

          {/* Category Dropdown */}
          <button className="flex items-center space-x-2 px-3 py-1 bg-white rounded-full border text-sm text-gray-600 hover:shadow">
            <FaThLarge />
            <span>Category</span>
            <span className="text-xs">▼</span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6 text-sm font-medium text-gray-800">
          <div className="group relative">
            <button className="hover:text-blue-600">Home ▼</button>
          </div>
          <a href="#" className="hover:text-blue-600">About</a>
          <button className="hover:text-blue-600">Pages ▼</button>
          <button className="hover:text-blue-600">Course ▼</button>
          <button className="hover:text-blue-600">Shop ▼</button>
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
      </div>
    </header>
  );
}
