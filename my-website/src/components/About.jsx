// src/components/About.jsx
import React from "react";
import { Sparkles } from "./Librarys/Sparkle";

const About = () => {
  return (
    <>
    <Sparkles 
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        color="#fbbf24"
        density={1000}
        size={2}
      />
    <section id="about" className="py-16 px-4  text-center max-w-7xl mx-auto">
      <h3 className="text-3xl font-semibold mb-4">About Me</h3>
      <p className="text-gray-700 max-w-2xl mx-auto">
        I'm a FullStack Developer with experience in building modern web apps using React, Node.js, Express, and MongoDB. I love turning ideas into code, and I enjoy both frontend and backend work.
      </p>
    </section></>
  );
};

export default About;