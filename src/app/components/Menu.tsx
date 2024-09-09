interface menuClickTypes {
  onAboutClick: any;
  onSkillsClick: any;
  onProjectsClick: any;
  onContactClick: any;
}

const Menu: React.FC<menuClickTypes> = ({
  onAboutClick,
  onSkillsClick,
  onProjectsClick,
  onContactClick,
}) => {
  return (
    <>
      <h1 onClick={onAboutClick}>About</h1>
      <h1 onClick={onSkillsClick}>Skills</h1>
      <h1 onClick={onProjectsClick}>Projects</h1>
      <h1 onClick={onContactClick}>Contact Me</h1>
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
