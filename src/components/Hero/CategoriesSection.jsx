import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  { id: '01', name: 'Commercial Pilot License', count: '200 Flying Hours' },
  { id: '02', name: 'Private Pilot License', count: '40 Flying Hours' },
  { id: '03', name: 'Helicopter Pilot Training', count: '150 Flying Hours' },
  { id: '04', name: 'Cadet Pilot Programme', count: '12-Month Course' },
];

export default function CategoriesSection() {
  return (
    <div className="flex flex-col md:flex-row bg-[#647424] overflow-hidden text-white p-6 md:p-12 relative md:px-24">
      {/* Left Column */}
      <div className="flex-1">
       <div className="mb-6">
          <span className="text-[#00aaff] font-semibold">Training Programs</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Explore Our Aviation <br />
            <span className="italic text-blue-500">Courses</span>
          </h2>
        </div>

        {/* Categories List */}
        <div className="space-y-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group flex items-center justify-between border-b border-dashed border-white/40 px-4 py-3 transition-all duration-300 ease-in-out hover:bg-white hover:py-8"
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
                  <p className="text-sm text-white/80 group-hover:text-black">{item.count}</p>
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
      <div className="relative">
  <video
    src="/greeen.mp4" 
    alt="student video"
    width={400}
    height={400}
    className=""
    autoPlay
    loop
    muted
    playsInline
  />
</div>

    
      </div>
    </div>
  );
}
