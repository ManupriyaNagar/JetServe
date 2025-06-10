import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGlobe, FaLinkedinIn, FaPinterestP, FaFacebookF, FaInstagram, FaGraduationCap } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[var(--navyblue)] text-white py-16 px-6 md:px-24">
      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto min-h-[400px]">

        {/* Academy Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              <span className="text-orange-500">Fly</span>Ola Aviation
            </h1>
            <p className="mt-3 text-sm leading-relaxed opacity-80">
              Soaring to new heights with DGCA-approved aviation training at Jet Serve Aviation Academy.
            </p>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-start">
              <FaMapMarkerAlt className="text-[white00aaff] mr-3 mt-1" />
                <div>
                  <span className="font-semibold text-[white00aaff]">Head Office:</span>
                  <br /> Indraprasth Aerospace & Knowledge <br /> Park, Sector-77, Delhi-Jaipur NH-08, Gurgaon, Haryana-122004
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
          
        </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col justify-between">
          <div>
            
            <div className="mt-6 space-y-4 text-sm">

             <div className="flex items-center">
  <FaEnvelope className="text-orange-500 mr-3" />
  <span className="font-semibold text-orange-500 mr-1">Email:</span>
  <a href="mailto:admissions@flyolaindia.com" className="text-white hover:underline">
    admissions@flyolaindia.com
  </a>
</div>

<div className="flex items-center mt-2">
  <FaPhoneAlt className="text-orange-500 mr-3" />
  <span className="font-semibold text-orange-500 mr-1">Toll Free:</span>
  <a href="tel:18003090503" className="text-white hover:underline">
  01169261857
  </a>
</div>

              
            </div>
          </div>
        </div>

        {/* Courses & Scholarship */}
        <div className="flex flex-col justify-between">
          <div>
           
            <div className="">
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
                "Chase Your Dream Of Flying With Jet Serve" – Providing world-class training to empower aspiring pilots.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}