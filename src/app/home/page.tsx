"use client";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header2 from "../components/Header2";

const HomePage = () => {
  return (
    <main className="px-7 sm:px-20 pt-5 pb-20 md:px-20 w-full flex flex-row lg:gap-[370px] lg:px-32 xl:gap-[480px] xl:px-52 2xl:px-80 3xl:px-[420px] 4xl:px-[470px]">
      <div className="hidden lg:block lg:mt-12 xl:mt-0">
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
