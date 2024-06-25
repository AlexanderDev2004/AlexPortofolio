import Project from "@/component/main/project/Project";

import Navbar from "@/component/header/Navbar";
import Footer from "@/component/footer/footer";

export default function ProjectPage() {
  const hover = "hover:text-primary transition ease-in-out delay-150 hover:-translate-y-0.5 duration-300";

  return (
    <div className="max-w-screen-lg mx-auto">
      <Navbar hover={hover} />
      <div className="ml-2 mr-2">
        <h1 className="font-bold text-xl mb-2">Projects</h1>
        <Project />
        {/* footer */}
        <Footer />
      </div>
    </div>
  )
}