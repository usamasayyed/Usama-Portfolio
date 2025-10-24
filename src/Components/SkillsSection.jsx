import React from "react";
import { FaWordpressSimple, FaShopify } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";

export default function SkillsSection() {
  const skills = [
    { name: "React Js", icon: "react", color: "text-blue-400" },
    { name: "JavaScript", icon: "js", color: "text-yellow-400" },
    { name: "CSS3", icon: "css", color: "text-blue-500" },
    { name: "HTML5", icon: "html", color: "text-orange-500" },
    { name: "Bootstrap", icon: "bootstrap", color: "text-purple-500" },
    { name: "TailwindCSS", icon: "tailwind", color: "text-cyan-400" },
    { name: "WordPress", icon: "wordpress", color: "text-blue-600" },
    { name: "SEO", icon: "seo", color: "text-green-500" },
    { name: "Shopify", icon: "shopify", color: "text-green-400" },
  ];

  const renderSkillIcon = (skill) => {
    switch (skill.icon) {
      case "wordpress":
        return <FaWordpressSimple className={`text-3xl ${skill.color}`} />;
      case "seo":
        return <TbSeo className={`text-3xl ${skill.color}`} />;
      case "shopify":
        return <FaShopify className={`text-3xl ${skill.color}`} />;
      default:
        return (
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {skill.name.charAt(0)}
            </span>
          </div>
        );
    }
  };

  return (
    <section
      id="skills"
      className="w-full px-4 md:px-[12%] py-20 scroll-mt-20 bg-gray-50 dark:bg-gray-800/50 dark:text-white  "
    >
      <div className="text-center animate-slide-up ">
        <span className="text-blue-500 dark:text-blue-400 font-semibold text-lg font-poppins">
          What I offer
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12 font-poppins">
          My Skills
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto  ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item bg-white dark:bg-gray-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              {renderSkillIcon(skill)}
            </div>
            <p className="font-semibold text-gray-700 dark:text-gray-300 font-inter dark:text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
