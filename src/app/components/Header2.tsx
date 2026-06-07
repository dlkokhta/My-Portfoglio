import Menu from "./Menu";
import Contact from "./Contact";
import RotatingText from "./RotatingText";
import { DEVELOPER_ROLES } from "../data/roles";

const Header2 = () => {
  return (
    <div className="text-foreground hidden lg:block font-light">
      <div className="fixed mt-[30px] xl:mt-[100px]">
        <h1 className="text-4xl font-extrabold mb-3">Dimitri Kokhtashvili</h1>
        <h2 className="text-center">
          <RotatingText words={DEVELOPER_ROLES} />
        </h2>
      </div>
      <div className="fixed flex flex-col mt-[150px] xl:mt-[220px] lg:gap-5">
        <Menu />
      </div>
      <div className="fixed flex flex-col gap-10 mt-[370px] text-[14px] xl:mt-[480px]">
        <Contact />
      </div>
    </div>
  );
};

export default Header2;
