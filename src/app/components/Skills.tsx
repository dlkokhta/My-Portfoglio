import SkillsDetails from "../components/SkillsDetails";

const Skills = () => {
  return (
    <>
      <div className=" mt-20 text-white">
        <h1 className="text-center text-xl font-bold">Skills</h1>
        <h4 className="mt-5 mb-5 font-light break-words block">
          Programming Languages, Libraries, frameworks and tools:
        </h4>
        <div className="flex flex-wrap gap-4 text-black">
          <SkillsDetails name="Javascript" />
          <SkillsDetails name="TypeScript" />
          <SkillsDetails name="React.js" />
          <SkillsDetails name="Redux" />
          <SkillsDetails name="Next.js" />
          <SkillsDetails name="Node.js" />
          <SkillsDetails name="Express.js" />
          <SkillsDetails name="Tailwind" />
          <SkillsDetails name="Bootstrap" />
          <SkillsDetails name="Mongo DB" />
          <SkillsDetails name="Git" />
          <SkillsDetails name="Github" />
          <SkillsDetails name="SQL" />
          <SkillsDetails name="PostgreSQL" />
          <SkillsDetails name="SQLite" />
          <SkillsDetails name="pgAdmin" />
          <SkillsDetails name="MS SQL" />
          <SkillsDetails name="SQLite" />
          <SkillsDetails name="C#" />
          <SkillsDetails name=".NET" />
          <SkillsDetails name="Entity Framework" />
          <SkillsDetails name="ASP.NET.CORE" />
          <SkillsDetails name="MVC" />
          <SkillsDetails name="VMware Virtualization" />
          <SkillsDetails name="VirtualBox" />
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
