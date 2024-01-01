import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className=" bg-[#d7efff] flex justify-between items-center py-2.5 px-10 ">
      <NavLink to="/" className="w-12 h-12 rounded-xl bg-white items-center justify-center flex font-bold shadow-md">
        <p className="blue-gradient_text">MK</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'}>
          Projects
        </NavLink>
        <a href="https://drive.google.com/file/d/1HR9PyWjyVWf0tbsv00tCgPAPjnfkukR2/view?usp=sharing"
         target="_blank" rel="noopener noreferrer" className="resume-link">
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;