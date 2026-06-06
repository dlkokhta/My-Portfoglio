'use client';

import { useEffect, useState } from "react";
import SkillsDetails from "../components/SkillsDetails";

interface SkillCategory {
  category: string;
  items: string[];
}

const skillGroups: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      "Javascript",
      "TypeScript",
      "React.js",
      "React Hooks",
      "Redux",
      "Next.js",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Rest API", "Joi", "Yup"],
  },
  {
    category: "Databases",
    items: [
      "Mongo DB",
      "SQL",
      "PostgreSQL",
      "SQLite",
      "MS SQL",
      "RDS",
      "DynamoDB",
      "pgAdmin",
    ],
  },
  {
    category: "DevOps / Cloud",
    items: ["AWS", "EC2", "S3", "Docker", "VMware Virtualization", "Git", "Github"],
  },
  {
    category: "Networking / Systems",
    items: ["MikroTik", "Cisco Networking", "Windows Server", "Active Directory", "Linux"],
  },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount so the pills start empty
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

        {isVisible && (
          <div className="flex flex-col gap-6 overflow-hidden">
            {skillGroups.map((group, groupIndex) => {
              // Continuous stagger across all groups, not reset per group.
              const offset = skillGroups
                .slice(0, groupIndex)
                .reduce((sum, g) => sum + g.items.length, 0);

              return (
                <div key={group.category}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-black">
                    {group.items.map((skill, itemIndex) => (
                      <SkillsDetails
                        key={skill}
                        name={skill}
                        delay={(offset + itemIndex) * 0.08}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="to-transparen h-[1px] bg-gradient-to-r from-transparent via-slate-400 mt-10"></div>
    </>
  );
};

export default Skills;
