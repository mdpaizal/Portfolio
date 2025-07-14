// src/components/Navbar.jsx
import React, { useState } from "react";

import ButtonCreativeRight from "./Librarys/Buttons";
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {
  const [visible,setvisible]=useState(false)
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 80;
      
      // Try modern smooth scroll first
      try {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } catch (error) {
        // Fallback for older mobile browsers
        const start = window.pageYOffset;
        const distance = offsetPosition - start;
        const duration = 800;
        let startTime = null;
        
        function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, start, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }
        
        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }
        
        requestAnimationFrame(animation);
      }
    }
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

        <button className="md:hidden flex" onClick={()=>setvisible(!visible)}>
          <RiMenu4Line size={27}/>
        </button>
      </div>
      
      {visible && (
        <div className="fixed inset-0 bg-yellow-500 z-40 md:hidden">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">md_paizall</h1>
            <button onClick={()=>setvisible(false)}>
              <RiMenu4Line size={27}/>
            </button>
          </div>
          <ul className="flex flex-col space-y-6 items-center justify-center h-full pb-20">
            <li><a href="#home" onClick={(e) => {handleSmoothScroll(e, 'home'); setvisible(false);}} className="hover:text-white text-xl transition"><ButtonCreativeRight name="Home"/></a></li>
            <li><a href="#about" onClick={(e) => {handleSmoothScroll(e, 'about'); setvisible(false);}} className="hover:text-white text-xl transition"><ButtonCreativeRight name="About"/></a></li>
            <li><a href="#skills" onClick={(e) => {handleSmoothScroll(e, 'skills'); setvisible(false);}} className="hover:text-white text-xl transition"><ButtonCreativeRight name="Skill"/></a></li>
            <li><a href="#timeline" onClick={(e) => {handleSmoothScroll(e, 'timeline'); setvisible(false);}} className="hover:text-white text-xl transition"><ButtonCreativeRight name="Timeline"/></a></li>
            <li><a href="#contact" onClick={(e) => {handleSmoothScroll(e, 'contact'); setvisible(false);}} className="hover:text-white text-xl transition"><ButtonCreativeRight name="Contact"/></a></li>
          </ul>
        </div>
      )}
      

    </nav>
  );
};

export default Navbar;