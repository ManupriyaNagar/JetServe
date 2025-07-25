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
  const repeatedFeatures = [...features, ...features]; // Repeat for seamless loop

  return (
    <div className="overflow-hidden py-6 bg-white">
      <div className="relative w-full">
        <div className="animate-scroll flex whitespace-nowrap gap-16">
          {repeatedFeatures.map((text, idx) => (
            <span key={idx} className="flex items-center gap-3 text-[#141c4c] font-semibold text-lg mx-8">
              <span className="text-[#00aaff] text-xl">✈️</span>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
