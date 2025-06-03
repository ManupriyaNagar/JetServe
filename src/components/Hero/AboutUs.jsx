'use client';

export default function AboutUs() {
  return (
    <section className="bg-white py-16 px-4 lg:px-24 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Images & Badges */}
        <div className="flex flex-col items-center gap-6 relative">
          <div className="relative">
            <img
              src="/images/student1.jpg"
              alt="Student"
              className="rounded-xl w-64"
            />
            <div className="absolute -top-6 -right-6 bg-white shadow-md px-4 py-2 rounded-lg flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              <div className="text-sm font-bold">25+<br /><span className="font-normal">Years of experience</span></div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/student2.jpg"
              alt="Student"
              className="rounded-xl w-64"
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
            Our Story: Built On Values, <br />
            Driven By <span className="text-indigo-500 italic">Innovation</span>
          </h2>

          <p className="text-gray-600 mt-6 mb-8">
            We are dedicated to transforming education through digital innovation,
            making learning more accessible, engaging, and effective for everyone.
            By integrating cutting-edge technology, we aim to create an inclusive and dynamic learning environment.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">🌟 <span>Our Mission:</span></h4>
              <p className="text-gray-600 text-sm">
                To provide innovative digital education solutions that empower learners and educators, fostering a culture to growing your value.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">🚀 <span>Our Vision</span></h4>
              <p className="text-gray-600 text-sm">
                To provide innovative digital education solutions that empower learners and educators, fostering a culture to growing your value.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-indigo-500 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-600 transition">
              Know More
            </button>
            <span className="text-yellow-600 text-xl font-bold">Live Class</span>
          </div>
        </div>
      </div>
    </section>
  );
}
