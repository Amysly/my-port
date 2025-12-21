import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // smooth scrolling


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home"); // active section

  const toggleMenu = () => setIsOpen(!isOpen);

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-30 p-4 shadow-lg bg-cream">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-sans text-lg sm:text-3xl lg:text-3xl text-writing cursor-pointer">
          Amy
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6 text-lg lg:text-xl">
          {[
            { to: "home", label: "Home" },
            { to: "about", label: "About" },
            { to: "project", label: "Projects" },
            { to: "contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // adjust for fixed navbar
              onSetActive={() => setActiveSection(link.to)}
              className={`cursor-pointer px-4 py-2 ${
                activeSection === link.to
                  ? "underline text-black"
                  : "text-writing"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden fixed top-4 right-4 z-50 text-2xl">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`lg:hidden absolute left-0 top-full w-full bg-cream shadow-xl
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="py-6 flex flex-col items-center gap-4">
            {[
              { to: "home", label: "Home" },
              { to: "about", label: "About" },
              { to: "project", label: "Projects" },
              { to: "contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveSection(link.to)}
                onClick={() => setIsOpen(false)}
                className={`cursor-pointer px-4 py-2 ${
                  activeSection === link.to
                    ? "underline text-black"
                    : "text-writing"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
