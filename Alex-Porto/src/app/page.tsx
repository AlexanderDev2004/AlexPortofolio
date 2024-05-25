// pages/index.tsx
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-gray-100 text-black">
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 p-4">
        <div className="flex-shrink-0">
          <Image
            src="/iconAlx.jpeg"
            alt="Sample Image"
            width={300}
            height={200}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
            Hello, I Alexander Agung Raya
          </h1>
          <p className="text-lg mb-6 text-center md:text-left">
            Web Developer and Game Developer
          </p>
          <h1 className="text-2xl font-bold">Follow me</h1>
          <div className="flex space-x-4">
            <a
              href="https://github.com/AlexanderDev2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-black hover:text-blue-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/alexjynx01/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-black hover:text-blue-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://x.com/Alexander110936"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-black hover:text-blue-500"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-agung-raya-028770238/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-black hover:text-blue-500"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
