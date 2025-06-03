import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaLinkedinIn, FaPinterestP, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0a2640] text-white py-12 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-12">

        {/* Left Block */}
        <div className="col-span-1">
          <h1 className="text-3xl font-bold text-whitee">
            <span className="text-primary">Fi</span>Study
          </h1>
          <p className="mt-2 text-sm text-whitee">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-center text-whitee">
              <FaEnvelope className="text-primary mr-2" />
              <span className="font-semibold text-primary">Email Address:</span>&nbsp;info@example.com
            </div>
            <div className="flex items-center text-whitee">
              <FaPhoneAlt className="text-primary mr-2" />
              <span className="font-semibold text-primary">Phone Number:</span>&nbsp;+12 (123) 4567 8900
            </div>
            <div className="flex items-center text-whitee">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="font-semibold text-primary">Location:</span>&nbsp;1234 Elm Street, Springfield, IL 62704
            </div>
            <div className="flex items-center text-whitee">
              <FaClock className="text-primary mr-2" />
              <span className="font-semibold text-primary">Working Hour:</span>&nbsp;Saturday - Friday, 10:00 - 18:00
            </div>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-whitee">Download Apps</p>
            <div className="flex space-x-3 mt-2">
              <img src="/googleplay.png" alt="Google Play" className="h-8" />
              <img src="/appstore.png" alt="App Store" className="h-8" />
            </div>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-whitee">Follow Us:</p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="bg-[#5865F2] p-2 rounded-full text-white"><FaLinkedinIn /></a>
              <a href="#" className="bg-[#E60023] p-2 rounded-full text-white"><FaPinterestP /></a>
              <a href="#" className="bg-[#1877F2] p-2 rounded-full text-white"><FaFacebookF /></a>
              <a href="#" className="bg-[#C13584] p-2 rounded-full text-white"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Center Right Blocks */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-3">Quick Link</h4>
          <ul className="space-y-2 text-whitee">
            <li>+ Home</li>
            <li>+ About Us</li>
            <li>+ Courses</li>
            <li>+ FAQs</li>
            <li>+ Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-primary mb-3">Useful Links</h4>
          <ul className="space-y-2 text-whitee">
            <li>+ Became Partners</li>
            <li>+ Privacy & Policy</li>
            <li>+ Terms & Condition</li>
            <li>+ Refund Policy</li>
            <li>+ Live Workshop</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-primary mb-3">Newsletter</h4>
          <form className="flex mt-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-2 rounded-l-full bg-transparent border border-whitee text-white focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white rounded-r-full hover:bg-secondary transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
} 