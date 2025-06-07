'use client';

import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      course: 'Commercial Pilot License (CPL)',
      quote: 'FlyOla’s DGCA-approved training and expert instructors helped me achieve my dream of becoming a commercial pilot. The King Air C-90 training was exceptional!',
            image: '/extra6.png',
      rating: 5,
    },
    {
      name: 'Priya Patel',
      course: 'Cadet Pilot Programme',
      quote: 'The scholarship support and modern facilities at FlyOla made my journey affordable and inspiring. I’m now ready to soar with confidence!',
            image: '/extra7.png',
      rating: 4,
    },
    {
      name: 'Vikram Singh',
      course: 'Commercial Helicopter Pilot License (CHPL)',
      quote: 'Training on advanced aircraft with experienced instructors was a game-changer. FlyOla’s commitment to excellence is unmatched.',
      image: '/extra5.png',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-5 md:px-20 bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <h4 className="text-sm text-[var(--navyblue)] font-semibold mb-1">✈️ Student Success</h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-2xl mb-6">
        Hear from Our Pilots: <span className="text-[var(--navyblue)]">Stories of Success</span>
      </h2>
      <p className="max-w-2xl text-gray-600 mb-12">
        Discover how FlyOla Aviation Academy has transformed aspiring pilots into industry professionals with world-class training and support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.course}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">"{testimonial.quote}"</p>
            <div className="flex text-yellow-400">
              {"★".repeat(testimonial.rating) + "☆".repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}