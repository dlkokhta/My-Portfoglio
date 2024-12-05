import Image from "next/image";
import ProjectSVG from "../components/ProjectSVG";

interface ProjectSVGProps {
  title: string;
  pageLink: string;
  githubLink: string;
}

interface ProjectsDetailsProps {
  projectName: string;
  projectImage: string;
  projectDescription: string[];
  projectTechnologies: string[];
  projectSVGs: ProjectSVGProps[];
}

const ProjectsDetails: React.FC<ProjectsDetailsProps> = ({
  projectName,
  projectImage,
  projectDescription,
  projectTechnologies,
  projectSVGs,
}) => {
  return (
    <div className="flex flex-col items-center ">
      <h2 className="mb-2">{projectName}</h2>
      <div className="pb-10 ">
        <div className="relative overflow-hidden group ">
          <Image
            src={projectImage}
            alt={`${projectName} image`}
            width={500}
            height={500}
            className="object-cover filter grayscale transition-transform duration-700  transform group-hover:filter-none group-hover:scale-105"
          />

          <div className="absolute pt-3 inset-0 flex flex-col bg-black bg-opacity-80  group-hover:opacity-100 transition-opacity opacity-0 duration-700 text-white px-3">
            <div className="relative ">
              <ul className="text-xs lg:text-[13px] list-disc pl-6 font-normal max-h-40 overflow-y-auto md:max-h-full ">
                <h3 className="font-bold underline mb-2 text-xs lg:text-[18px] ">
                  Project Description
                </h3>
                {projectDescription.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}

                <h3 className="font-bold underline mt-2 text-xs lg:text-[18px] mb-2">
                  Technologies
                </h3>

                {projectTechnologies.map((tech, index) => (
                  <h4 key={index}>{tech}</h4>
                ))}
                {/* <p>{projectTechnologies.join(", ")}</p> */}
              </ul>
              <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden 4xl:hidden">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 25 10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {/* <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 25"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg> */}
              </div>
            </div>

            <div className="flex justify-between p-5 mt-auto">
              {projectSVGs.map((svg, index) => (
                <ProjectSVG
                  key={index}
                  title={svg.title}
                  pageLink={svg.pageLink}
                  githubLink={svg.githubLink}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
