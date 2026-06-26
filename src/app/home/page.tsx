"use client";
import CursorGlow from "../components/CursorGlow";
import ScrollProgress from "../components/ScrollProgress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy, Suspense } from "react";

// Above-the-fold: import statically so the hero, nav and intro render on first paint.
import Header2 from "../components/Header2";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";

// Below-the-fold: lazy-load to keep the initial bundle lean.
const Projects = lazy(() => import("../components/Projects"));
const Certificates = lazy(() => import("../components/Certificates"));
const Contact = lazy(() => import("../components/Contact"));
const ContactForm = lazy(() => import("../components/ContactForm"));

const HomePage = () => {
  return (
    <main className="px-7 sm:px-20 pt-5 pb-20 md:px-20 w-full flex flex-row lg:gap-[370px] lg:px-20 xl:gap-[400px] xl:px-40 2xl:px-80 3xl:px-[460px] 4xl:px-[500px]">
      <CursorGlow />
      <ScrollProgress />
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
        <Suspense fallback={null}>
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
        </Suspense>
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
    </main>
  );
};

export default HomePage;
