"use client";
import Image from "next/image";
import { useState } from "react";

import Menu from "../components/Menu";

const HamburgerMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  return (
    <div>
      <Image
        className="relative w-full cursor-pointer animate-bounce hover:animate-none"
        alt="hamburger menu icon"
        width={500}
        height={500}
        onClick={() => setIsHamburgerOpen(true)}
        src="/hamburger.svg"
      />
      {isHamburgerOpen && (
        <div
          onClick={() => setIsHamburgerOpen(false)}
          className="absolute left-0 top-0 w-full bg-black bg-opacity-50 lg:hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-screen w-[150px]  bg-white bg-opacity-5 backdrop-blur-lg  font-thin ml-auto p-5 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-4">
              <Menu />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
