// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";

import ButtonCreativeRight from "./Librarys/Buttons";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { FaCode, FaRocket } from "react-icons/fa";

const Navbar = () => {
  const [visible,setvisible]=useState(false)
  const [displayName, setDisplayName] = useState("");
  const [nameIndex, setNameIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const brandName = "md_paizall";
  
  useEffect(() => {
    if (nameIndex < brandName.length) {
      const timeout = setTimeout(() => {
        setDisplayName(prev => prev + brandName[nameIndex]);
        setNameIndex(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [nameIndex, brandName]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-yellow-500/95 backdrop-blur-md shadow-xl py-2' 
        : 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg py-4'
    }`}>
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-4 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-2 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Gradient Border */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center relative">
        {/* Brand with Enhanced Effects */}
        <div className="flex items-center space-x-2 group">
          <div className="relative">
            <FaCode className="text-gray-800 text-lg group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gray-800 rounded-full blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
            {displayName}
            <span className="animate-blink text-gray-800">|</span>
          </h1>
          <FaRocket className="text-gray-800 text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-sm font-semibold">
          <li><a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="hover:text-white text-lg transition-all duration-300 transform hover:scale-105"><ButtonCreativeRight name="Home"/></a></li>
          <li><a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-white text-lg transition-all duration-300 transform hover:scale-105"><ButtonCreativeRight name="About"/></a></li>
          <li><a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className="hover:text-white text-lg transition-all duration-300 transform hover:scale-105"><ButtonCreativeRight name="Skill"/></a></li>
          <li><a href="#timeline" onClick={(e) => handleSmoothScroll(e, 'timeline')} className="hover:text-white text-lg transition-all duration-300 transform hover:scale-105"><ButtonCreativeRight name="Timeline"/></a></li>
          <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, 'contact')} className="hover:text-white text-lg transition-all duration-300 transform hover:scale-105"><ButtonCreativeRight name="Contact"/></a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 transform hover:scale-110 active:scale-95" 
          onClick={()=>setvisible(!visible)}
        >
          {visible ? 
            <RiCloseLine size={24} className="text-gray-800 animate-spin" /> : 
            <RiMenu4Line size={24} className="text-gray-800" />
          }
        </button>
      </div>
      
      {/* Enhanced Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/95 via-yellow-500/95 to-orange-500/95 backdrop-blur-lg"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-16 w-3 h-3 bg-white/30 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-20 w-2 h-2 bg-white/25 rounded-full animate-bounce"></div>
          <div className="absolute top-60 right-8 w-5 h-5 bg-white/15 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative h-full flex flex-col">
          {/* Mobile Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/20">
            <div className="flex items-center space-x-2">
              <FaCode className="text-gray-800 text-lg" />
              <h1 className="text-xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
                {displayName}
              </h1>
            </div>
            <button 
              onClick={()=>setvisible(false)}
              className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-all duration-300"
            >
              <RiCloseLine size={24} className="text-gray-800" />
            </button>
          </div>
          
          {/* Mobile Menu Items */}
          <div className="flex-1 flex items-center justify-center">
            <ul className="flex flex-col space-y-8 text-center">
              {[
                { href: '#home', name: 'Home', delay: '0ms' },
                { href: '#about', name: 'About', delay: '100ms' },
                { href: '#skills', name: 'Skill', delay: '200ms' },
                { href: '#timeline', name: 'Timeline', delay: '300ms' },
                { href: '#contact', name: 'Contact', delay: '400ms' }
              ].map((item, index) => (
                <li 
                  key={index}
                  className={`transform transition-all duration-500 ${
                    visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: item.delay }}
                >
                  <a 
                    href={item.href} 
                    onClick={(e) => {handleSmoothScroll(e, item.href.slice(1)); setvisible(false);}} 
                    className="block p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  >
                    <ButtonCreativeRight name={item.name}/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Mobile Footer */}
          <div className="p-6 text-center border-t border-white/20">
            <p className="text-sm text-gray-700 opacity-80">Swipe up to explore</p>
          </div>
        </div>
      </div>
      

    </nav>
  );
};

export default Navbar;