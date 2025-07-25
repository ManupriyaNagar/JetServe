'use client';

export default function AboutUs() {
  return (
    <section className="bg-white py-16 relative page-container">
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Images & Badges */}
        <div className="flex flex-col items-center gap-16 relative">
          <div className="relative ml-20">
            <img
              src="/commercial-pilot-license/about2.png"
              alt="Student"
               className="rounded-xl w-96 h-48"
            />
            <div className="absolute -top-6 -right-6 bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <div className="text-sm font-bold">25+<br /><span className="font-normal">Years of experience</span></div>
            </div>
          </div>

          <div className="relative mr-20">
            <img
              src="/commercial-pilot-license/about1.png"
              alt="Student"
              className="rounded-xl w-96 h-48"
            />
            <div className="absolute -bottom-6 -left-6 bg-white shadow-md px-4 py-2 rounded-lg text-sm font-bold">
              45+ <span className="text-indigo-600 font-normal">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-black">
          <p className="text-indigo-600 font-semibold mb-2">About Us</p>
           <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Our Story: Empowering Pilots, <br />
            Driven by Excellence
          </h2>

           <p className="text-gray-600 mt-6 mb-8">
            Jet Serve Aviation Academy, a unit of Jet Serve Aviation Pvt. Ltd., is dedicated to transforming aviation training in India. Approved by DGCA, we offer world-class programs with modern aircraft like King Air C-90 & B-200, guiding aspiring pilots to achieve their dreams.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">🌟 <span>Our Mission:</span></h4>
            <p className="text-gray-600 text-sm">
                To provide cutting-edge aviation training with state-of-the-art facilities, enabling students to earn their Commercial Pilot License and meet global industry standards.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">🚀 <span>Our Vision</span></h4>
              <p className="text-gray-600 text-sm">
                To empower aspiring pilots to chase their dreams of flying, delivering excellence through DGCA-approved courses and innovative training solutions.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
  <button className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-800 transition">
    Know More
  </button>

  <button className="flex items-center bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 animate-pulse-custom">
    <span className="broadcast-icon"></span> LIVE CLASSES
  </button>
</div>

        </div>
      </div>
    </section>
  );
}
