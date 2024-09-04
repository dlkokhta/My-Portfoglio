"use client";

import { useState } from "react";
import BurgerMenu from "../assets/hamburger.svg";
import Menu from "../components/Menu";

const HamburgerMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
  return (
    <div>
      <img
        className="relative w-full"
        onClick={() => setIsHamburgerOpen(true)}
        src={BurgerMenu.src}
      />
      {isHamburgerOpen && (
        <div
          onClick={() => setIsHamburgerOpen(false)}
          className="absolute left-0 top-0 w-full bg-black bg-opacity-50 lg:hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-screen w-[150px] cursor-pointer bg-white bg-opacity-5 backdrop-blur-lg text-white font-thin ml-auto p-5 flex flex-col gap-4"
          >
            <Menu />
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
