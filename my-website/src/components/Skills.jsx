// src/components/Skills.jsx
import React from "react";

const skills = [
  // "", "", "", "",
  // "", "", "", "",
  // "", "", "",
  // "", 
  {
    id:1,
    name:"HTML",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    id:2,
    name:"CSS",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    id:3,
    name:"JavaScript",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    id:4,
    name:"ReactJS",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    id:5,
    name:"NodeJS",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    id:6,
    name:"ExpressJS",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  },
  {
    id:7,
    name:"MySQL",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    id:8,
    name:"MongoDB",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    id:9,
    name:"Rest APIs",
    Image:"https://img.icons8.com/color/48/api.png"
  },
  {
    id:10,
    name:"Tailwind CSS",
    Image:"https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
  },
  {
    id:11,
    name:"GitHub",
    Image:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    id:12,
    name:"Postman",
    Image:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 max-w-7xl mx-auto">
      <h3 className="text-3xl font-semibold mb-6 text-center relative w-full text-yellow-500">Skills </h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="border p-4 rounded-xl w-[100px] flex items-center justify-center flex-col text-center shadow-sm hover:shadow-md transition"
          >
            <img src={skill.Image} alt={skill.name} className="h-17 mb-3" />
           <h1 className="font-bold">{skill.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;