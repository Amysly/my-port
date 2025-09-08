import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const LinkClass = (isActive) =>
    isActive
      ? "text-yellow-400  font-serif sm:text-lg lg:text-2xl px-4 py-3 block "
      : "text-white font-serif sm:text-lg lg:text-2xl px-4 py-3 block ";

  return (
    <nav className="p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-yellow-400 font-serif text-lg sm:text-2xl lg:text-3xl">
          Amy
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => LinkClass(isActive)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => LinkClass(isActive)}>
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => LinkClass(isActive)}
          >
            Skills
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) => LinkClass(isActive)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => LinkClass(isActive)}
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="text-yellow-400 text-3xl lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-36 h-full bg-zinc-950 shadow-xl transform
          transition-transform duration-300 ease-in-out text-xl ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="py-6 flex flex-col">
            <NavLink
              to="/"
              className={({ isActive }) => LinkClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => LinkClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) => LinkClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) => LinkClass(isActive)}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => LinkClass(isActive)}
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
