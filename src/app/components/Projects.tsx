"use client";
import ProjectSVG from "../components/ProjectSVG";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [entertainmetApp, setEntertainmetApp] = useState(false);
  return (
    <div className="mt-20 text-white">
      <h1 className="text-xl font-bold mb-5 text-center">Projects</h1>

      <div className="flex flex-col items-center">
        <h2 className="mb-2">E-commerce</h2>
        <div className="pb-10 ">
          <div className="relative overflow-hidden group ">
            <Image
              src="/Ecommerce.png"
              alt="Ecommerce app image"
              width={500}
              height={500}
              className="object-cover filter grayscale transition-transform duration-700 cursor-pointer transform group-hover:filter-none group-hover:scale-105"
            />
            <div className="absolute pt-5 inset-0 flex flex-col bg-black bg-opacity-80  group-hover:opacity-100 transition-opacity opacity-0 duration-700 text-white px-3">
              <div className="relative cursor-pointer">
                <ul
                  style={{
                    scrollbarWidth: "none" /* Firefox */,
                    msOverflowStyle: "none" /* IE and Edge */,
                  }}
                  className="text-xs lg:text-[13px] list-disc pl-6 font-normal max-h-40 overflow-y-auto md:max-h-full "
                >
                  <h3 className="font-bold underline mb-2 text-xs lg:text-[18px] ">
                    Project Description
                  </h3>
                  <li>User registration with email verification</li>
                  <li>Password recovery with secure OTP verification</li>
                  <li>User password change</li>
                  <li>
                    Admin panel for add, delete items and viewing registered
                    user list
                  </li>
                  <li>Product filters to refine searches</li>
                  <li>
                    Checkout feature with a summary email detailing purchase
                  </li>
                  <li>No payment system integration</li>
                  <li>
                    Checkout email links to the user’s orders page, showing
                    completed orders
                  </li>
                  <li>
                    Clear Error Messages: Instant feedback for registration,
                    login, OTP verification, and password recovery, covering
                    invalid credentials, OTPs, and unregistered emails.
                  </li>
                  <li>
                    Live inventory checks directly from the database based on
                    item selection
                  </li>

                  <h3 className="font-bold underline mt-2 text-xs lg:text-[18px] mb-2">
                    Technologies
                  </h3>
                  <h4>
                    React, TypeScript, Redux, Node.js, Express, MongoDB, Yup,
                    Joi, Nodemailer, Tailwind
                  </h4>
                </ul>

                <div className="absolute  left-1/2 transform -translate-x-1/2 animate-bounce md:hidden">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex justify-between w-full p-5 mt-auto">
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
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="mb-2">entertainment-web-app</h2>
        <div className="pb-10">
          <div className="relative overflow-hidden group ">
            <Image
              src="/entertainment-web-app.png"
              alt="Entertainment-web-app image"
              width={500}
              height={500}
              className="object-cover filter grayscale transition-transform duration-700 cursor-pointer transform group-hover:filter-none group-hover:scale-105"
              // onMouseEnter={() => setEntertainmetApp(true)}
            />

            <div className="absolute pt-28 inset-0 flex flex-col bg-black bg-opacity-80  group-hover:opacity-100 transition-opacity opacity-0 duration-700 text-white px-3">
              <div className="relative cursor-pointer">
                <ul className="text-xs lg:text-[13px] list-disc pl-6 font-normal max-h-40 overflow-y-auto md:max-h-full ">
                  <h3 className="font-bold underline mb-2 text-xs lg:text-[18px] ">
                    Project Description
                  </h3>
                  <li>User registration</li>

                  <li>Filter options by movie name, move and TV series</li>
                  <li>
                    Bookmarking feature for saving favorite movies and TV series
                  </li>
                  <li>
                    Error handling with clear messages during registration and
                    login
                  </li>
                  <li>Responsive interface for an enhanced user experience</li>

                  <h3 className="font-bold underline mt-2 text-xs lg:text-[18px] mb-2">
                    Technologies
                  </h3>

                  <h4>
                    React, TypeScript, Redux, Node.js, Express, MongoDB, Yup,
                    Joi, Tailwind
                  </h4>
                </ul>
              </div>

              <div className="flex justify-between w-full p-5 mt-auto">
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
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer hover:scale-105"
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
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer hover:scale-105"
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
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer hover:scale-105"
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
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer hover:scale-105"
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
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer hover:scale-105"
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
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer hover:scale-105"
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
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer hover:scale-105"
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
              className="filter grayscale hover:filter-none transition-all duration-400 cursor-pointer hover:scale-105"
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
