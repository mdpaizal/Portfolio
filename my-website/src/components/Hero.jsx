// src/components/Hero.jsx
import React, { useState, useEffect } from "react";
import profilePic from "../assets/HeroImage1.jpeg"; 
import ButtonHoverRight from "./Librarys/CV";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Mohamed Paizal";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <section id="home" className="pt-24 pb-12 px-4 flex flex-col md:flex-row items-center max-w-7xl mx-auto min-h-screen md:min-h-0">
      
      {/* Removed advanced background animations */}
      
      <div className="md:w-1/2 text-center md:text-left space-y-4 md:space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          <span className="inline-block text-2xl sm:text-3xl">👋</span> Hi, I'm
          <span className="block text-yellow-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {displayText}
          </span>
        </h2>
        
        <p className="text-base sm:text-lg text-gray-600 px-2 md:px-0">
          A passionate <span className="text-yellow-500 font-semibold">FullStack Developer</span> creating interactive and scalable web applications.
        </p>
        
        <div className="flex justify-center md:justify-start">
          <ButtonHoverRight />
        </div>
      </div>
      
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img 
          src={profilePic} 
          alt="Profile" 
          className="rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto" 
        />
      </div>
    </section>
  );
};

export default Hero;

// Add these custom animations to your CSS file
/* Add to index.css */
/*
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes gradient-x {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}

.animate-blink {
  animation: blink 1s infinite;
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}
*/