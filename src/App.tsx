import { useEffect, useState } from "react";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "projects",
      "certificates",
      "experience",
      "skills",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      for (const section of sections) {
        const element = document.getElementById(section);

        if (!element) continue;

        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionBottom
        ) {
          currentSection = section;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio-app">
      <Navigation activeSection={activeSection} />

      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;