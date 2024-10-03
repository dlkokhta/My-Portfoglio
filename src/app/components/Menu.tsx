import { Link } from "react-scroll";
const Menu = ({}) => {
  return (
    <>
      <Link to="about" smooth={true} duration={500} className="cursor-pointer">
        <h1>About</h1>
      </Link>
      <Link to="skills" smooth={true} duration={500} className="cursor-pointer">
        <h1>Skills</h1>
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="cursor-pointer"
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
        className="bg-green-400 text-center rounded-md"
      >
        <div className="border px-2 py-1 rounded-md border-green-400  bg-black cursor-pointer duration-400 transition hover:-translate-y-1 hover:-translate-x-1">
          Resume
        </div>
      </a>
    </>
  );
};

export default Menu;
