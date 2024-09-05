import SkillsDetails from "../components/SkillsDetails";

const Skills = () => {
  return (
    <section className="text-white">
      <h1>Skills</h1>
      <div>
        <h2>Programming Languages</h2>
        <SkillsDetails name="Javascript" />
      </div>
    </section>
  );
};

export default Skills;
