interface SkillsDetailsProps {
  name: string;
  delay?: number;
}

const SkillsDetails = ({ name, delay = 0 }: SkillsDetailsProps) => {
  return (
    <button
      className="border-none rounded-full bg-white px-2 py-1 text-sm h-full hover:scale-105 duration-300 opacity-0 translate-y-[80px] animate-slide-up will-change-[transform,opacity]"
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: 'forwards',
      }}
    >
      {name}
    </button>
  );
};

export default SkillsDetails;
