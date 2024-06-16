import Image from "next/image";
import Link from "next/link";
import Navbar from "@/component/header/Navbar";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Footer from "@/component/footer/footer";
import AboutData from "@/Data/AboutData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar hover={"hover:text-accent"} />


      {/* About */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Alexander Agung Raya</h1>
        <p className="text-2xl">{AboutData.About}</p>
      </div>

      {/* Media Links */}
      <div className="grid grid-cols-4 gap-4">
        <p className="text-1xl"></p>
        <a href="https://github.com/AlexanderDev2004" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/alexander-agung-raya-028770238/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        {/* Uncomment jika Twitter diaktifkan */}
        {/* <a href="http://"><FaXTwitter /></a> */}
        <a href="https://www.instagram.com/alexjynx01/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
