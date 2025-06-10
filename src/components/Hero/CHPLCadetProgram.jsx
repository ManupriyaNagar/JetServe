// components/CHPLCadetProgram.jsx
"use client";

import { FaHelicopter, FaCheckCircle, FaRupeeSign } from "react-icons/fa";

export default function CHPLCadetProgram() {
    const steps = [
        {
          number: "1",
          title: "CPL (Helicopter)",
          subtitle: "Ground + 150 Hrs Flying on Robinson R44",
          description: [
            "Expert-led ground classes",
            "Student Pilot License (SPL) & FRTOL",
            "Advanced flying experience",
          ],
        },
        {
          number: "2",
          title: "Type Rating Training",
          subtitle: "Aircraft-specific professional training.",
          description: [],
        },
        {
          number: "3",
          title: "Employment with Pawan Hans Ltd",
          subtitle: "",
          description: [
            "Guaranteed First Officer job upon completion",
            "Attractive starting salary: approx ₹2,50,000/month (Gross)",
            "Letter of Intent (LOI) on enrollment",
          ],
        },
      ];
  return (
    <section className="bg-[#fdfdfd] ">
    <section className="space-y-8 ">
      {/* Header */}
      <div className="relative text-center w-full py-10 text-white overflow-hidden vertical-lines-bg">
  <div className="relative z-10">
    <h2 className="text-3xl font-bold uppercase">CHPL Cadet Pilot Program</h2>
    <p className="text-gray-100">
      India’s Premier Rotary-Wing Training & Career Launchpad
    </p>
  </div>
</div>

      {/* Program Overview */}
      <div className="space-y-2 page-container">
        <section className="max-w-7xl mx-auto px-4 py-4 pb-10">
    
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side: Intro + Highlights */}
        <div className="md:w-1/2 space-y-6 text-gray-700 mt-10">
          <p>
            <strong>Dear Aspirant Pilot,</strong> <br />
            We’re thrilled to announce India’s most groundbreaking employment opportunity in the rotary-wing sector, brought to you by <strong>Jet Serve Aviation Academy</strong> in collaboration with <strong>Pawan Hans Limited</strong> – India’s largest government-owned helicopter operator.
          </p>
          <p>
            As Asia’s first dedicated helicopter pilot training institution offering a <strong>Commercial Helicopter Pilot License (CHPL)</strong> and Cadet Pilot Program, Jet Serve guarantees not only top-tier training but also <strong>assured employment</strong>.
          </p>

          {/* Program Highlights */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#342c74] flex items-center gap-2">
              <FaCheckCircle /> Program Highlights
            </h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1 text-base">
              <li>Asia's first integrated CHPL Cadet Program</li>
              <li>Complete guidance: Medicals to DGCA Exams</li>
              <li>Modern facilities & experienced instructors</li>
              <li>Backed by a PSU partnership for job assurance</li>
            </ul>
          </div>
        </div>

        {/* Right Side: 3-Step Program */}
        <div className="md:w-1/2 space-y-8">
          <h3 className="text-2xl font-semibold text-[#342c74] flex items-center gap-2 mb-6">
            <FaHelicopter /> 3-Stage Program Overview
          </h3>
          {steps.map((step, index) => (
  <div key={index} className="flex items-start gap-6 relative">
    {/* Step Number + Dotted Line */}
    <div className="flex flex-col items-center relative">
      <div className="w-12 h-12 rounded-full bg-[#342c74] text-white text-xl flex items-center justify-center font-bold z-10">
        {step.number}
      </div>
      <span className="text-sm text-gray-600 mt-2 z-10">
        Step {step.number}
      </span>
      { index===0 && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-24 border-l-2 border-dotted border-gray-400 z-0"></div>
      )}


      {/* Vertical Dotted Line After Step 2 */}
      { index===1 && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-10 border-l-2 border-dotted border-gray-400 z-0"></div>
      )}
    </div>

    {/* Step Content */}
    <div className="bg-[#f8f8f8] p-4 rounded-xl w-full shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
      {step.subtitle && (
        <p className="text-sm text-gray-700 mb-2">{step.subtitle}</p>
      )}
      {step.description.length > 0 && (
        <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
          {step.description.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
))}

        </div>
      </div>
 
    </section>
      </div>

      {/* Highlights */}
      

      {/* Fees */}
      {/* <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#342c74] flex items-center gap-2">
          <FaRupeeSign /> Total Program Fee: ₹80,00,000
        </h3>
        <table className="w-full border mt-2 text-sm text-left text-gray-700">
          <thead className="bg-blue-50 text-[#342c74]">
            <tr>
              <th className="p-2 border">S.No</th>
              <th className="p-2 border">Particular</th>
              <th className="p-2 border">Duration</th>
              <th className="p-2 border">Fee</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">1</td>
              <td className="p-2 border">Registration</td>
              <td className="p-2 border">Seat booking</td>
              <td className="p-2 border">₹5,00,000</td>
            </tr>
            <tr>
              <td className="p-2 border">2</td>
              <td className="p-2 border">1st Installment</td>
              <td className="p-2 border">Before training</td>
              <td className="p-2 border">₹25,00,000</td>
            </tr>
            <tr>
              <td className="p-2 border">3</td>
              <td className="p-2 border">2nd Installment</td>
              <td className="p-2 border">After PPL</td>
              <td className="p-2 border">₹25,00,000</td>
            </tr>
            <tr>
              <td className="p-2 border">4</td>
              <td className="p-2 border">3rd Installment</td>
              <td className="p-2 border">After 75 hrs with Flyola</td>
              <td className="p-2 border">₹25,00,000</td>
            </tr>
            <tr className="bg-blue-50 font-semibold">
              <td className="p-2 border" colSpan={3}>Total Payable Fee</td>
              <td className="p-2 border">₹80,00,000</td>
            </tr>
          </tbody>
        </table>
      </div>

   
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-[#342c74] mb-3">💳 Payment Details:</h4>
        <ul className="text-gray-700 space-y-1">
          <li><strong>Company Name:</strong> FLYOLA AVIATION ACADEMY</li>
          <li><strong>Bank Name:</strong> ICICI BANK</li>
          <li><strong>Account Number:</strong> 245105001638</li>
          <li><strong>IFSC Code:</strong> ICIC0000575</li>
          <li><strong>Branch:</strong> HERO HONDA GURGAON</li>
        </ul>
      </div> */}

      {/* CTA */}
  
    </section>
    </section>
  );
}
