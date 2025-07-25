"use client";

export default function WhyChooseUs() {
  const features = [
    {
      title: 'DGCA-Approved Training',
      description: 'Our programs meet the highest standards set by the Directorate General of Civil Aviation, ensuring quality education.',
      icon: '/commercial-pilot-license/extra4.png',
    },
    {
      title: 'Modern Aircraft Fleet',
      description: 'Train on advanced aircraft like King Air C-90 & B-200 for real-world pilot experience.',
     icon: '/commercial-pilot-license/extra1.png',
    },
    {
      title: 'Scholarship Opportunities',
      description: 'Up to ₹10 Lakh scholarships available for meritorious students to support your aviation journey.',
      icon: '/commercial-pilot-license/extra2.png',
    },
    {
      title: 'Experienced Instructors',
      description: 'Learn from seasoned professionals with extensive industry expertise, guiding you to success.',
  icon: '/commercial-pilot-license/extra3.png',
    },
  ];
  return (
    <section className="bg-gradient-to-b from-blue-100 via-blue-50 to-white px-28">
    <section className="py-20 px-4 container mx-auto relative overflow-hidden">
      <h4 className="text-sm text-[#342c74] font-semibold mb-1">🎓 Why Choose Us</h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-xl mb-6">
        Built on Trust: Discover Why Our Students{" "}
        <span className=" text-[var(--navyblue)]">
          Choose us
        </span>
      </h2>
      <p className="max-w-2xl text-gray-600 mb-6">
        Jet Serve Aviation Academy offers world-class aviation training, empowering aspiring pilots with DGCA-approved courses, modern aircraft, and expert guidance to soar to new heights.
      </p>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
        {/* Left - Images */}
        <div className="relative mt-40 md:mt-0  w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/commercial-pilot-license/extra9.png"
            alt="Student 1"
            className="rounded-full w-80 h-80 object-cover absolute -top-16 right-1 ring-4 ring-white"
          />
          <img
            src="/commercial-pilot-license/extra10.png"
            alt="Student 2"
            className="rounded-full w-52 h-52 object-cover absolute -bottom-10  ring-4 ring-white"
          />
        </div>

        {/* Right - Text + Features */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10 rounded-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-10">
            <button className="bg-[var(--navyblue)] text-white md:px-6 md:py-2 md:text-sm rounded-full shadow hover:scale-105 transition text-xs py-1  px-1">
              » Know More
            </button>
            <div className="flex items-center gap-3 bg-blue-100 md:px-4 md:py-2 px-1 rounded-full">
              <img
                src="/extra6.png"
                alt="instructors"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-sm font-semibold text-blue-700">100+ <span className="text-gray-700 font-normal">Professional Instructor</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
}
