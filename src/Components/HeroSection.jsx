import React from "react";
import { BsDownload } from "react-icons/bs";
import { IoMdArrowForward } from "react-icons/io";

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center pt-20 px-4"
    >
      <div className="max-w-4xl">
        <div className="names-all animate-fade-in">
          <div className="mb-6">
            <span className="text-blue-500 dark:text-blue-400 font-semibold font-poppins">
              Hello, I'm
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-white bg-clip-text text-transparent font-poppins">
            Osama Sayyed
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-white font-inter">
            Frontend Engineer
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-2xl mx-auto leading-relaxed font-inter">
            I'm a Frontend Engineer with 2.5 years of experience, specializing
            in
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              {" "}
              React
            </span>
            ,
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              {" "}
              Next.js
            </span>
            ,
            <span className="text-blue-500 dark:text-blue-400 font-semibold">
              {" "}
              JavaScript
            </span>
            , and modern web technologies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-12">
          <button
            onClick={() => scrollToSection("contact")}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 font-poppins"
          >
            Contact Me
            <IoMdArrowForward className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          <a
            href="USAMA-CV word (14) (1) (2).pdf"
            download
            className="group border-2 border-gray-300 dark:border-gray-600 px-8 py-4 rounded-full font-semibold dark:text-white hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 flex items-center gap-2 font-poppins"
          >
            Resume
            <BsDownload className="group-hover:scale-110 transition-transform duration-300 dark:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
