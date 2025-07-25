'use client';

import { useEffect, useRef } from 'react';

export default function InstagramTestimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    const iframe = containerRef.current?.querySelector('iframe');
    if (iframe) {
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.overflow = 'auto';
    }
  }, []);

  return (
    <section className="bg-white py-10 px-4 h-screen">
      {/* Marquee Fast Tag / Heading */}
      <div className="overflow-hidden whitespace-nowrap mb-6">
        <h1 className="text-5xl text-center font-bold text-gray-800">
          Latest Instagram Posts
        </h1>
      </div>

      {/* Taggbox Widget */}
      <div
        className="max-w-6xl mx-auto rounded-lg shadow-md overflow-hidden h-full"
        ref={containerRef}
      >
        <iframe
          src="https://widget.taggbox.com/293894?website=1"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'auto',
            border: 'none',
          }}
          title="Instagram Testimonials"
          loading="lazy"
        />
      </div>
    </section>
  );
}
