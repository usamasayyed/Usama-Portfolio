import React from "react";

export default function AboutSection() {
  const stats = [
    { number: "2+", label: "Years of Experience", color: "text-green-500" },
    { number: "15+", label: "Projects Completed", color: "text-purple-500" },
    { number: "10+", label: "Skills Mastered", color: "text-blue-500" },
  ];

  return (
    <section
      id="about"
      className="w-full px-4 md:px-[12%] py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="text-center animate-slide-up">
        <span className="text-blue-500 dark:text-blue-400 font-semibold text-lg font-poppins">
          Introduction
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 font-poppins  dark:text-white ">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <h2 className={`text-5xl font-bold ${stat.color} mb-4`}>
              {stat.number}
            </h2>
            <span className="text-lg text-gray-600 dark: dark:text-white font-inter">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
