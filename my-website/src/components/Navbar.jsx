// src/components/Navbar.jsx
import React from "react";

import ButtonCreativeRight from "./Librarys/Buttons";

const Navbar = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed w-full bg-yellow-500 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">md_paizall</h1>
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="hover:text-yellow-500 text-xl transition"><ButtonCreativeRight name="Home"/></a></li>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-yellow-500 text-xl transition"><ButtonCreativeRight name="About"/></a></li>
          <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="hover:text-yellow-500 text-xl transition"><ButtonCreativeRight name="Skill"/></a></li>
          <li><a href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')} className="hover:text-yellow-500 text-xl transition"><ButtonCreativeRight name="Timeline"/></a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-yellow-500 text-xl transition"><ButtonCreativeRight name="Contact"/></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;