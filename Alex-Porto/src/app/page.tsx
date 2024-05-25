// pages/index.tsx
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

// pages/index.tsx
export default function Home() {
  return (
    <main className="w-screen h-screen relative flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-4">Hello, I Alexander Agung Raya</h1>
      <p className="text-lg mb-6">Web Devoloper and Game Devoloper</p>
      <div className="mb-8">
        <Image
          src="/iconAlx.jpeg"
          alt="Sample Image"
          width={300}
          height={200}
        />
      </div>

      {/* Add social media links */}
      <div className="flex">
        <a
          href="https://github.com/AlexanderDev2004"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg text-black hover:text-blue-500"
        >
          <FaGithub className="mr-2" size={24} />
          
        </a>
        <a
          href="https://www.instagram.com/alexjynx01/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg text-black hover:text-blue-500"
        >
          <FaInstagram className="mr-2" size={24} />
        </a>
        <a
          href="https://x.com/Alexander110936"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg text-black hover:text-blue-500"
        >
          <FaXTwitter className="mr-2" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/alexander-agung-raya-028770238/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg text-black hover:text-blue-500"
        >
          <FaLinkedinIn className="mr-2" size={24} />
        </a>
      </div>
    </main>
  );
}
