import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 bg-transparent-background">
      <nav className="flex justify-between">
        <Link
          to="main"
          smooth={true}
          duration={800}
          className="cursor-pointer text-lg font-bold"
        >
          My Portfolio
        </Link>
        <div className="space-x-4">
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-light-blue"
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-light-blue"
          >
            Experience
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-light-blue"
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-light-blue"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
