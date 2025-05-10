"use client";
import ProjectsDetails from "../components/ProjectsDetails";

const Projects = () => {
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
            pageLink: "https://memory-game-dimitri-kokhtashvili.vercel.app/",
            githubLink: "https://github.com/dlkokhta/memory-game",
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
            pageLink: "https://dlkokhta.github.io/Password-Generator/",
            githubLink: "https://github.com/dlkokhta/Password-Generator",
          },
        ]}
      />

      <ProjectsDetails
        projectName="devjobs-web-app"
        projectImage="/devjobs-web-app.png"
        projectDescription={[
          "Allows users to search for jobs using filters like title, company, and location.",
          "Displays job postings with details such as company name, role, location, and job type (e.g., full-time, part-time, remote).",
          "Includes a toggle feature for switching between light and dark themes for better user experience across various lighting conditions.",
          "Provides comprehensive information for each job posting, including job requirements, company description, and application instructions.",
          " Ensures seamless user experience across devices, including mobile, tablet, and desktop",
        ]}
        projectTechnologies={["  React, Tailwind"]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://devjobs-web-app-three.vercel.app/",
            githubLink: "https://github.com/dlkokhta/devjobs-web-app",
          },
        ]}
      />

      <ProjectsDetails
        projectName="dictionary-web-app"
        projectImage="/dictionary-web-app.png"
        projectDescription={[
          "Allows users to search for words and provides detailed definitions.",
          " Includes a play button for listening to the correct pronunciation of words.",
          "Displays synonyms and other word-related details when available.",
          "Supports font style selection (Sans Serif, Serif, Mono) for a personalized reading experience.",
          "Enables a dark mode toggle for better usability in low-light environments.",
          "Displays clear error messages for invalid word entries or server issues",
          "Optimized layouts for seamless use on devices of various screen sizes.",
        ]}
        projectTechnologies={["  React, TypeScript, Tailwind"]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://dictionary-web-app-drab.vercel.app/",
            githubLink: "https://github.com/dlkokhta/dictionary-web-app",
          },
        ]}
      />

      <ProjectsDetails
        projectName="rest-countries-app"
        projectImage="/rest-countries-app.png"
        projectDescription={[
          "Displays information about countries including population, region, capital, and flag.",
          "Provides a search functionality to quickly find specific countries by name.",
          "Includes a dropdown filter to view countries by region (e.g., Asia, Europe).",
          "Shows detailed information for selected countries, such as native name, subregion, languages, currencies, and border countries.",
          "Allows navigation to border countries by clicking on them in the detailed view.",
          "Offers a dark mode.",
          "Responsive design ensures an optimized experience across various devices.",
        ]}
        projectTechnologies={["  React, Tailwind"]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink:
              "https://rest-countries-api-with-color-theme-switcher-master-smoky.vercel.app/",
            githubLink:
              "https://github.com/dlkokhta/rest-countries-api-with-color-theme-switcher-master",
          },
        ]}
      />

      <ProjectsDetails
        projectName="todo-list-app"
        projectImage="/todo-list.png"
        projectDescription={[
          "Add, Edit, and Delete Todos – Easily manage your tasks with a simple and intuitive interface.",
          "Mark as Completed – Clicking 'Completed' moves the todo to the history view, replacing the normal todo list with completed tasks.",
          "Search Functionality – Quickly find specific tasks using a search bar that filters todos by name.",
          "State Management – Redux Toolkit handles global state management for efficient updates and reactivity.",
        ]}
        projectTechnologies={[
          " React, TypeScript, Redux, Node.js, Express, SQLite, Yup, Joi, Tailwind",
        ]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://to-do-list-app-dimitrikokhtashvili.vercel.app/",
            githubLink: "https://github.com/dlkokhta/To-Do-List-App",
          },

          {
            title: "Back-end",
            pageLink: "https://to-do-app.dimitrikokhtashvili.site/",
            githubLink: "https://github.com/dlkokhta/To-Do-List-App-API",
          },
        ]}
      />

      {/* <ProjectsDetails
        projectName=""
        projectImage=""
        projectDescription={[
         
        ]}
        projectTechnologies={[
          
        ]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "",
            githubLink: "",
          },
          {
            title: "Back-end",
            pageLink: "",
            githubLink: "",
          },
        ]}
      /> */}

      <div className="to-transparen h-[1px] bg-gradient-to-r from-transparent via-slate-400 mt-10"></div>
    </div>
  );
};

export default Projects;
