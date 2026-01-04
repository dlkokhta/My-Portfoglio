'use client';

import { useEffect, useState } from "react";
import SkillsDetails from "../components/SkillsDetails";

const skills = [
  "Javascript",
  "TypeScript",
  "React.js",
  "React Hooks",
  "Redux",
  "Next.js",
  "Node.js",
  "Express.js",
  "Tailwind",
  "Bootstrap",
  "Rest API",
  "Mongo DB",
  "AWS",
  "EC2",
  "S3",
  "RDS",
  "DynamoDB",
  "Git",
  "Github",
  "SQL",
  "PostgreSQL",
  "SQLite",
  "Joi",
  "Yup",
  "pgAdmin",
  "MS SQL",
  "SQLite",
  "VMware Virtualization",
  "Docker",
  "MikroTik",
  "Cisco Networking",
  "Windows Server",
  "Active Directory",
  "Linux",
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount so the row starts empty
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="mt-10 text-white">
        <h1 className="text-center text-xl font-bold">Skills</h1>
        <h4 className="mt-5 mb-5 font-light break-words block">
          Programming Languages, Libraries, frameworks and tools:
        </h4>
        <div className="flex flex-wrap gap-4 text-black overflow-hidden min-h-[120px]">
          {isVisible &&
            skills.map((skill, index) => (
              <SkillsDetails
                key={skill + index}
                name={skill}
                delay={index * 0.08}
              />
            ))}
        </div>
      </div>
      <div className="to-transparen h-[1px] bg-gradient-to-r from-transparent via-slate-400 mt-10"></div>
    </>
  );
};

export default Skills;
