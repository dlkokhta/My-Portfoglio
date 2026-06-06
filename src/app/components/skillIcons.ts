import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiDocker,
  SiVmware,
  SiGit,
  SiMikrotik,
  SiCisco,
  SiLinux,
} from "react-icons/si";
import {
  FaAws,
  FaGithub,
  FaWindows,
  FaDatabase,
  FaServer,
  FaNetworkWired,
} from "react-icons/fa";

/**
 * Maps a skill name (exactly as listed in Skills.tsx) to its icon.
 * Skills missing from this map render text-only — that fallback is intentional.
 */
export const skillIcons: Record<string, IconType> = {
  // Frontend
  Javascript: SiJavascript,
  TypeScript: SiTypescript,
  "React.js": SiReact,
  "React Hooks": SiReact,
  Redux: SiRedux,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  Bootstrap: SiBootstrap,
  // Backend
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Rest API": FaServer,
  // Databases
  "Mongo DB": SiMongodb,
  SQL: FaDatabase,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  "MS SQL": FaDatabase,
  RDS: FaDatabase,
  DynamoDB: FaDatabase,
  pgAdmin: SiPostgresql,
  // DevOps / Cloud
  AWS: FaAws,
  EC2: FaAws,
  S3: FaAws,
  Docker: SiDocker,
  "VMware Virtualization": SiVmware,
  Git: SiGit,
  Github: FaGithub,
  // Networking / Systems
  MikroTik: SiMikrotik,
  "Cisco Networking": SiCisco,
  "Windows Server": FaWindows,
  "Active Directory": FaNetworkWired,
  Linux: SiLinux,
};
