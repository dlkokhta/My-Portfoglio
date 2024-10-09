import { Link } from "react-scroll";
const Menu = ({}) => {
  return (
    <>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:-translate-y-1 hover:-translate-x-1"
      >
        <h1 className="">About</h1>
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:-translate-y-1 hover:-translate-x-1"
      >
        <h1>Skills</h1>
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="cursor-pointer duration-400 hover:-translate-y-1 hover:-translate-x-1 hover:text-cyan-300"
      >
        <h1>Projects</h1>
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer lg:hidden"
      >
        <h1>Contact Me</h1>
      </Link>
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-cyan-300 text-center rounded-md"
      >
        <div className="border px-2 py-1 rounded-md border-cyan-300  bg-black cursor-pointer duration-400 transition hover:-translate-y-1 hover:-translate-x-1">
          Resume
        </div>
      </a>
    </>
  );
};

export default Menu;
