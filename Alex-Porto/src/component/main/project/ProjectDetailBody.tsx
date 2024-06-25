"use client";

import Link from "next/link";
import { FaGithub} from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
interface ProjectDetailHeaderProps {
    project: {
        title: string,
        description: string,
        source: string
        Views : String
    }
}

export default function ProjectDetailBody({ project }: ProjectDetailHeaderProps) {
    return (
        <div>
            {/* body */}
            <div className="">
                <div className="flex justify-between items-center my-5">
                    <h1 className="font-bold mt-3 text-xl">{project?.title}</h1>
                    <div className="border-dashed border-primary border p-2 rounded">
                        <Link
                            href={project.source}
                            passHref
                            className="flex items-center font-bold text-xl hover:text-primary transition">

                            <FaGithub size={30} className="mr-2" />Source
                        </Link>
                        <a className="flex items-center font-bold text-xl hover:text-primary transition" href="http://"><IoEyeSharp />Views</a>
                    </div>
                </div>
                <p className="text-base border-dashed border-t border-primary py-5">{project?.description}</p>
            </div>
        </div>
    );
}
