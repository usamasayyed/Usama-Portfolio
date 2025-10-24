import React, { useState, useEffect } from "react";
import { FiHome } from "react-icons/fi";
import { MdOutlineWbSunny, MdDarkMode } from "react-icons/md";
import { BsDownload } from "react-icons/bs";

export default function NavBar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "career",
        "skills",
        "projects",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg dark:bg-gray-900/90 dark:shadow-gray-800/50"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
          <FiHome className="text-xl text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-poppins">
          OSAMA
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:block">
        <ul className="flex gap-6 font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg px-8 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
          {["home", "about", "career", "skills", "projects", "contact"].map(
            (item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-500 cursor-pointer px-3 py-1 rounded-full font-inter ${
                    activeSection === item
                      ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20 font-semibold"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Theme Toggle & Resume */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 shadow-lg"
        >
          {darkMode ? (
            <MdOutlineWbSunny className="text-xl text-yellow-500" />
          ) : (
            <MdDarkMode className="text-xl text-gray-700 dark:text-gray-300" />
          )}
        </button>

        <a
          href="USAMA-CV word (14) (1) (2).pdf"
          download
          className="hidden lg:flex items-center gap-3 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-poppins"
        >
          Resume <BsDownload className="text-sm" />
        </a>
      </div>
    </nav>
  );
}
