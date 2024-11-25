"use client";
import ProjectSVG from "../components/ProjectSVG";
import Image from "next/image";
// import { useState } from "react";
import ProjectsDetails from "../components/ProjectsDetails";

const Projects = () => {
  // const [entertainmetApp, setEntertainmetApp] = useState(false);
  return (
    <div className="mt-20 text-white">
      <h1 className="text-xl font-bold mb-5 text-center">Projects</h1>

      <ProjectsDetails
        projectName="E-commerce"
        projectImage="/Ecommerce.png"
        projectDescription={[
          "User registration with email verification",
          "Password recovery with secure OTP verification",
          "User password change",
          "Admin panel for add, delete items and viewing registered user list",
          "Product filters to refine searches",
          "Checkout feature with a summary email detailing purchase",
          "No payment system integration",
          "Checkout email links to the user’s orders page, showing completed orders",
          "Clear Error Messages: Instant feedback for registration,login, OTP verification, and password recovery, covering invalid credentials, OTPs, and unregistered emails.",
          "Live inventory checks directly from the database based on item selection",
        ]}
        projectTechnologies={[
          "  React, TypeScript, Redux, Node.js, Express, MongoDB, Yup, Joi, Nodemailer, Tailwind",
        ]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://ecommerce-front-end-five.vercel.app/",
            githubLink: "https://github.com/dlkokhta/EcommerceFrontEnd",
          },
          {
            title: "Back-end",
            pageLink: "https://dimitrikokhtashvili.site/",
            githubLink: "https://github.com/dlkokhta/EcommerceAPI",
          },
        ]}
      />

      <ProjectsDetails
        projectName="entertainment-web-app"
        projectImage="/entertainment-web-app.png"
        projectDescription={[
          "User registration",
          "Filter options by movie name, move and TV series",
          "Bookmarking feature for saving favorite movies and TV series",
          "Error handling with clear messages during registration and login",
          "Responsive interface for an enhanced user experience",
        ]}
        projectTechnologies={[
          " React, TypeScript, Redux, Node.js, Express, MongoDB, Yup, Joi, Tailwind",
        ]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://entertainment-web-app-frontend-wine.vercel.app/",
            githubLink:
              "https://github.com/dlkokhta/entertainment-web-app-frontend/",
          },

          {
            title: "Back-end",
            pageLink: "https://entertainment-web-app.dimitrikokhtashvili.site/",
            githubLink: "https://github.com/dlkokhta/entertainment-web-app-API",
          },
        ]}
      />

      <ProjectsDetails
        projectName="memory game"
        projectImage="/memoryGame.png"
        projectDescription={[
          "Choose to play solo or with up to 4 players",
          "Select between number or icon themes for the game tiles",
          " Choose from two grid sizes: 4x4 for a quick game or 6x6 for more challenge",
          "ptimized layouts for different screen sizes, ensuring a smooth experience on any device",
          " Interactive elements feature hover effects for a dynamic user interface",
        ]}
        projectTechnologies={["  React, TypeScript, Redux, Tailwind"]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://memory-game-red-omega.vercel.app/",
            githubLink: "https://github.com/dlkokhta/EcommerceFrontEnd",
          },
        ]}
      />

      <ProjectsDetails
        projectName="space-tourism-website"
        projectImage="/space-tourism-websit.png"
        projectDescription={[
          " Explore detailed information about destinations, crew  members, and space technology",
          "Toggle tabs to seamlessly switch between categories and learn more about each topic",
          "Fully responsive design, optimized for desktop, tablet, and mobile viewing",
          "Hover effects on interactive elements, enhancing user navigation and engagement",
          "Visually engaging layout with smooth transitions and immersive imagery",
        ]}
        projectTechnologies={[" React, TypeScript, Tailwind, Express, MongoDB"]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://space-tourism-website-main-navy.vercel.app/",
            githubLink:
              "https://github.com/dlkokhta/space-tourism-website-main",
          },
          {
            title: "Back-end",
            pageLink:
              "https://space-tourism-website-main-api-2-production.up.railway.app/",
            githubLink:
              "https://github.com/dlkokhta/space-tourism-website-main-API-2",
          },
        ]}
      />

      <ProjectsDetails
        projectName="password-generator"
        projectImage="/password-generator.png"
        projectDescription={[
          " Generates secure passwords with customizable length and  options for uppercase letters, lowercase letters, numbers, and symbols.",
          " Displays a strength indicator to provide instant feedback on  password security.",
          "Designed for responsiveness across devices",
          "Allows one-click copying of generated passwords for user convenience.",
        ]}
        projectTechnologies={[" React, TypeScript, Redux, Tailwind"]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://password-generator-nine-lake.vercel.app/",
            githubLink: "https://github.com/dlkokhta/Password-Generator",
          },
        ]}
      />

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
