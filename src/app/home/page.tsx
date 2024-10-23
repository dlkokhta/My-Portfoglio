"use client";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header2 from "../components/Header2";

const HomePage = () => {
  return (
    <main className="px-7 sm:px-20 pt-5 pb-20 md:px-20 w-full flex flex-row gap-[370px] lg:gap-[420px] xl:gap-[450px] xl:px-60">
      <div className="hidden lg:block">
        <Header2 />
      </div>
      <div>
        <div id="about" className="section ">
          <About />
        </div>
        <div id="skills" className="section ">
          <Skills />
        </div>

        <div id="projects" className="section">
          <Projects />
        </div>
        <div id="contact" className="section lg:hidden">
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
