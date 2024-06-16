'use client';
import NavbarMenuMobile from "./NavbarMenuMobile";
import NavbarTitle from "./NavbarTitle";
import NavbarMenuDesktop from "./NavbarMenuDesktop";
import { ModeToggle } from "./ModeToggle";

interface NavbarProps {
  hover: string;
}

export default function Navbar({ hover }: NavbarProps) {
  return (
    <nav className="flex items-center justify-between p-4 bg-base-100 shadow-md">
      <div className="flex items-center space-x-4">
        <NavbarTitle hover={hover} />
        <div className="hidden lg:flex">
          <NavbarMenuDesktop hover={hover} />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="lg:hidden">
          <NavbarMenuMobile hover={hover} />
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
