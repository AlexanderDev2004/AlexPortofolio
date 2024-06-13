interface NavbarTitleProps {
    hover: string;
  }
  
  export default function NavbarTitle({ hover }: NavbarTitleProps) {
    return (
      <div className={`navbar-title ${hover}`}>
        <h1>My Navbar</h1>
      </div>
    );
  }
  