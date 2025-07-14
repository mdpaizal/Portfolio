// src/components/Hero.jsx
import React from "react";
import profilePic from "../assets/HeroImage1.jpeg"; 
import ButtonHoverRight from "./Librarys/CV";
// Add your image in public or src/assets folder

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 px-4 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-4xl font-bold">Hi, I'm<span className="text-yellow-500"> Mohamed Paizal</span></h2>
        <p className="text-lg text-gray-600">A passionate FullStack Developer creating interactive and scalable web applications.</p>
        {/* <a href="/MP-CV.pdf"
        download
        >
          <ButtonHoverRight/>
        </a> */}
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img src={profilePic} alt="Profile" className="rounded-full w-64 h-64 mx-auto shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;