import Menu from "./Menu";
import Contact from "./Contact";

const Header2 = () => {
  return (
    <div className="text-white hidden lg:block font-light">
      <div className="fixed mt-[100px] ">
        <h1 className="text-4xl font-extrabold">Dimitri Kokhtashvili</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="fixed flex flex-col gap-5 mt-[150px] ">
        <Menu />
      </div>
      <div className="fixed flex flex-col gap-5 mt-[550px] text-[14px]">
        <Contact />
      </div>
    </div>
  );
};

export default Header2;
