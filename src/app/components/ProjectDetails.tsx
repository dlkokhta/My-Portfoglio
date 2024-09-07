import Image from "next/image";
import ProjectSVG from "../components/ProjectSVG";

interface ProjectsTypes {
  image: string;
  alt: string;
  ProjectName: any;
  frontendPageLink: string;
  frontendGithubLink: string;
  backendPageLink: string;
  backendGithubLink: string;
}

const ProjectsDetails: React.FC<ProjectsTypes> = ({
  image,
  alt,
  ProjectName,
  frontendPageLink,
  frontendGithubLink,
  backendPageLink,
  backendGithubLink,
}) => {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="mb-2">{ProjectName}</h2>
      <div className="pb-10">
        <Image src={image} alt={alt} width={500} height={500} />
        <div className="flex justify-between">
          <ProjectSVG
            pageLink={frontendPageLink}
            githubLink={frontendGithubLink}
          />
          <ProjectSVG
            pageLink={backendPageLink}
            githubLink={backendGithubLink}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
