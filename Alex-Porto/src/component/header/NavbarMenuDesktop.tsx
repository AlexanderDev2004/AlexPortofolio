import Link from "next/link";

interface NavbarMenuProps {
  hover: string;
}

export default function NavbarMenuDesktop({ hover }: NavbarMenuProps) {
  return (
    <div className="hidden lg:flex gap-4 items-center">
      <Link href="/projects">
        <a className={hover}>Projects</a>
      </Link>
      <Link href="/experiences">
        <a className={hover}>Experiences</a>
      </Link>
    </div>
  );
}
