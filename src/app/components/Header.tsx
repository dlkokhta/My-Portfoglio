"use client";
import Image from "next/image";
import HamburgerMenu from "../components/HamburgerMenu";
import Menu from "../components/Menu";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const { isScrollingDown } = useScrollDirection();

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
    <div
      className={`fixed top-0 left-0 w-full bg-[#0a192f] text-white z-50 transition-transform duration-500 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className=" flex justify-between items-center px-7 py-5 w-full bg-[#0a192f] text-white z-50">
        <div className="flex items-center gap-5">
          <div className="rounded-full overflow-hidden w-12 h-12 bg-yellow-300">
            <Image src="/myPhoto.png" alt="My Photo" width={500} height={500} />
          </div>
          <h1 className="font-bold text-md ">Dimitri Kokhtashvili</h1>
        </div>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <div className=" hidden flex:none md:flex flex-row gap-5 ">
          <Menu
            onAboutClick={onAboutClick}
            onSkillsClick={onSkillsClick}
            onProjectsClick={onProjectsClick}
            onContactClick={onContactClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
