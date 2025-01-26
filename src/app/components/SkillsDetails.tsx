const SkillsDetails = ({ name }: any) => {
  return (
    <button className="border-none rounded-full bg-yellow-300 px-2 py-1  text-sm  h-full hover:scale-105  duration-300 ">
      {name}
    </button>
  );
};

export default SkillsDetails;
