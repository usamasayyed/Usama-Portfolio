import React from "react";

export default function CareerSection() {
  const careerData = [
    {
      company: "MAK-Byte",
      period: "June 2023 - August 2025",
      description:
        "Began my professional journey as a Frontend Engineer at Mak Byte, where I built a strong foundation in web development.",
      color: "bg-blue-500",
      delay: "0ms",
    },
    {
      company: "Makers' Muse",
      period: "August 2025 - Present",
      description:
        "Continued my journey as a WordPress & SEO developer at Makers' Muse Solutions, specializing in React.js and building scalable applications.",
      color: "bg-green-500",
      delay: "200ms",
    },
  ];

  return (
    <section id="career" className="w-full px-4 md:px-[12%] py-20 scroll-mt-20 dark:text-white">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 font-poppins  dark:text-white">
        Career Highlights
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>

          {careerData.map((job, index) => (
            <div
              key={index}
              className="relative pl-12 py-8 animate-fade-in"
              style={{ animationDelay: job.delay }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-6 h-6 ${job.color} rounded-full shadow-lg`}
                ></div>
                <div>
                  <h2 className="text-xl font-semibold font-poppins">
                    {job.company}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {job.period}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-10 font-inter">
                {job.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl mt-16 shadow-lg animate-fade-in">
          <h2 className="text-xl italic text-gray-700 dark:text-white font-inter">
            "I don't write bugs, I create unexpected features."
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 font-inter">
            — My Approach to Development
          </p>
        </div>
      </div>
    </section>
  );
}
