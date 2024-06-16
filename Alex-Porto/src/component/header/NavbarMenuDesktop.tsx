import Link from "next/link";

interface NavbarMenuProps {
  hover: string;
}

export default function NavbarMenuDesktop({ hover }: NavbarMenuProps) {
  return (
    <div className="hidden sm:flex gap-4 items-center">
      <Link href="/experiences" className={`${hover}`}>
        Experiences
      </Link>
      <Link href="/projects" className={`${hover}`}>
        Projects
      </Link>
    </div>
  );
}

