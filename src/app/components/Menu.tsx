import { Link } from "react-scroll";
import { use, useState } from "react";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("");

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
        offset={-100} // Adjust offset to trigger active state sooner
        onSetActive={handleSetActive}
        onClick={() => handleClick("about")}
        className={`cursor-pointer ${
          activeLink === "about" ? "text-gray-400" : ""
        }`}
        
      >
        <div className="w-full flex items-center">
          <h1>ABOUT</h1>
        </div>
      </Link>
     
      <Link
        to="skills"
        smooth={true}
        duration={500}
        spy={true}
        onSetActive={handleSetActive}
        onClick={() => handleClick("skills")}
        className={`cursor-pointer ${
          activeLink === "skills" ? "text-gray-400" : ""
        }`}
       
      >
        <h1>SKILLS</h1>
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
        <h1>PROJECTS</h1>
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
        <h1>CERTIFICATES</h1>
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        offset={-50}
        onSetActive={handleSetActive}
        onClick={() => handleClick("contact")}
        className={`cursor-pointer lg:hidden ${
          activeLink === "contact" ? "text-gray-400" : ""
        }`}
      >
        <h1>CONTACT</h1>
      </Link>

      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-300 text-center rounded-md lg:mt-5 w-20"
      >
        <div className="border px-2 py-1 rounded-md border-cyan-300  bg-black cursor-pointer duration-500 transition hover:-translate-y-1 hover:-translate-x-1">
          Resume
        </div>
      </a>
    </>
  );
};

export default Menu;
