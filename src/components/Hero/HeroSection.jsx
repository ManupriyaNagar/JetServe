"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaHelicopter, FaPlane } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Commercial Pilot License',
  });
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch('https://flyolaindia.com/backend/api/enquiry');
        const data = await response.json();
        if (data.success) {
          setEnquiries(data.data);
        } else {
          console.error('Error fetching enquiries:', data.error);
        }
      } catch (error) {
        console.error('Error fetching enquiries:', error);
      }
    };
    fetchEnquiries();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (!formData.name || !formData.phone || !formData.email || !formData.course) {
      alert('Please fill out all fields.');
      return;
    }
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      const response = await fetch('https://flyolaindia.com/backend/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert('Form submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          course: 'Commercial Pilot License',
        });
        setShowModal(false);
        // Refresh enquiries
        const response = await fetch('https://flyolaindia.com/backend/api/enquiry');
        const updatedData = await response.json();
        if (updatedData.success) {
          setEnquiries(updatedData.data);
        }
      } else {
        alert('Error submitting form: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      alert('There was an error submitting the form: ' + error.message);
    }
  };

  return (
    <section className="py-10 relative overflow-hidden bg-[url('/bacground.gif')] bg-no-repeat bg-cover bg-center z-10">
      <div className="absolute inset-0 bg-[#0a2640]/50 -z-10" />
      <section className="-mt-10 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Choose Your Dream <br />
              of Flying<span className=""> With</span><br />
              <span className=" decoration-4">Jet Serve Aviation Academy</span>
            </h1>
            <p className="text-gray-100 mt-4 z-20">
              Jet Serve Aviation Academy offers DGCA-approved CPL & CHPL training with expert instructors, modern aircraft, and strong placement support.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button onClick={() => setShowModal(true)} className="bg-white border font-medium px-6 py-2 rounded-full text-gray-700 shadow flex items-center gap-2">
                <FaHelicopter className="text-blue-600 z-20" />
                CPL
              </button>
              <button onClick={() => setShowModal(true)} className="bg-white border font-medium px-6 py-2 rounded-full text-gray-700 shadow flex items-center gap-2">
                <FaPlane className="text-blue-600 z-20" />
                CHPL
              </button>
              <button onClick={() => setShowModal(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2 z-20">
                <BsStars />
                Enroll Now
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/pilot.png"
              alt="Student"
              width={500}
              height={500}
              className="rounded-lg mr-20 -mb-8"
            />
            <div className="absolute top-4 right-0 bg-white shadow-lg px-4 py-2 rounded-xl text-center z-20 
   ">
  <div className="flex justify-center space-x-1 mb-1">
    <Image src="/about1.png" alt="Student" width={120} height={52} className="rounded-full" />
  </div>
  <p className="text-blue-600 font-bold text-lg">CPL</p>
  <p className="text-sm text-gray-700">Commercial Pilot License</p>
</div>

<div className="absolute bottom-14 left-0 bg-white shadow-lg px-4 py-2 rounded-xl text-center z-20 animate-[float_3s_ease-in-out_infinite]">
            <div className="flex justify-center space-x-1 mb-1">
              <Image src="/about2.png" alt="Student" width={124} height={24} className="rounded-full" />
              {/* <Image src="/student2.jpg" alt="Student" width={24} height={24} className="rounded-full" /> */}
            </div>
            <p className="text-blue-600 font-bold text-lg">CHPL</p>
            <p className="text-sm text-gray-700">Commercial Helicopter Pilot License</p>
          </div>
          </div>
        </div>
      </section>
    
      {showModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 bg-opacity-60 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl w-full max-w-md shadow-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6 tracking-wide">
          Course Enrollment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Enter your full name"
              required
            />
          </div>
    
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Enter your phone number"
              required
            />
          </div>
    
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              placeholder="Enter your email address"
              required
            />
          </div>
    
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="course">
              Select Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            >
              <option value="Commercial Pilot License">Commercial Pilot License</option>
              <option value="Private Pilot License">Private Pilot License</option>
              <option value="Helicopter Pilot Training">Helicopter Pilot Training</option>
              <option value="Cadet Pilot Programme">Cadet Pilot Programme</option>
            </select>
          </div>
    
          <div className="flex justify-between items-center pt-2">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition focus:outline-none focus:ring-4 focus:ring-blue-400"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-full shadow-sm transition focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    
      )}
    </section>
  );
}