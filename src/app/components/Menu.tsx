import { Link } from "react-scroll";
import { use, useState } from "react";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("about");

  const handleSetActive = (to:any) => {
    setActiveLink(to);
  };

  const handleClick = (to:any) => {
    setActiveLink(to); // Immediately set the active link on click
  };
  return (
    <>
      <Link
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        offset={-100}
        onSetActive={handleSetActive}
        onClick={() => handleClick("about")}
        className={`cursor-pointer ${
          activeLink === "about" ? "text-gray-400" : ""
        }`}

      >
         <div className="flex items-center gap-5 group">
         <div
      className={`h-0.5 w-10 transition-all duration-500 hidden lg:block ${
        activeLink === "about"  ? "bg-gray-400 w-24" : "bg-white group-hover:bg-gray-400 group-hover:w-24"
      }`}
    ></div>
          <h1 className="text-sm md:text-base">ABOUT</h1>
        </div>
      </Link>

      <Link
        to="skills"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={handleSetActive}
        onClick={() => handleClick("skills")}
        className={`cursor-pointer transition-colors duration-700 ${
          activeLink === "skills" ? "text-gray-400" : ""
        }`}

      >
         <div className="flex items-center gap-5 group">
         <div
      className={`h-0.5 w-10 transition-all duration-500 hidden lg:block ${
        activeLink === "skills" ? "bg-gray-400 w-24" : "bg-white group-hover:bg-gray-400 group-hover:w-24"
      }`}
    ></div>
        <h1 className="text-sm lg:text-base">SKILLS</h1>
        </div>
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        spy={true}
        offset={-50}
        onSetActive={handleSetActive}
        onClick={() => handleClick("projects")}
        className={`cursor-pointer ${
          activeLink === "projects" ? "text-gray-400" : ""
        }`}
      >
         <div className="flex items-center gap-5 group">
         <div
      className={`h-0.5 w-10 transition-all duration-500 hidden lg:block ${
        activeLink === "projects" ? "bg-gray-400 w-24" : "bg-white group-hover:bg-gray-400 group-hover:w-24"
      }`}
    ></div>

        <h1 className="text-sm md:text-base">PROJECTS</h1>

        </div>
      </Link>

      <Link
        to="certificates"
        smooth={true}
        duration={500}
        spy={true}
        offset={-50}
        onSetActive={handleSetActive}
        onClick={() => handleClick("certificates")}
        className={`cursor-pointer ${
          activeLink === "certificates" ? "text-gray-400" : ""
        }`}
      >
        <div className="flex items-center gap-5 group">
        <div
      className={`h-0.5 w-10 transition-all duration-500 hidden lg:block ${
        activeLink === "certificates"  ? "bg-gray-400 w-24" : "bg-white group-hover:bg-gray-400 group-hover:w-24"
      }`}
    ></div>
        <h1 className="text-sm md:text-base">CERTIFICATES</h1>

        </div>
      </Link>


      <Link
        to="contactForm"
        smooth={true}
        duration={500}
        spy={true}
        offset={-50}
        onSetActive={handleSetActive}
        onClick={() => handleClick("contactForm")}
        className={`cursor-pointer ${
          activeLink === "contactForm" ? "text-gray-400" : ""
        }`}
      >
        <div className="flex items-center gap-5 group">
        <div
      className={`h-0.5 w-10 transition-all duration-500 hidden lg:block ${
        activeLink === "contactForm"  ? "bg-gray-400 w-24" : "bg-white group-hover:bg-gray-400 group-hover:w-24"
      }`}
    ></div>
        <h1 className="text-sm md:text-base">CONTACT ME</h1>

        </div>

      </Link>


      <a
        href="Dimitri Kokhtashvili.pdf"
        download
        rel="noopener noreferrer"
        className="bg-green-500 text-center rounded-md lg:mt-5 w-20"
      >
        <div className="border px-2 py-1 rounded-md border-green-500  bg-black cursor-pointer duration-500 transition hover:-translate-y-1 hover:-translate-x-1">
          Resume
        </div>
      </a>
    </>
  );
};

export default Menu;
