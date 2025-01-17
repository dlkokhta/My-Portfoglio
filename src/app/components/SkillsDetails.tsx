const SkillsDetails = ({ name }: any) => {
  return (
    <button className="border-none rounded-full bg-cyan-600  px-2 py-1  text-sm  h-full hover:scale-105  duration-300">
      {name}
    </button>
  );
};

export default SkillsDetails;
