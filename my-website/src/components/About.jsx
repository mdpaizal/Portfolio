// src/components/About.jsx
import React, { useState, useEffect, useRef } from "react";
import { Sparkles } from "./Librarys/Sparkle";
import { FaCode, FaLaptopCode, FaTools, FaHeart } from "react-icons/fa";

const About = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const aboutText = "I'm a FullStack Developer with experience in building modern web apps using React, Node.js, Express, and MongoDB. I love turning ideas into code, and I enjoy both frontend and backend work.";
  
  const highlights = [
    {
      icon: FaCode,
      title: "Frontend",
      description: "HTML, CSS, JavaScript, ReactJS",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: FaLaptopCode,
      title: "Backend",
      description: "NodeJS, ExpressJS, MongoDB, MySQL",
      color: "from-green-400 to-green-600"
    },
    {
      icon: FaTools,
      title: "Tools & More",
      description: "Tailwind CSS, GitHub, Postman, Rest APIs",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && currentIndex < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + aboutText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, aboutText, isVisible]);

  return (
    <>
      <Sparkles 
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        color="#fbbf24"
        density={1000}
        size={2}
      />
      
      <section ref={sectionRef} id="about" className="py-16 px-4 text-center max-w-7xl mx-auto relative overflow-hidden">
        {/* Floating Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400/10 to-teal-400/10 rounded-full animate-pulse"></div>
        
        <div className="relative z-10">
          {/* Animated Title */}
          <div className={`mb-12 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient-x">
              About Me
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          {/* Typewriter Text */}
          <div className={`mb-12 ${
            isVisible ? 'animate-fade-in-up animation-delay-300 opacity-100' : 'opacity-0'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 max-w-4xl mx-auto border border-yellow-200">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                {displayText}
                <span className="animate-blink text-yellow-500">|</span>
              </p>
            </div>
          </div>
          
          {/* Highlight Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ${
            isVisible ? 'animate-fade-in-up animation-delay-500 opacity-100' : 'opacity-0'
          }`}>
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-gray-100"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  {/* Glowing Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
                  
                  {/* Icon with Animation */}
                  <div className="relative mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                    <div className={`relative w-16 h-16 mx-auto bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 group-hover:animate-bounce`}>
                      <IconComponent className="text-white text-2xl" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </div>
              );
            })}
          </div>
          
          {/* Fun Stats */}
          <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 ${
            isVisible ? 'animate-fade-in-up animation-delay-700 opacity-100' : 'opacity-0'
          }`}>
            {[
              { number: "1+", label: "Years Experience" },
              { number: "2+", label: "Projects Built" },
              { number: "7+", label: "Technologies" },
              { number: "∞", label: "Coffee Cups" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-4 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 border border-yellow-100"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          {/* Floating Heart */}
          <div className="absolute top-1/2 right-10 pointer-events-none">
            <FaHeart className="text-red-400 opacity-20 animate-ping" style={{ animationDuration: '4s' }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;