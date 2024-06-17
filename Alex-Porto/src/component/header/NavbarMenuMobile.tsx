import Link from "next/link";

interface NavbarMenuProps {
  hover: string;
}

export default function NavbarMenuMobile({ hover }: NavbarMenuProps) {
  return (
    <div className="lg:hidden relative">
      <div className="dropdown">
        <button tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 right-0 p-3 shadow bg-base-100 rounded-box w-52">
          <li>
            <Link href="/experiences" className={hover}>
              Experiences
            </Link>
          </li>
          <li>
            <Link href="/projects" className={hover}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
