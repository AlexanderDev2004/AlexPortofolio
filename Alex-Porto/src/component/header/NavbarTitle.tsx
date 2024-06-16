interface NavbarTitleProps {
    hover: string;
  }
  
  export default function NavbarTitle({ hover }: NavbarTitleProps) {
    return (
      <div className={`navbar-title ${hover}`}>
        <a href="/">Alx</a>
      </div>
    );
  }
  