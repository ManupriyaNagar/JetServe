'use client';

export default function ScrollingPromotions() {
  const promotions = [
    'Enroll Now and Get Up to ₹10 Lakh Scholarships!',
    'Join Our Cadet Pilot Programme – Limited Seats!',
    'Free Open House at Khajuraho & Jalgaon FTO Bases',
    '10% Discount on CPL for Early Registrations',
    'Train on King Air C-90 & B-200 with Expert Instructors',
  ];

  return (
    <section className="overflow-hidden bg-gradient-to-r from-[#0a2640] to-[#1a3555] py-6">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="6"
        className="text-white font-semibold text-base"
      >
        {promotions.map((text, idx) => (
          <span key={idx} className="inline-flex items-center gap-3 mx-6">
            <span className="text-[#00aaff] text-lg">✈️</span>
            {text}
          </span>
        ))}
      </marquee>
    </section>
  );
}