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
        <h2 className="mb-2">entertainment-web-app</h2>
        <div className="pb-10 ">
          <a
            href="https://entertainment-web-app-frontend-wine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/entertainment-web-app.png"
              alt="Entertainment-web-app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://entertainment-web-app-frontend-wine.vercel.app/"
              githubLink="https://github.com/dlkokhta/entertainment-web-app-frontend/"
            />
            <ProjectSVG
              title="Back-end"
              pageLink="https://entertainment-web-app-api-production-4cd8.up.railway.app/"
              githubLink="https://github.com/dlkokhta/entertainment-web-app-API"
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

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">space-tourism-website</h2>
        <div className="pb-10 ">
          <a
            href="https://space-tourism-website-main-navy.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/space-tourism-websit.png"
              alt="space-tourism-website app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://space-tourism-website-main-navy.vercel.app/"
              githubLink="https://github.com/dlkokhta/space-tourism-website-main"
            />
            <ProjectSVG
              title="Front-end"
              pageLink="https://space-tourism-website-main-api-2-production.up.railway.app/"
              githubLink="https://github.com/dlkokhta/space-tourism-website-main-API-2"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">space-tourism-website</h2>
        <div className="pb-10 ">
          <a
            href="https://password-generator-nine-lake.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/password-generator.png"
              alt="password-generator app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://password-generator-nine-lake.vercel.app/"
              githubLink="https://github.com/dlkokhta/Password-Generator"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">todo-app</h2>
        <div className="pb-10 ">
          <a
            href="https://todo-app-sigma-beryl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/todo-app.png"
              alt="todo-app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://todo-app-sigma-beryl.vercel.app/"
              githubLink="https://github.com/dlkokhta/todo-app"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">devjobs-web-app</h2>
        <div className="pb-10 ">
          <a
            href="https://devjobs-web-app-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/devjobs-web-app.png"
              alt="devjobs-web-app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://devjobs-web-app-three.vercel.app/"
              githubLink="https://github.com/dlkokhta/devjobs-web-app"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">dictionary-web-app</h2>
        <div className="pb-10 ">
          <a
            href="https://dictionary-web-app-drab.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/dictionary-web-app.png"
              alt="dictionary-web-app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://dictionary-web-app-drab.vercel.app/"
              githubLink="https://github.com/dlkokhta/dictionary-web-app"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">planets-fact-site</h2>
        <div className="pb-10 ">
          <a
            href="https://planets-fact-site-orpin.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/planets-fact-site.png"
              alt="planets-fact-site image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://planets-fact-site-orpin.vercel.app"
              githubLink="https://github.com/dlkokhta/planets-fact-site"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">rest-countries-app</h2>
        <div className="pb-10 ">
          <a
            href="https://rest-countries-api-with-color-theme-switcher-master-smoky.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/rest-countries-app.png"
              alt="rest-countries-app image"
              width={500}
              height={500}
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer"
            />
          </a>
          <div className="flex justify-between">
            <ProjectSVG
              title="Front-end"
              pageLink="https://rest-countries-api-with-color-theme-switcher-master-smoky.vercel.app/"
              githubLink="https://github.com/dlkokhta/rest-countries-api-with-color-theme-switcher-master"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
