
'use client';

import { Heart, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const posts = Array(4).fill([
  {
    src: "/commercial-pilot-license/susess1.png",
    text: "Harmonic Filters: Essential Tools for Power Quality Enhancement in Indian Industries ✨",
    likes: "21 likes",
  },
  {
    src: "/commercial-pilot-license/susess2.png",
    text: "Transform your energy game with ActiveSine! Maximize your power efficiency and reduce operational losses with our cutting-edge Active Harmonic Filter. Achieve an optimized system with boosted power factor and up to 20% energy savings—because your business deserves smart energy management that works",
    likes: "892 likes",
  },
  {
    src: "/commercial-pilot-license/susess3.png",
    text: "This little guy found the perfect sunny spot ☀️🐱",
    likes: "2,156 likes",
  },
    {
    src: "/commercial-pilot-license/susess4.png",
    text: "TIs your power system silently losing efficiency?Invisible electrical harmonics might be the culprit—and they cost more than you think.",
    likes: "2,156 likes",
  },
     {
    src: "/commercial-pilot-license/susess5.png",
    text: "This little guy found the perfect sunny spot ☀️🐱",
    likes: "2,156 likes",
  },
     {
    src: "/commercial-pilot-license/susess6.jpg",
    text: "This little guy found the perfect sunny spot ☀️🐱",
    likes: "2,156 likes",
  },

  
]).flat().slice(0, 12);

const SuccessMarquee = () => {
  return (
    <div className="mb-16 mx-auto ">
      <h2 className="text-3xl md:text-5xl  font-bold mb-8 text-gray-800 text-center py-10">
        Our Success Stories
      </h2>

      <div
        className="overflow-hidden"
        onMouseEnter={(e) => {
          const marquee = e.currentTarget.querySelector('.marquee-track');
          if (marquee) marquee.style.animationPlayState = 'paused';
        }}
        onMouseLeave={(e) => {
          const marquee = e.currentTarget.querySelector('.marquee-track');
          if (marquee) marquee.style.animationPlayState = 'running';
        }}
      >
        <div className="flex whitespace-nowrap marquee-track gap-x-6">
          {[...posts, ...posts].map((post, index) => (
            <Link href="https://www.instagram.com/flyola_aviationacademy/" key={index} className="group block min-w-[370px]" target='blank'>
              <div className="relative  overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-[360px] h-[570px]">
                <img
                  src={post.src}
                  alt="Instagram post"
                  className="w-full h-full object-cover  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5" />
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <style jsx>{`
          .marquee-track {
            animation: marquee 30s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default SuccessMarquee;