import SkillsDetails from "../components/SkillsDetails";

const Skills = () => {
  return (
    <section className="text-white  mt-10">
      <h1 className="text-center text-xl">Skills</h1>
      <div>
        <h4 className="mb-5">Programming Languages:</h4>
        <div className="grid grid-cols-4 gap-2">
          <SkillsDetails name="Javascript" />
          <SkillsDetails name="TypeScript" />
          <SkillsDetails name="C#" />
          <SkillsDetails name="SQL" />
        </div>

        <h4 className="mt-5 mb-5">Libraries, frameworks and tools:</h4>

        <div className="grid grid-cols-4 gap-2 mb-3">
          <SkillsDetails name="React.js" />
          <SkillsDetails name="Node.js" />
          <SkillsDetails name="Express.js" />
          <SkillsDetails name=".NET" />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <SkillsDetails name="Entity Framework" />
          <SkillsDetails name="ASP.NET.CORE" />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <SkillsDetails name="MVC" />
          <SkillsDetails name="Git" />
          <SkillsDetails name="Github" />
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <SkillsDetails name="VMware Virtualization" />
          <SkillsDetails name="VirtualBox" />
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <SkillsDetails name="Hyper-v" />
          <SkillsDetails name="Docker" />
          <SkillsDetails name="MikroTik" />
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <SkillsDetails name="Cisco Networking" />
          <SkillsDetails name="Windows Server" />
        </div>

        <div className="grid grid-cols-2 gap-2 ">
          <SkillsDetails name="Active Directorys" />
          <SkillsDetails name="Linux" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
