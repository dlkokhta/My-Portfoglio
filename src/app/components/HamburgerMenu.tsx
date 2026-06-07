"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

import Menu from "../components/Menu";

const HamburgerMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setIsHamburgerOpen(true)}
        className="cursor-pointer text-2xl text-foreground"
      >
        <FiMenu />
      </button>
      {isHamburgerOpen && (
        <div
          onClick={() => setIsHamburgerOpen(false)}
          className="absolute left-0 top-0 w-full bg-black bg-opacity-50 lg:hidden"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-screen w-[150px]  bg-background/95 dark:bg-white/5 backdrop-blur-lg  font-thin ml-auto p-5 flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3">
              <Menu />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
