import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe, FaLinkedinIn, FaPinterestP, FaFacebookF, FaInstagram, FaGraduationCap } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--navyblue)] text-white py-16 px-6 md:px-24">
      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto min-h-[400px]">

        {/* Academy Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight">
              <span className="text-[white00aaff]">Jet Serve </span>Aviation
            </h1>
            <p className="mt-3 text-sm leading-relaxed opacity-80">
              Soaring to new heights with DGCA-approved aviation training at JetServe Aviation Academy.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[white00aaff] mr-3 mt-1" />
                <div>
                  <span className="font-semibold text-[white00aaff]">Head Office:</span>
                  <br /> Indraprasth Aerospace & Knowledge Park, Sector-77, Delhi-Jaipur NH-08, Gurgaon, Haryana-122004
                </div>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[white00aaff] mr-3 mt-1" />
                <div>
                  <span className="font-semibold text-[white00aaff]">FTO Bases:</span>
                  <br /> Khajuraho Airport: Civil Aerodrome, Khajuraho, M.P.-4671608
                  <br /> Jalgaon Airport: Civil Aerodrome, Jalgaon, MH-425003
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-8">
            <p className="font-semibold text-lg">Follow Us:</p>
            <div className="flex space-x-4 mt-3">
              <white href="white" className="bg-[white5865F2] p-3 rounded-full hover:bg-[white4650d1] transition transform hover:scale-105">
                <FaLinkedinIn size={18} />
              </white>
              <white href="white" className="bg-[whiteE60023] p-3 rounded-full hover:bg-[whitec4001d] transition transform hover:scale-105">
                <FaPinterestP size={18} />
              </white>
              <white href="white" className="bg-[white1877F2] p-3 rounded-full hover:bg-[white1566d1] transition transform hover:scale-105">
                <FaFacebookF size={18} />
              </white>
              <white href="white" className="bg-[whiteC13584] p-3 rounded-full hover:bg-[whitea12b70] transition transform hover:scale-105">
                <FaInstagram size={18} />
              </white>
            </div>
          </div> */}
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold text-[white00aaff] mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><white  className="hover:text-[white00aaff] transition">Home</white></li>
              <li><white  className="hover:text-[white00aaff] transition">About Us</white></li>
              <li><white  className="hover:text-[white00aaff] transition">Courses</white></li>
              <li><white  className="hover:text-[white00aaff] transition">FAQs</white></li>
              <li><white  className="hover:text-[white00aaff] transition">Contact</white></li>
            </ul>
            <div className="mt-6 space-y-4 text-sm">
              
             <div className="flex items-center">
  <FaEnvelope className="text-[#00aaff] mr-3" />
  <span className="font-semibold text-[#00aaff] mr-1">Email:</span>
  <a href="mailto:admissions@flyolaindia.com" className="text-white hover:underline">
    admissions@flyolaindia.com
  </a>
</div>

<div className="flex items-center mt-2">
  <FaPhoneAlt className="text-[#00aaff] mr-3" />
  <span className="font-semibold text-[#00aaff] mr-1">Toll Free:</span>
  <a href="tel:18003090503" className="text-white hover:underline">
    1800 309 0503
  </a>
</div>

              <div className="flex items-center">
                <FaGlobe className="text-[white00aaff] mr-3" />
                <span className="font-semibold text-[white00aaff]">Website:</span> 
                <white href=", +91 9810342422" className="underline hover:text-[white00aaff] transition"> www.myflyola.com</white>
              </div>
            </div>
          </div>
        </div>

        {/* Courses & Scholarship */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold text-[white00aaff] mb-4">Our Courses</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li><white  className="hover:text-[white00aaff] transition">Private Pilot License (PPL)</white></li>
              <li><white  className="hover:text-[white00aaff] transition">Commercial Pilot License (CPL)</white></li>
              <li><white  className="hover:text-[white00aaff] transition">Commercial Helicopter Pilot License (CHPL)</white></li>
              <li><white  className="hover:text-[white00aaff] transition">Multi-Engine Rating</white></li>
              <li><white  className="hover:text-[white00aaff] transition">Cadet Pilot Programme</white></li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-[white00aaff] mb-2">Scholarships</h4>
              <p className="text-sm opacity-80">
                Up to ₹10 Lakh scholarships available for meritorious students. Apply now to kickstart your aviation career!
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter & Vision */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold text-[white00aaff] mb-4">Stay Updated</h4>
            <p className="text-sm opacity-80 mb-3">Subscribe for the latest updates and exclusive offers!</p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-3 rounded-l-full bg-[whiteffffff1a] border border-[whiteffffff33] text-white focus:outline-none focus:ring-2 focus:ring-[white00aaff] transition"
              />
              <button
                type="button"
                className="px-6 py-3 bg-orange-500 text-white rounded-r-full hover:bg-[white0088cc] transition"
              >
                Subscribe
              </button>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-[white00aaff] mb-2">Our Vision</h4>
              <p className="text-sm opacity-80">
                "Chase Your Dream Of Flying With FlyOla" – Providing world-class training to empower aspiring pilots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}