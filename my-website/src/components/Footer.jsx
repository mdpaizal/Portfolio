// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaHeart } from "react-icons/fa";
import { FaSquareXTwitter, FaX } from "react-icons/fa6";

const Footer = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const footerText = "Made with ❤️ by Mohamed Paizal";
  
  useEffect(() => {
    if (textIndex < footerText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + footerText[textIndex]);
        setTextIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, footerText]);

  const socialLinks = [
    {
      href: "https://github.com/mdpaizal",
      icon: FaGithub,
      color: "hover:text-gray-800",
      bgColor: "hover:bg-gray-100",
      name: "GitHub"
    },
    {
      href: "https://linkedin.com/in/mdpaizal",
      icon: FaLinkedin,
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-100",
      name: "LinkedIn"
    },
    {
      href: "https://x.com/mohamedpaizal30?s=11&t=WuwIIv3v-S2sQ4w4spXvEw",
      icon: FaSquareXTwitter,
      color: "hover:text-black",
      bgColor: "hover:bg-gray-100",
      name: "Twitter"
    },
    {
      href: "https://www.instagram.com/md_paizall?igsh=Z3ZpamZ4MGRtaTV2",
      icon: FaInstagram,
      color: "hover:text-pink-600",
      bgColor: "hover:bg-pink-100",
      name: "Instagram"
    },
    {
      href: "https://wa.me/8681037866",
      icon: FaWhatsapp,
      color: "hover:text-green-600",
      bgColor: "hover:bg-green-100",
      name: "WhatsApp"
    }
  ];

  return (
    <footer className="relative py-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black text-center overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-10 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-8 right-20 w-12 h-12 bg-white/10 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-6 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 right-1/3 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
      </div>
      
      
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        
        <div className="flex justify-center items-center space-x-4 sm:space-x-6 mb-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-150 transition-all duration-500"></div>
                
                
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 ${social.bgColor} ${social.color} group animate-footer-icon-bounce`}
                  title={social.name}
                >
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-300 group-hover:rotate-12" />
                  
                  
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                  
                  
                  <div className="absolute inset-0 rounded-full bg-white opacity-0 group-active:opacity-30 group-active:scale-0 transition-all duration-300"></div>
                </a>
              </div>
            );
          })}
        </div>
        
        
        <div className="flex justify-center mb-6">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent animate-pulse"></div>
        </div>
        
        
        <div className="mb-4">
          <p className="text-lg font-semibold">
            {displayText}
            <span className="animate-blink text-black">|</span>
          </p>
        </div>
        
        
        <div className="animate-fade-in-up animation-delay-500">
          <p className="text-sm opacity-80 hover:opacity-100 transition-opacity duration-300">
            &copy; 2025 Mohamed Paizal. All rights reserved.
          </p>
        </div>
        
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <FaHeart className="text-red-500 opacity-20 animate-ping" style={{ animationDuration: '3s' }} />
        </div>
      </div>
      
      
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-600 to-orange-500 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
