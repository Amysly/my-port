import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'; 
import React, { useState } from "react";



const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const LinkClass = ({ isActive }) =>
        isActive
        ? "text-yellow-400 font-serif sm:text-lg lg:text-2xl px-4 py-3 rounded-md"
        : "text-white font-serif sm:text-lg lg:text-2xl";

    return ( 
        <nav className="bg-black bg-opacity-50 p-4 fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-yellow-400 font-serif  text-lg sm:text-2xl lg:text-3xl">
                    Amy
                </div>

                <button
                    className="text-white text-3xl lg:hidden"
                    onClick={toggleMenu}
                    >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div className={`space-x-4 ${ isOpen ? "flex" : "hidden"} 
                absolute top-full right-5 w-[300px] bg-zinc-900 flex-col items-center 
                p-[10px] transition-all ease-out duration-[300ms] lg:flex lg:static lg:w-auto 
                lg:bg-transparent lg:flex-row lg:p-0`}
>
                    <NavLink to="/"  className={({ isActive }) => `${LinkClass({ isActive })} hover:text-yellow-400`}
            >
                        Home
                    </NavLink>

                    <NavLink to="/About"  className={({ isActive }) => `${LinkClass({ isActive })} hover:text-yellow-400`}
            >
                        About
                    </NavLink>

                    <NavLink to="/Service"  className={({ isActive }) => `${LinkClass({ isActive })} hover:text-yellow-400`}
            >
                        Services
                    </NavLink>

                    <NavLink to="/project"  className={({ isActive }) => `${LinkClass({ isActive })} hover:text-yellow-400`}
            >
                        Projects
                    </NavLink>

                    <NavLink to="/Contact"  className={({ isActive }) => `${LinkClass({ isActive })} hover:text-yellow-400`}
            >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}


export default Header;
