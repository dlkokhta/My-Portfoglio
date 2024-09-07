import ProjectsDetails from "../components/ProjectDetails";

const Projects = () => {
  return (
    <div className="mt-10">
      <h1 className="text-xl font-bold mb-5 text-center">Projects</h1>
      <ProjectsDetails
        ProjectName="E-commerce"
        image="/Ecommerce.png"
        alt="Ecommerce app image"
        frontendPageLink="https://ecommerce-front-end-five.vercel.app/"
        frontendGithubLink="https://github.com/dlkokhta/EcommerceFrontEnd"
        backendPageLink="https://ecommerceapi-production-7d9c.up.railway.app/"
        backendGithubLink="https://github.com/dlkokhta/EcommerceAPI"
      />
    </div>
  );
};

export default Projects;
