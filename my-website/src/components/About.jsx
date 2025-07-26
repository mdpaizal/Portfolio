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
      {/* Removed Sparkles background animation */}
      
      <section ref={sectionRef} id="about" className="py-16 px-4 text-center max-w-7xl mx-auto">
        {/* Floating Background Elements */}
        {/* Removed advanced background elements */}
        
        <div className="relative z-10">
          {/* Animated Title */}
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-600">
              About Me
            </h3>
            <div className="w-24 h-1 bg-yellow-600 mx-auto rounded-full"></div>
          </div>
          
          {/* Typewriter Text */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto border border-yellow-200">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                {displayText}
                {/* Removed blinking cursor */}
              </p>
            </div>
          </div>
          
          {/* Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                className="bg-white rounded-2xl p-6 border border-gray-100"
                  style={{ animationDelay: `${600 + index * 200}ms` }}
                >
                  {/* Glowing Border */}
                  {/* Removed glowing border */}
                  
                  {/* Icon with Animation */}
                  <div className="relative mb-4">
                    <div className="relative w-16 h-16 mx-auto bg-yellow-600 rounded-full flex items-center justify-center">
                      <IconComponent className="text-white text-2xl" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold mb-2 text-yellow-600">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                  
                  {/* Decorative Elements */}
                  {/* Removed decorative elements */}
                </div>
              );
            })}
          </div>
          
          {/* Fun Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "1+", label: "Years Experience" },
              { number: "2+", label: "Projects Built" },
              { number: "7+", label: "Technologies" },
              { number: "∞", label: "Coffee Cups" }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 border border-yellow-100"
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
          {/* Removed floating heart */}
        </div>
      </section>
    </>
  );
};

export default About;