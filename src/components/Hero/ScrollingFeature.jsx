'use client';

import React from 'react';

const features = [
  'DGCA-Approved Training',
  'Up to ₹10 Lakh Scholarships',
  'Modern Fleet: King Air C-90 & B-200',
  'Experienced Instructors',
  'Cadet Pilot Programme',
];

export default function ScrollingFeatures() {
  return (
    <div className="overflow-hidden py-6">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="8"
        className="flex space-x-16 whitespace-nowrap text-[#141c4c] font-semibold text-lg"
      >
        {features.map((text, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-3 mx-8"
          >
            <span className="text-[#00aaff] text-xl">✈️</span>
            {text}
          </span>
        ))}
      </marquee>
    </div>
  );
}