// components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">ALX</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/about" className="hover:text-gray-400">About</Link>
          <Link href="/Project" className="hover:text-gray-400">Project</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <Link href="/" className="hover:text-gray-400" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="hover:text-gray-400" onClick={toggleMenu}>About</Link>
          <Link href="/contact" className="hover:text-gray-400" onClick={toggleMenu}>Project</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
