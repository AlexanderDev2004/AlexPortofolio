import Footer from "@/component/footer/footer";
import Navbar from "@/component/header/Navbar";
import projectData from "@/Data/ProjectData";
import ProjectDetail, { ProjectDetailProps } from "@/component/main/project/ProjectDetail";

interface ProjectDetailPageProps {
  params: {
    projects: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const hover =
    "hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300";
  const projectId = parseInt(params.projects); 
  const project = projectData.find((item)  => item.id === projectId);

  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar hover={hover} />
      <div className="mx-2">
        <h1 className="font-bold text-xl mb-2">Detail Project</h1>
        {project ? (
          
          <ProjectDetail project={project as ProjectDetailProps["project"]} />
        ) : (
          
          <p className="text-red-500">Project not found</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
