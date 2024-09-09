"use client";
import ProjectSVG from "../components/ProjectSVG";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="mt-10 text-white">
      <h1 className="text-xl font-bold mb-5 text-center">Projects</h1>

      <div className="flex flex-col items-center">
        <h2 className="mb-2">E-commerce</h2>
        <div className="pb-10 ">
          <a
            href="https://ecommerce-front-end-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Ecommerce.png"
              alt="Ecommerce app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer "
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://ecommerce-front-end-five.vercel.app/"
              githubLink="https://github.com/dlkokhta/EcommerceFrontEnd"
            />
            <ProjectSVG
              title="Back-end"
              pageLink="https://ecommerceapi-production-7d9c.up.railway.app/"
              githubLink="https://github.com/dlkokhta/EcommerceAPI"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">Memori game</h2>
        <div className="pb-10 ">
          <a
            href="https://memory-game-red-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/memoryGame.png"
              alt="Memory game app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://memory-game-red-omega.vercel.app/"
              githubLink="https://github.com/dlkokhta/EcommerceFrontEnd"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
