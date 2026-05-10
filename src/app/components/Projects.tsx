"use client";
import ProjectsDetails from "../components/ProjectsDetails";

const Projects = () => {
  return (
    <div className="mt-10 text-white">
      <h1 className="text-xl font-bold mb-5 text-center">Projects</h1>

      <ProjectsDetails
        projectName="workspaceBridge"
        projectImage="/workspaceBridge.png"
        projectDescription={[
          "Freelancer–client collaboration platform with per-client workspace management",
          "JWT authentication with refresh token rotation, Google OAuth, and two-factor authentication (TOTP)",
          "Email verification and secure password recovery via Resend",
          "Role-based access control (Freelancer / Client) with protected routes",
          "Shareable invite links and magic-link email invitations for clients",
          "Real-time messaging per workspace using Socket.io with message history",
          "File management with Cloudinary storage and versioning",
          "Collaborative whiteboard powered by Excalidraw, synced via Socket.io",
          "Proposal workflow with Draft → Sent → Approved / Revision Requested states ",
          "Client portal — minimal view scoped to a single workspace ",
          
          
        ]}
        projectTechnologies={[
          "  React, TypeScript, Vite, Tailwind, Framer Motion, NestJS, PostgreSQL, Prisma, Socket.io, Cloudinary, Resend, JWT, Argon2, Excalidraw ",
        ]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://wb.dimitrikokhtashvili.com/",
            githubLink: "https://github.com/dlkokhta/workspacebridge-frontend",
          },

          {
            title: "Back-end",
            pageLink:
              "https://api.wb.dimitrikokhtashvili.com/docs",
            githubLink: "https://github.com/dlkokhta/workspacebridge-backend",
          },
        ]}
      />

      <ProjectsDetails
        projectName="LinguaAI"
        projectImage="/LinguaAI.png"
        projectDescription={[
          "AI-powered English immersion built for Georgian speakers",
          "Topic and difficulty-based learning with text-to-speech playback",
          "JWT auth with refresh token rotation and HttpOnly cookie storage",
          "Google OAuth2, email verification, 2FA (TOTP), and password reset",
          "Role-based access control with Admin panel and user management",
          "Dockerized PostgreSQL with Prisma ORM and Swagger documentation",
        ]}
        projectTechnologies={[
          " React, TypeScript, Vite, Framer Motion, Node.js, NestJS, PostgreSQL, Docker, Prisma, Resend, Tailwind CSS, Ubuntu Server",
        ]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://linguaai.dimitrikokhtashvili.com/",
            githubLink: "https://github.com/dlkokhta/linguaai-frontend",
          },

          {
            title: "Back-end",
            pageLink: "https://api.linguaai.dimitrikokhtashvili.com/docs",
            githubLink: "https://github.com/dlkokhta/linguaai-backend",
          },
        ]}
      />

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
            pageLink: "https://shop.dimitrikokhtashvili.com/",
            githubLink: "https://github.com/dlkokhta/EcommerceFrontEnd",
          },
          {
            title: "Back-end",
            pageLink: "https://api.shop.dimitrikokhtashvili.com/",
            githubLink: "https://github.com/dlkokhta/EcommerceAPI",
          },
        ]}
      />

      <ProjectsDetails
        projectName="Full Auth App"
        projectImage="/authApp.png"
        projectDescription={[
          " User registration with email verification",
          "Google OAuth2 sign-in and auto-registration",
          "JWT auth with short-lived access tokens and HttpOnly cookie refresh token",
          "Password hashing with Argon2",
          "Multi-device session management with refresh token rotation,",
          "Role-based access control with Admin and Regular user roles",
          "Protected routes on both frontend and backend",
          "Two-Factor Authentication (2FA) with TOTP ",
          "Token-based password reset flow with email delivery via Resend",
          "User profile management — edit name, change password",
          "Admin panel — view all users, change roles, delete users with pagination",
          "Swagger / OpenAPI documentation",
          "Dockerized PostgreSQL database with Prisma ORM",
        ]}
        projectTechnologies={[
          "React, TypeScript, Vite, Framer Motion, Node.js, NestJS, PostgreSQL, Docker, Prisma, Resend, Tailwind CSS, Ubuntu Server",
        ]}
        projectSVGs={[
          {
            title: "Front-end",
            pageLink: "https://auth.dimitrikokhtashvili.com/",
            githubLink: "https://github.com/dlkokhta/EcommerceFrontEnd",
          },
          {
            title: "Back-end",
            pageLink: "https://api.auth.dimitrikokhtashvili.com/docs",
            githubLink: "https://github.com/dlkokhta/EcommerceAPI",
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

      <div className="to-transparen h-[1px] bg-gradient-to-r from-transparent via-slate-400 mt-20"></div>
    </div>
  );
};

export default Projects;
