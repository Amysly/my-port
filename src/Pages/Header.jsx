import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { motion } from "framer-motion";

const MotionNavLink = motion.create(NavLink);

const underlineVariants = {
  hidden: { scaleX: 0 },
  hover: { scaleX: 1, 
    transition: { duration: 0.25, ease: "easeInOut" } },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const LinkClass = (isActive) =>
    isActive
      ? " relative glow-animate text-yellow-400  font-serif sm:text-lg lg:text-2xl px-4 py-3 block "
      : " relative text-white font-serif sm:text-lg lg:text-2xl px-4 py-3 block ";

  return (
    <nav className="p-4 sm:fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-yellow-400 font-serif text-lg sm:text-2xl lg:text-3xl">
          Amy
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6">
                {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/skills", label: "Skills" },
            { to: "/project", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map((link) => (
            <MotionNavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => LinkClass(isActive)}
              initial="hidden"
              whileHover="hover"
            >
              <span className="relative inline-block">
                {link.label}
                <motion.span
                  className="absolute left-0 bottom-0 h-[2px] bg-yellow-400 w-full origin-left"
                  variants={underlineVariants}
                />
              </span>
            </MotionNavLink>
          ))}
        </div>

          {/* Mobile Toggle Button (fixed on small screens only) */}
    <div className="lg:hidden">
      <div className="fixed top-4 right-4 bg-yellow-400 flex gap-2 p-2 text-2xl z-20 
     shadow-md">
        <h2 className="text-white font-serif">menu</h2>
        <button className="text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </div>
       
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
