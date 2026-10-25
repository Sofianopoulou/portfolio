import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const Header = ({
  theme,
  onToggleTheme,
}: {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent-background p-4 z-50">
      <nav className="relative flex justify-between items-center">
        {/* Logo / Home */}
        <Link
          to="main"
          smooth={true}
          duration={800}
          className="cursor-pointer text-lg font-bold"
          onClick={closeMenu}
        >
          My Portfolio
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={800}
              className="cursor-pointer hover:text-light-blue transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleTheme}
          className="ml-auto p-2 text-xl hover:text-light-blue transition-colors duration-200 md:ml-0"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden text-2xl p-2"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile navigation */}
        <div
          className={`
            md:hidden
            absolute
            top-full
            right-0
            mt-3
            w-52
            rounded-xl
            bg-menu-background
            backdrop-blur-md
            shadow-xl
            border
            border-menu-border
            overflow-hidden
            origin-top-right
            transition-all
            duration-300
            ease-out
            ${
              isMenuOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }
          `}
        >
          <div className="flex flex-col py-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={800}
                onClick={closeMenu}
                className="
                  cursor-pointer
                  px-5
                  py-3
                  text-right
                  hover:text-light-blue
                  hover:bg-menu-hover
                  transition-colors
                  duration-200
                "
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
