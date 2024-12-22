"use client";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header2 from "../components/Header2";
import Certificates from "../components/Certificates";

const HomePage = () => {
  return (
    <main className="px-7 sm:px-20 pt-5 pb-20 md:px-20 w-full flex flex-row lg:gap-[370px] lg:px-20 xl:gap-[400px] xl:px-40 2xl:px-80 3xl:px-[460px] 4xl:px-[500px]">
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

        <div id="certificates" className="section">
        <Certificates/>
        </div>
       
       

      </div>
    </main>
  );
};

export default HomePage;
