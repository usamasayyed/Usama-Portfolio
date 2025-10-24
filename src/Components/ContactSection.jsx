import React from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full px-4 md:px-[12%] py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="text-center max-w-4xl mx-auto animate-slide-up">
        <span className="text-blue-500 dark:text-blue-400 font-semibold text-lg font-poppins">
          Connect with me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 font-poppins dark:text-white">
          Get in touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-inter">
          I'd love to hear from you! If you have any questions, comments, or
          feedback, please use the form below.
        </p>
      </div>

      <form className="max-w-2xl mx-auto mt-12 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="p-4 outline-none border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 focus:border-blue-500 transition-colors duration-300 font-inter"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            className="p-4 outline-none border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 focus:border-blue-500 transition-colors duration-300 font-inter"
          />
        </div>
        <textarea
          placeholder="Enter Your Message"
          rows="6"
          className="w-full p-4 outline-none border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-900 focus:border-blue-500 transition-colors duration-300 mb-8 font-inter"
        ></textarea>

        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 mx-auto font-poppins"
        >
          Send Message
          <IoMdArrowForward className="text-lg" />
        </button>
      </form>

      <div className="max-w-4xl mx-auto mt-20 animate-fade-in">
        <div className="flex items-center justify-center gap-3 text-lg text-gray-700 dark:text-gray-300 mb-12 font-inter">
          <FiMail className="text-blue-500" />
          <p>Usayed614@gmail.com</p>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-500 dark:text-gray-400 font-inter">
              © 2024 Osama Sayyed. All rights reserved.
            </p>
            <ul className="flex items-center gap-6 mt-4 sm:mt-0">
              <li>
                <a
                  href="https://github.com/usamasayyed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-300 group"
                >
                  <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/usama-sayed-2470a0272/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                >
                  <FaLinkedin className="text-xl group-hover:scale-110 transition-transform duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
