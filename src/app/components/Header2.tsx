import Menu from "./Menu";
import Contact from "./Contact";

const Header2 = () => {
  return (
    <div className="text-white hidden lg:block font-light">
      <div className="fixed mt-[100px] ">
        <h1 className="text-4xl font-extrabold">Dimitri Kokhtashvili</h1>
        <h2 className="text-center">Full Stack Developer</h2>
      </div>
      <div className="fixed flex flex-col mt-[190px] lg:gap-3">
        <Menu />
      </div>
      <div className="fixed flex flex-col gap-10 lg:mt-[400px] text-[14px]">
        <Contact />
      </div>
    </div>
  );
};

export default Header2;
