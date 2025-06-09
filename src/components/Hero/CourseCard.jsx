'use client';

import Image from 'next/image';
import { BsStars } from 'react-icons/bs';

export default function CourseCard1() {
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
<<<<<<< Updated upstream
             <button onClick={() => setShowModal(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-md flex items-center gap-2 z-20">
                            <BsStars />
                            Enroll Now
                          </button>
            <span className="text-[var(--navyblue)] font-bold text-lg">₹{price.toLocaleString('en-IN')}</span>
=======
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition">
              Enroll Now
            </button>
            <span className="text-[#342c74] font-bold text-lg">₹{price.toLocaleString('en-IN')}</span>
>>>>>>> Stashed changes
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
    </section>
  );
}