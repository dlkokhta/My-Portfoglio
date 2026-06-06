import { skillIcons } from "./skillIcons";

interface SkillsDetailsProps {
  name: string;
  delay?: number;
}

const SkillsDetails = ({ name, delay = 0 }: SkillsDetailsProps) => {
  const Icon = skillIcons[name];

  return (
    <button
      className="flex items-center gap-1.5 border-none rounded-full bg-white px-3 py-1 text-sm h-full hover:scale-105 duration-300 opacity-0 translate-y-[80px] animate-slide-up will-change-[transform,opacity]"
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards',
      }}
    >
      {Icon && <Icon className="shrink-0 text-base" aria-hidden="true" />}
      {name}
    </button>
  );
};

export default SkillsDetails;
