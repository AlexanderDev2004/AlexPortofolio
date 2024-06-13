interface NavbarTitleProps {
    hover: string;
  }
  
  export default function NavbarTitle({ hover }: NavbarTitleProps) {
    return (
      <div className={`navbar-title ${hover}`}>
        <h1>Alx</h1>
      </div>
    );
  }
  