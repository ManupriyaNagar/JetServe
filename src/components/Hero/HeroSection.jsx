// components/Hero.js
import Image from 'next/image'
import { FaThumbsUp } from 'react-icons/fa'
import { FiCheckCircle } from 'react-icons/fi'
import { FaHelicopter } from 'react-icons/fa';
import { FaPlane } from "react-icons/fa";
import { BsStars } from 'react-icons/bs'

export default function HeroSection() {
  return (
    <section className="py-10 relative overflow-hidden bg-[url('/bacground.gif')] bg-no-repeat bg-cover bg-center z-50">
      <div className="absolute inset-0 bg-black/50 z-0" />


  <section className="-mt-10 z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 ">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#101720] leading-tight ">
            Choose Your Dream <br />
            of Flying<span className="text-[#647424]"> With</span><br />
            <span className="text-[#342c74] decoration-4">Jet Serve Aviation Academy</span>
          </h1>
          <p className="text-gray-100 mt-4 z-20">
          Jet Serve Aviation Academy offers DGCA-approved CPL & CHPL training with expert instructors, modern aircraft, and strong placement support.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
          <button className="bg-white border font-medium px-6 py-2 rounded-full text-gray-700 shadow flex items-center gap-2">
          <FaHelicopter className="text-blue-600 z-20" />
              CPL
            </button>
            <button className="bg-white border font-medium px-6 py-2 rounded-full text-gray-700 shadow flex items-center gap-2">
            <FaPlane className="text-blue-600 z-20" />
              CHPL
            </button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2 z-20">
              <BsStars />
              Enroll Now
            </button>
            
          </div>
        </div>

        {/* Right Image & Badge */}
        <div className="relative">
          <Image
            src="/pilot.png"
            alt="Student"
            width={500}
            height={500}
            className="rounded-lg mr-20 " 
          />

          {/* Badge - Success Student */}
          <div className="absolute top-4 right-0 bg-white shadow-lg px-4 py-2 rounded-xl text-center z-20 
   ">
  <div className="flex justify-center space-x-1 mb-1">
    <Image src="/student1.jpg" alt="Student" width={24} height={24} className="rounded-full" />
    <Image src="/student2.jpg" alt="Student" width={24} height={24} className="rounded-full" />
  </div>
  <p className="text-blue-600 font-bold text-lg">2000+</p>
  <p className="text-sm text-gray-700">Success Student</p>
</div>


          
          <div className="absolute bottom-14 left-0 bg-white shadow-lg px-4 py-2 rounded-xl text-center z-20 animate-[float_3s_ease-in-out_infinite]">
            <div className="flex justify-center space-x-1 mb-1">
              <Image src="/student1.jpg" alt="Student" width={24} height={24} className="rounded-full" />
              <Image src="/student2.jpg" alt="Student" width={24} height={24} className="rounded-full" />
            </div>
            <p className="text-blue-600 font-bold text-lg">2000+</p>
            <p className="text-sm text-gray-700">Success Student</p>
          </div>
          {/* Badge - Udemy Rating */}
          {/* <div className="absolute left-0 bg-white shadow-lg px-3 py-2 rounded-xl flex items-center gap-10 z-20">
            <Image src="/user-avatar.jpg" alt="Avatar" width={32} height={32} className="rounded-full" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Udemy</p>
              <p className="text-xs text-gray-600">Alisa Olivia / ⭐⭐⭐⭐⭐</p>
            </div>
          </div> */}
        </div>
      </div>
      </section>
      <section className="-mt-10 z-30">
      <div className="max-w-5xl mx-auto px-4 z-20">
        {/* Search bar */}
        <div className="flex flex-wrap bg-white rounded-full shadow-md overflow-hidden relative z-20">
          {/* Dropdown */}
          <div className="flex items-center px-4 py-3 border-r text-gray-600 text-sm w-full sm:w-auto z-20">
            <span className="mr-2">All Categories</span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Find Your Course"
            className="flex-grow px-8 py-6 text-sm outline-none text-gray-700 w-full sm:w-auto mx-w-7xl"
          />

          {/* Button */}
          <button className="bg-blue-600 text-white rounded-full text-xl w-40 px-6 py-1">
            Search
          </button>
        </div>

        {/* Category Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {["Accounting", "Business", "Development", "Marketing", "Meditation"].map((category) => (
            <button
              key={category}
              className="border border-blue-500 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
    </section>
    
  )
}
