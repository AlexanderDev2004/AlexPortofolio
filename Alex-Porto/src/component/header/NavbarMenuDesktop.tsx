import Link from "next/link";

interface NavbarMenuProps {
  hover: string;
}

export default function NavbarMenuDesktop({ hover }: NavbarMenuProps) {
  return (
    <div className="hidden sm:flex gap-4">
      <Link href="/experiences" className={`mr-3 ${hover}`}>
        Experiences
      </Link>
      <Link href="/projects" className={`mr-3 ${hover}`}>
        Projects
      </Link>
    </div>
  );
}
