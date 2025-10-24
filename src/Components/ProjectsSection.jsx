import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      company: "MAK-Byte | Frontend Engineer",
      title: "makbyte.io",
      description:
        "Delivering innovative web solutions and digital experiences that engage users and drive growth.",
      techstack: "React, Redux, JavaScript",
    },
    {
      company: "MAK-Byte | Frontend Engineer",
      title: "Metarch",
      description:
        "Building innovative digital solutions that enhance user experience and drive results",
      techstack: "Next js, Tailwind Css",
    },
    {
      company: "Makers' Muse | WordPress & SEO Developer",
      title: "Makers'Muse.in",
      description:
        "Makers' Muse – Inspiring young innovators with hands-on STEM programs in AI, robotics, and 3D printing, reaching thousands of students worldwide.",
      techstack: "WordPress, SEO",
    },
    {
      company: "Makers' Muse | WordPress & SEO Developer",
      title: "atal-tinkering-labs",
      description:
        "Creating engaging WordPress websites and SEO strategies that drive growth and enhance digital presence",
      techstack: "Wordpress, Css, Seo",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-4 md:px-[12%] py-20 scroll-mt-20"
    >
      <div className="text-center animate-slide-up ">
        <span className="text-blue-500 dark:text-blue-400 font-semibold text-lg font-poppins">
          What I have Created
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 font-poppins dark:text-white">
          My Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in cursor-pointer"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <p className="text-blue-500 dark:text-blue-400 text-sm font-semibold font-inter">
              {project.company}
            </p>
            <h2 className="text-xl font-bold mt-2 mb-3 text-gray-800 dark:text-white font-poppins">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 font-inter">
              {project.description}
            </p>
            <p className="text-gray-700 dark:text-gray-400 font-semibold font-inter">
              Techstack:{" "}
              <span className="text-blue-500">{project.techstack}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
