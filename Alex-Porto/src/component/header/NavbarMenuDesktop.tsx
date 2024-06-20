import { useState } from "react";
import Link from "next/link";

interface NavbarMenuProps {
  hover: string;
}

export default function NavbarMenu({ hover }: NavbarMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-xl font-bold">Brand</a>
            </Link>
          </div>
          <div className="hidden lg:flex gap-4 items-center">
            <Link href="/projects">
              <a className={hover}>Projects</a>
            </Link>
            <Link href="/experiences">
              <a className={hover}>Experiences</a>
            </Link>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/projects">
              <a className={`block ${hover}`}>Projects</a>
            </Link>
            <Link href="/experiences">
              <a className={`block ${hover}`}>Experiences</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
