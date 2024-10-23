import { Link } from "react-scroll";
import { use, useState } from "react";

const Menu = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Link
        to="about"
        smooth={true}
        duration={500}
        spy={true}
        activeClass={`clicked ? "text-gray-400" : ""`}
        className="cursor-pointer"
      >
        <div className="w-full flex items-center">
          <h1 className="">ABOUT</h1>
        </div>
      </Link>

      <Link
        to="skills"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        className="cursor-pointer"
        onClick={() => setClicked(true)}
      >
        <h1>SKILLS</h1>
      </Link>

      <Link
        to="projects"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="active"
        className="cursor-pointer "
      >
        <h1>PROJECTS</h1>
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        spy={true}
        activeClass="contact"
        className="cursor-pointer lg:hidden"
      >
        <h1>CONTACT</h1>
      </Link>

      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-300 text-center rounded-md lg:mt-5 w-20"
      >
        <div className="border px-2 py-1 rounded-md border-cyan-300  bg-black cursor-pointer duration-400 transition hover:-translate-y-1 hover:-translate-x-1">
          Resume
        </div>
      </a>
    </>
  );
};

export default Menu;
