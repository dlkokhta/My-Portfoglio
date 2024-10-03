"use client";
import Image from "next/image";
import HamburgerMenu from "../components/HamburgerMenu";
import Menu from "../components/Menu";
import useScrollDirection from "../hooks/useScrollDirection";

const Header = () => {
  const { isScrollingDown } = useScrollDirection();

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[#0a192f] text-white z-50 transition-transform duration-500 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className=" flex justify-between items-center px-7 py-5 w-full bg-[#0a192f] text-white z-50 xl:px-32">
        <div className="flex items-center gap-5">
          <div className="rounded-full overflow-hidden w-12 h-12 bg-yellow-300">
            <Image src="/myPhoto.png" alt="My Photo" width={500} height={500} />
          </div>
          <h1 className="font-bold text-2xl">Dimitri Kokhtashvili</h1>
        </div>
        <div className="md:hidden ">
          <HamburgerMenu />
        </div>
        <div className=" hidden flex:none md:flex flex-row gap-5 items-center">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
