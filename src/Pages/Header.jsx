import { NavLink } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import React, { useState} from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  const LinkClass = (isActive) =>
    isActive
      ? " relative glow-animate line-through text-white font-serif sm:text-lg lg:text-2xl px-4 py-3 block "
      : " relative text-white font-serif sm:text-lg lg:text-2xl px-4 py-3 block ";

  return (
    <nav className="sm:bg-purple-950 p-2 sm:fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
          <div className="text-purple-950 font-serif text-lg 
        sm:text-3xl lg:text-3xl lg:text-white">
          Amy
        </div>



        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/skills", label: "Skills" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => LinkClass(isActive)}
            >
              {link.label}
            </NavLink>
          ))}
      </div>


          {/* Mobile Toggle Button (fixed on small screens only) */}
    <div className="lg:hidden">
      <div className="fixed top-4 right-4 bg-purple-950 flex gap-2 p-2 text-2xl z-20 
     shadow-md">
        <h2 className="text-white font-serif">menu</h2>
        <button className="text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
       
        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-36 h-full bg-purple-950 shadow-xl transform z-10
          transition-transform duration-300 ease-in-out text-xl ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="py-6 flex flex-col">
            <NavLink
              to="/"
              className={ ({ isActive }) =>`mb-4 ${LinkClass(isActive)}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `mb-4 mt-2 ${LinkClass(isActive)}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) => `mb-4 mt-3 ${LinkClass(isActive)}`}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) => `mb-4 mt-3 ${LinkClass(isActive)}`}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => `mt-3 ${LinkClass(isActive)}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
