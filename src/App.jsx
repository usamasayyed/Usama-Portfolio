import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import CareerSection from "./Components/CareerSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/ContactSection";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") setDarkMode(true);
  }, []);
  console.log(darkMode);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen w-full overflow-hidden transition-colors duration-300 dark:bg-gray-900 bg-white`}
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
