// components/ScrollingFeatures.js
'use client';

import { motion } from 'framer-motion';

const features = [
  '20+ Instructor',
  '500+ Online Courses',
  '24 Hours Support',
  'Courses Certificate',
];

export default function ScrollingFeatures() {
  return (
    <div className="overflow-hidden bg-[#342c74] py-6">
      <motion.div
        className="flex space-x-16 whitespace-nowrap"
        animate={{ x: ['100%', '-100%'] }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: 'linear',
        }}
      >
        {[...features, ...features].map((text, idx) => (
          <div
            key={idx}
            className="text-white font-semibold text-lg flex items-center gap-2"
          >
            <span className="text-white text-xl">✨</span>
            {text}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
