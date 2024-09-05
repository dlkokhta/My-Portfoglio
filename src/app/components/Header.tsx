"use client";
import Image from "next/image";
import HamburgerMenu from "../components/HamburgerMenu";
import Menu from "../components/Menu";

const Header = () => {
  const onAboutClick = () => {
    console.log("onAboutClick");
  };
  const onSkillsClick = () => {
    console.log("onSkillsClick");
  };
  const onProjectsClick = () => {
    console.log("onProjectsClick");
  };
  const onContactClick = () => {
    console.log("onContactClick");
  };
  return (
    <main>
      <div className="fixed flex justify-between items-center px-7 py-5 w-full bg-neutral-800">
        <div className="flex items-center gap-5">
          <div className="rounded-full overflow-hidden w-12 h-12 bg-yellow-300">
            <Image src="/myPhoto.png" alt="My Photo" width={500} height={500} />
          </div>
          <h1 className="font-bold text-md text-white">Dimitri Kokhtashvili</h1>
        </div>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <div className="text-white hidden flex:none md:flex flex-row gap-5 ">
          <Menu
            onAboutClick={onAboutClick}
            onSkillsClick={onSkillsClick}
            onProjectsClick={onProjectsClick}
            onContactClick={onContactClick}
          />
        </div>
      </div>
      {/* <div className="to-transparen h-[0.5px] bg-gradient-to-r from-transparent via-slate-300"></div> */}
    </main>
  );
};

export default Header;
