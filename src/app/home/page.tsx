"use client";
import Loading from "../components/Loading";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";
const Header2 = lazy(() => import("../components/Header2"));
const Header = lazy(() => import("../components/Header"));
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const Projects = lazy(() => import("../components/Projects"));
const Certificates = lazy(() => import("../components/Certificates"));
const Contact = lazy(() => import("../components/Contact"));
const ContactForm = lazy(() => import("../components/ContactForm"));

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="px-7 sm:px-20 pt-5 pb-20 md:px-20 w-full flex flex-row lg:gap-[370px] lg:px-20 xl:gap-[400px] xl:px-40 2xl:px-80 3xl:px-[460px] 4xl:px-[500px]">
      {isLoading ? (
        <Loading />
      ) : (
        <Suspense fallback={<Loading />}>
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
              <div id="certificates" className="section ">
                <Certificates />
              </div>
              <div id="contact" className="section lg:hidden">
                <Contact />
              </div>
              <div id="contactMe" className="section">
                <ContactForm />
              </div>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </div>
          </>
        </Suspense>
      )}
    </main>
  );
};

export default HomePage;
