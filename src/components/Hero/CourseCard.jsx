"use client"; // use only for app directory in Next.js 13+

export default function CourseCard1() {
  const courses = [
    {
      category: "Web Design",
      image: "/webdesign.jpg", // ensure this image exists in /public
      lessons: 45,
      duration: "620h 55min",
      title: "Modern Web Design Aesthetic and Functional Websites",
      reviews: 32,
      rating: 3,
      price: 240,
    },
    {
      category: "Art & Design",
      image: "/graphic.jpg",
      lessons: 12,
      duration: "120h 45min",
      title: "Graphic Design Essentials From Concept to Creation",
      reviews: 250,
      rating: 3,
      price: 260,
    },
    {
      category: "UI/UX Design",
      image: "/uiux.jpg",
      lessons: 4,
      duration: "120h 45min",
      title: "UI/UX Design Enhancing User Experience Effectively",
      reviews: 45,
      rating: 4,
      price: 150,
    },
  ];

  const CourseCard = ({ category, image, lessons, duration, title, reviews, rating, price }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm hover:shadow-xl transition">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-2xl" />
        <div className="p-5">
          <p className="text-sm text-orange-500 font-semibold">{category}</p>
          <div className="flex items-center text-sm text-gray-500 mt-1 space-x-3">
            <p>📘 {lessons} Lesson</p>
            <p>⏰ {duration}</p>
          </div>
          <h3 className="mt-3 text-lg font-bold text-gray-800">{title}</h3>
          <div className="flex items-center mt-2 text-yellow-400">
            {"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}
            <span className="text-gray-600 text-sm ml-2">{reviews} Reviews</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
              Enroll Now
            </button>
            <span className="text-orange-500 font-bold text-lg">${price}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="px-5 py-10 md:px-20 bg-gradient-to-b from-white via-purple-50 to-pink-50 min-h-screen">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        More Than Just A Brand: A Journey Of <span className="text-blue-500 italic">Excellence</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {courses.map((course, idx) => (
          <CourseCard key={idx} {...course} />
        ))}
      </div>
    </section>
  );
}
