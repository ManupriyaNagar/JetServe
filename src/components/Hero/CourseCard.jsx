'use client';

import Image from 'next/image';
import { BsStars } from 'react-icons/bs';
import { useState, useEffect } from 'react';

export default function CourseCard1() {
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
  
  const courses = [
    {
      category: 'Pilot Training',
      image: '/1.png',
      lessons: 200,
      duration: '9 Months',
      title: 'Commercial Pilot License (CPL)',
      reviews: 120,
      rating: 4,
      price: 4500000, // ₹45,00,000 for King Air C-90 as per document
    },
    {
      category: 'Pilot Training',
      image: '/2.png',
      lessons: 40,
      duration: '3-6 Months',
      title: 'Private Pilot License (PPL)',
      reviews: 85,
      rating: 4,
      price: 1500000, // Estimated, as PPL cost not explicitly listed
    },
    {
      category: 'Helicopter Training',
      image: '/3.png',
      lessons: 150,
      duration: '9 Months',
      title: 'Commercial Helicopter Pilot License ',
      reviews: 60,
      rating: 5,
      price: 5500000, // ₹55,00,000 as per document
    },
  ];

  const CourseCard = ({ category, image, lessons, duration, title, reviews, rating, price }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm hover:shadow-xl transition">
        <Image
          src={image}
          alt={title}
          width={384}
          height={192}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className=" ">
          <p className="text-md text-white bg-orange-500 w-60   rounded-r-full font-semibold px-5">{category}</p>
<div className="p-5">

          <div className="flex items-center text-sm text-gray-500 mt-1 space-x-3 " >
            <p>✈️ {lessons} Flying Hours</p>
            <p>⏰ {duration}</p>
          </div>
          <h3 className="mt-3 text-lg font-bold text-gray-800">{title}</h3>
          <div className="flex items-center mt-2 text-yellow-400">
            {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
            <span className="text-gray-600 text-sm ml-2">{reviews} Reviews</span>
          </div>
          <div className="flex items-center justify-between mt-4">
             <button onClick={() => setShowModal(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2 z-20">
                            <BsStars />
                            Enroll Now
                          </button>
            <span className="text-[var(--navyblue)] font-bold text-lg">₹{price.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
      </div>
    );
  };

  return (
    <section className="px-5 py-10 md:px-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 ">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">


        Fly High with Jet Serve: A Journey of <span className="text-[var(--navyblue)] ">Aviation Excellence</span>
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Up to ₹10 Lakh scholarships available for meritorious students!
      </p>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {courses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
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