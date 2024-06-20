import ProjectDetailHeader from "./ProjectDetailHeader"
import ProjectDetailBody from "./ProjectDetailBody"

export interface ProjectDetailProps {
    project: {
      id: number;
      title: string;
      description: string;
      source: string;
      // add other fields as necessary
    };
  }
  
  const ProjectDetail: React.FC<{ project: ProjectDetailProps["project"] }> = ({ project }) => {
    return (
      <div>
        {/* Render project details */}
      </div>
    );
  };
  
export default ProjectDetail;