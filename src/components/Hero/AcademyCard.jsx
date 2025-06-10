// components/FlyolaAcademyCard.jsx
"use client";

import { FaPlaneDeparture, FaMapMarkerAlt, FaChalkboardTeacher, FaListOl, FaStar } from "react-icons/fa";

export default function AcademyCard() {
    const cardData = [
        {
          title: "Dual Training Bases – 365 Days of Flying",
          icon: <FaMapMarkerAlt className="text-[#342c74] text-2xl" />,
          points: [
            "Located at Khajuraho (MP) and Jalgaon (MH) – both controlled airports with ATC & night landing.",
            "ILS-equipped for IFR operation experience.",
            "Year-round flying due to favorable weather.",
          ],
        },
        {
          title: "Modern Fleet – Cessna 172 Glass Cockpit",
          icon: <FaPlaneDeparture className="text-[#342c74] text-2xl" />,
          points: [
            "Globally trusted aircraft for training.",
            "Equipped with glass cockpits and latest avionics.",
            "Maintained by certified in-house team.",
          ],
        },
        {
          title: "Experienced & Senior Faculty",
          icon: <FaChalkboardTeacher className="text-[#342c74] text-2xl" />,
          points: [
            "Led by seasoned CFI and Dy. CFI.",
            "High instructor-student ratio for personalized training.",
          ],
        },
        {
          title: "Why Choose Jet Serve?",
          icon: <FaStar className="text-[#342c74] text-2xl" />,
          points: [
            "DGCA-approved school for CPL, PPL & more.",
            "State-of-the-art simulators and maintenance hangars.",
            "Accommodation, meals, and transport for cadets.",
          ],
        },
      ];
  return (
    <section className="bg-gradient-to-t from-blue-100 via-blue-50 to-white">
  <div className="page-container py-10 space-y-10 text-gray-800">
    {/* Heading */}
    <div className="text-center">
      <h2 className="text-3xl font-bold text-[#342c74]">Jet Serve Aviation Academy</h2>
      <p className="text-gray-600 mt-2 italic">Your Gateway to a Sky-high Career</p>
    </div>

    {/* Highlights */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            {card.icon}
            <h3 className="text-xl font-semibold text-[#342c74]">{card.title}</h3>
          </div>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            {card.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Eligibility */}
    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold text-[#342c74] mb-2">📚 Eligibility Criteria</h3>
      <ul className="list-disc ml-6 text-gray-700">
        <li>12th Passed with PCM</li>
        <li>Minimum Age: 16 years</li>
        <li>Class 1 Medical Certificate</li>
        <li>Police Verification</li>
      </ul>
    </div>

    {/* CTA */}
    <div className="text-center mt-6">
      <p className="text-lg font-medium text-gray-700">This program is your Launchpad into the elite world of aviation!</p>
      <p className="text-[#342c74] font-semibold mt-2">
        📞 Call us now: <a href="tel:9319208927" className="underline">9319208927</a>
      </p>
      <p className="text-sm text-gray-500">Team Jet Serve</p>
    </div>
  </div>
</section>

  );
}
