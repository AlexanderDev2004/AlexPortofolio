import Link from "next/link";

interface NavbarMenuProps {
  hover: string;
}

export default function NavbarMenuDesktop({ hover }: NavbarMenuProps) {
  return (
    <div className="hidden lg:flex gap-4 items-center">
      <Link href="/projects" className={hover}>
        Projects
      </Link>
      <Link href="/experiences" className={hover}>
        Experiences
      </Link>
    </div>
  );
}
