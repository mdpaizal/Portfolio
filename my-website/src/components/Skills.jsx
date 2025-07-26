// src/components/Skills.jsx
import React, { useState, useEffect, useRef } from "react";

const skills = [
  {
    id:1,
    name:"HTML",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: 95,
    color: "from-orange-400 to-red-500"
  },
  {
    id:2,
    name:"CSS",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: 90,
    color: "from-blue-400 to-blue-600"
  },
  {
    id:3,
    name:"JavaScript",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: 85,
    color: "from-yellow-400 to-yellow-600"
  },
  {
    id:4,
    name:"ReactJS",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: 80,
    color: "from-cyan-400 to-blue-500"
  },
  {
    id:5,
    name:"NodeJS",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: 75,
    color: "from-green-400 to-green-600"
  },
  {
    id:6,
    name:"ExpressJS",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: 70,
    color: "from-gray-400 to-gray-600"
  },
  {
    id:7,
    name:"MySQL",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    level: 80,
    color: "from-blue-500 to-orange-500"
  },
  {
    id:8,
    name:"MongoDB",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: 75,
    color: "from-green-500 to-green-700"
  },
  {
    id:9,
    name:"Rest APIs",
    Image:"https://img.icons8.com/color/48/api.png",
    level: 85,
    color: "from-purple-400 to-purple-600"
  },
  {
    id:10,
    name:"Tailwind CSS",
    Image:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    level: 90,
    color: "from-teal-400 to-cyan-500"
  },
  {
    id:11,
    name:"GitHub",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    level: 85,
    color: "from-gray-700 to-black"
  },
  {
    id:12,
    name:"Postman",
    Image:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    level: 80,
    color: "from-orange-400 to-red-500"
  },
];

const Skills = () => {
  const [visibleSkills, setVisibleSkills] = useState([]);
  const [animatedLevels, setAnimatedLevels] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skills.forEach((skill, index) => {
              setTimeout(() => {
                setVisibleSkills(prev => [...prev, skill.id]);
                setTimeout(() => {
                  setAnimatedLevels(prev => ({ ...prev, [skill.id]: skill.level }));
                }, 300);
              }, index * 100);
            });
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

  return (
    <section ref={sectionRef} id="skills" className="py-16 px-4 max-w-7xl mx-auto relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full animate-float-delayed"></div>
      
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient-x">
          My Skills
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full animate-pulse"></div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center px-2">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`group relative bg-white/80 backdrop-blur-sm border-2 border-transparent p-3 sm:p-4 md:p-6 rounded-2xl w-full max-w-[120px] sm:max-w-[140px] flex items-center justify-center flex-col text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 ${
              visibleSkills.includes(skill.id) 
                ? 'animate-skill-appear opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
            
            <div className="relative mb-4 group-hover:animate-bounce">
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
              <img 
                src={skill.Image} 
                alt={skill.name} 
                className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 group-hover:rotate-12 transition-transform duration-300 filter group-hover:drop-shadow-lg" 
              />
            </div>
            
            <h1 className="font-bold text-xs sm:text-sm mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors duration-300">
              {skill.name}
            </h1>
            
            <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2 mb-1 sm:mb-2 overflow-hidden">
              <div 
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${animatedLevels[skill.id] || 0}%`,
                  transform: 'translateX(-100%)',
                  animation: visibleSkills.includes(skill.id) ? 'slideIn 1s ease-out forwards' : 'none'
                }}
              ></div>
            </div>
            
            <span className="text-xs sm:text-sm text-gray-600 font-semibold">
              {animatedLevels[skill.id] || 0}%
            </span>
            
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;