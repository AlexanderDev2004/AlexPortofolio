'use client'
import NavbarMenuMobile from "./NavbarMenuMobile";
import NavbarTitle from "./NavbarTitle";
import NavbarMenuDesktop from "./NavbarMenuDesktop";
import { ModeToggle } from "./ModeToggle";
interface NavbarProps {
  hover: string;
}

export default function Navbar({ hover }: NavbarProps) {
  return (
    <nav className="navbar bg-base-100">
      <NavbarTitle hover={hover} />
      <NavbarMenuDesktop hover={hover} />
      <NavbarMenuMobile hover={hover} />
      <ModeToggle />
    </nav>
    
  );
}
