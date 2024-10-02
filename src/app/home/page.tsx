"use client";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <main className="px-7 pt-5 pb-20">
      <div id="about" className="section">
        <About />
      </div>
      <div id="skills" className="section">
        <Skills />
      </div>
      <div id="projects" className="section">
        <Projects />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </main>
  );
};

export default HomePage;
