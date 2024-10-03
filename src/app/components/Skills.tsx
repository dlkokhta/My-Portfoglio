import SkillsDetails from "../components/SkillsDetails";

const Skills = () => {
  return (
    <>
      <div className=" mt-10 text-white">
        <h1 className="text-center text-xl font-bold">Skills</h1>
        <h4 className="mt-5 mb-5 font-light break-words block">
          Programming Languages, Libraries, frameworks and tools:
        </h4>
        <div className="flex flex-wrap gap-4 text-black">
          <SkillsDetails name="Javascript" />
          <SkillsDetails name="TypeScript" />
          <SkillsDetails name="C#" />
          <SkillsDetails name="SQL" />
          <SkillsDetails name="React.js" />
          <SkillsDetails name="Node.js" />
          <SkillsDetails name="Express.js" />
          <SkillsDetails name=".NET" />
          <SkillsDetails name="Entity Framework" />
          <SkillsDetails name="ASP.NET.CORE" />
          <SkillsDetails name="MVC" />
          <SkillsDetails name="Git" />
          <SkillsDetails name="Github" />
          <SkillsDetails name="VMware Virtualization" />
          <SkillsDetails name="VirtualBox" />
          <SkillsDetails name="Hyper-v" />
          <SkillsDetails name="Docker" />
          <SkillsDetails name="MikroTik" />
          <SkillsDetails name="Cisco Networking" />
          <SkillsDetails name="Windows Server" />
          <SkillsDetails name="Active Directory" />
          <SkillsDetails name="Linux" />
        </div>
      </div>
      <div className="to-transparen h-[1px] bg-gradient-to-r from-transparent via-slate-400 mt-10"></div>
    </>
  );
};

export default Skills;
