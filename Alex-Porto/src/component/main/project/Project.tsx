import projectData from "@/Data/ProjectData";
import Link from "next/link";
import TechData from "@/Data/TechData";

export default function Project() {
    const projects = projectData.toReversed();
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
                <div key={project.id} className="p-2 border-dashed border border-primary rounded-md">
                    <Link key={project.id} href={`/projects/${project.id}`} legacyBehavior>
                        <div>
                            <h1 className="font-bold text-sm md:text-lg">{project.title}</h1>
                            <p className="text-sm md:text-lg my-2">{project.subtitle}</p>
                            <div className="flex flex-row gap-2">
                                {project.tech && project.tech.map((tech) => {
                                    const techData = TechData.find(t => t.id === tech);
                                    return (
                                        <p className="text-xs md:text-xs p-1 border-dashed border border-primary rounded" key={tech}>
                                            {techData?.title}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
