"use client";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Flexible Schedule",
      description:
        "That allows employees to choose their working hours within certain limits",
      icon: "/icons/schedule.svg",
    },
    {
      title: "24 Hours Support",
      description:
        "Our assistance is available to give support to our students 24 hours a day, 7 days a week.",
      icon: "/icons/support.svg",
    },
    {
      title: "Job Grantee",
      description:
        "This guarantee ensures that anyone who wants to work can find a job, usually provided",
      icon: "/icons/job.svg",
    },
    {
      title: "Provide Certificate",
      description:
        "This phrase refers to the action of giving or issuing an official document",
      icon: "/icons/certificate.svg",
    },
  ];

  return (
    <section className="py-20 px-5 md:px-20 bg-white relative overflow-hidden">
      <h4 className="text-sm text-blue-600 font-semibold mb-1">🎓 Why Choose Us</h4>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 max-w-xl mb-6">
        Built on Trust: Discover Why Our Customers{" "}
        <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text italic underline decoration-blue-400">
          Choose us
        </span>
      </h2>
      <p className="max-w-2xl text-gray-600 mb-12">
        Explore a diverse selection of courses all in one platform, designed to
        cater to various learning needs and interests, making education more accessible
        and convenient.
      </p>

      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
        {/* Left - Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <img
            src="/images/student-1.jpg"
            alt="Student 1"
            className="rounded-xl w-80 h-80 object-cover"
          />
          <img
            src="/images/student-2.jpg"
            alt="Student 2"
            className="rounded-full w-52 h-52 object-cover absolute -bottom-10 left-32 ring-4 ring-white"
          />
        </div>

        {/* Right - Text + Features */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-10">
            <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full shadow hover:scale-105 transition">
              » Know More
            </button>
            <div className="flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-full">
              <img
                src="/images/instructors.png"
                alt="instructors"
                className="w-10 h-10 rounded-full"
              />
              <div className="text-sm font-semibold text-blue-700">100+ <span className="text-gray-700 font-normal">Professional Instructor</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
