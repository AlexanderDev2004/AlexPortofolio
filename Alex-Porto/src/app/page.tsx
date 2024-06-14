import Image from "next/image";
import Link from "next/link";
import Navbar  from "@/component/header/Navbar";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Footer from "@/component/footer/footer";

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <Navbar hover={"hover:text-accent"} />
      {/* Media Links */}
      <div className="grid grid-cols-4 gap-4">
        <p className="text-1xl"></p>
        <a href="https://github.com/AlexanderDev2004"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/alexander-agung-raya-028770238/"><FaLinkedinIn /></a>
        {/* <a href="http://"><FaXTwitter /></a> */}
        <a href="https://www.instagram.com/alexjynx01/"><FaInstagram /></a>
      </div>

      
      {/* <Footer /> */}
      <Footer />
    </main>
  );
}
