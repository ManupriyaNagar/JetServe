'use client';

import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUsSection() {
  return (
    <section className="py-20 px-5 md:px-20 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <h4 className="text-sm text-[#342c74] font-semibold mb-1">✈️ Get in Touch</h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-6xl mb-6">
        Connect with FlyOla: Start Your <span className="text-[#342c74] italic">Aviation Journey</span>
      </h2>
      <p className=" text-gray-600 mb-12">
        Reach out to FlyOla Aviation Academy for inquiries, admissions, or to visit our training facilities. We’re here to guide you every step of the way!
      </p>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left - Contact Info */}
        <div className="w-full lg:w-1/2">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#342c74] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">Head Office</h3>
                <p className="text-sm text-gray-600">
                  Indraprasth Aerospace & Knowledge Park, Sector-77, Delhi-Jaipur NH-08, Gurgaon, Haryana-122004
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#342c74] mt-1" />
              <div>
                <h3 className="font-semibold text-gray-800">FTO Bases</h3>
                <p className="text-sm text-gray-600">
                  Khajuraho Airport: Civil Aerodrome, Khajuraho, M.P.-4671608<br />
                  Jalgaon Airport: Civil Aerodrome, Jalgaon, MH-425003
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#342c74]" />
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-sm text-gray-600">1800 309 0503, +91 9810342422</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#342c74]" />
              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-sm text-gray-600">admissions@flyolaindia.com</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right - Contact Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Send Us a Message</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aaff] transition"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-[#0088cc] transition w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}