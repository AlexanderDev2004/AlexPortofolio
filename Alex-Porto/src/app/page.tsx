import Image from "next/image";
import Link from "next/link";
import Navbar from "@/component/header/Navbar";
import { FaGithub, FaLinkedinIn, FaInstagram, FaFolder } from "react-icons/fa";
import Footer from "@/component/footer/footer";
import AboutData from "@/Data/AboutData";
import ProjectData from "@/Data/ProjectData";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-4">
      {/* Navbar at the top */}
      <Navbar hover="hover:text-accent" />

      {/* About */}
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-4xl font-bold text-center">Alexander Agung Raya</h1>
        <p className="text-2xl text-center mt-4">
          {AboutData.About}
        </p>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center justify-center mt-4">
        <h1 className="text-4xl font-bold text-center">Projects <FaFolder className="inline-block text-yellow-500" /></h1>
        <ul className="mt-4 space-y-2">
          {ProjectData.map((project) => (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`} className="text-2xl text-center">
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
        <a className="font-bold hover:text-accent mt-2" href={'/projects'}>See More...</a>
      </div>

      {/* Media Links */}
      <div className="flex justify-center items-center mt-10 space-x-4 animate-bounce">
        <a href="https://github.com/AlexanderDev2004" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/alexander-agung-raya-028770238/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={30} />
        </a>
        <a href="https://www.instagram.com/alexjynx01/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
