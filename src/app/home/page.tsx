"use client";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header2 from "../components/Header2";
import Header from "../components/Header";
import Certificates from "../components/Certificates";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import Locading from "../components/Loading";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // if(isLoading) {
  //  return  <div><Loading/></div>
  // }

  return (
    <main className="px-7 sm:px-20 pt-5 pb-20 md:px-20 w-full flex flex-row lg:gap-[370px] lg:px-20 xl:gap-[400px] xl:px-40 2xl:px-80 3xl:px-[460px] 4xl:px-[500px]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className=" lg:mt-12 xl:mt-0">
            <Header2 />
            <div className="lg:hidden">
              <Header />
            </div>
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

            <div id="certificates" className="section">
              <Certificates />
            </div>

            <div id="contact" className="section lg:hidden">
              <Contact />
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default HomePage;
