"use client" 
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const categories = [
  { id: '01', name: 'Commercial Pilot License', count: '200 Flying Hours' },
  { id: '02', name: 'Private Pilot License', count: '40 Flying Hours' },
  { id: '03', name: 'Helicopter Pilot Training', count: '150 Flying Hours' },
  { id: '04', name: 'Cadet Pilot Programme', count: '12-Month Course' },
];

export default function CategoriesSection() {
  return (
    <section className='bg-[#141c4c]'>
    <div className="page-container flex flex-col md:flex-row overflow-hidden text-white p-6 md:p-12 relative m">
      {/* Left Column */}
      <div className="flex-1">
       <div className="mb-6">
        <div className='border-2 bg-white w-120 h-10 items-center justify-left flex p-4'>
          <span className="text-[#342c74] font-semibold text-center">Training Programs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Explore Our Aviation <br />
            <span className=" text-[white]">Courses</span>
          </h2>
        </div>

        {/* Categories List */}
        <div className="space-y-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="text-white group flex items-center justify-between border-b border-dashed border-white/40 px-4 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:py-8"
            >
              <div className="transition-all duration-300 group-hover:text-black flex items-start gap-2 group-hover:ml-4 hover:gap-0">
                {/* ID or Arrow Icon on Hover */}
                <span className="font-bold text-2xl mr-2 w-6 h-6 inline-block">
                  <span className="group-hover:hidden">{item.id}</span>
                  <ArrowUpRight
                    size={24}
                    className="hidden group-hover:inline-block text-black transition-all duration-300"
                  />
                </span>

                {/* Name and Count */}
                <div>
                  <span className="font-semibold">{item.name}</span>
                  <p className=" text-sm text-white group-hover:text-black">{item.count}</p>
                </div>
              </div>

              {/* Arrow on Right */}
              <div className="border border-white p-2 rounded-full transition-all duration-300 group-hover:border-black group-hover:text-black group-hover:mr-6">
                <ArrowUpRight size={20} className="transition-all duration-300 group-hover:text-black" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column */}
      <div className="relative  md:w-[40%] flex justify-center items-center mt-24">
        
  


    <DotLottieReact
      src="https://lottie.host/65fa4a87-2c24-4395-b49a-2a85571e6ec8/XHMwZ2k91Z.lottie"
      loop
      autoplay
    />


    
      </div>
    </div>
    </section>
  );
}
