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
    </>
  );
};

export default Menu;
