"use client";

import myPhoto from "../assets/myPhoto.png";
import HamburgerMenu from "../components/HamburgerMenu";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <main className="px-7 pt-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="rounded-full overflow-hidden w-12 h-12 bg-yellow-300">
            <img src={myPhoto.src} alt="My Photo" />
          </div>
          <h1 className="font-bold text-md text-white">Dimitri Kokhtashvili</h1>
        </div>
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
        <div className="text-white hidden flex:none md:flex flex-row gap-5">
          <Menu />
        </div>
      </div>
      {/* <div className="to-transparen h-[0.5px] bg-gradient-to-r from-transparent via-slate-300"></div> */}
    </main>
  );
};

export default Header;
