import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent-background p-4 z-50">
      <nav className="flex justify-between items-center">
        <Link
          to="main"
          smooth={true}
          duration={800}
          className="cursor-pointer text-lg font-bold"
        >
          My Portfolio
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`flex flex-col md:flex-row md:space-x-4 md:ml-auto md:static absolute top-16 left-0 w-full md:w-auto transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <Link
            to="projects"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-light-blue p-4 md:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-light-blue p-4 md:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-light-blue p-4 md:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="cursor-pointer hover:text-light-blue p-4 md:p-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
