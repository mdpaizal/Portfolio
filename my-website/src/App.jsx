// src/App.jsx
import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import { GoArrowUp } from "react-icons/go";



import CanvasCursor from "./components/CanvasCursor";
import { Sparkles } from "./components/Librarys/Sparkle";
import SmoothWavyCanvas from "./components/Librarys/SmoothWavyCanvas";
function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white text-gray-900 font-sans relative">
      <Sparkles 
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        color="#fbbf24"
        density={50}
        size={1.5}
      />
      <div className="relative z-50">
        {/* <div className="fixed bottom-10 h-10 w-10 right-10 flex justify-center rounded-full items-center bg-yellow-500 cursor-pointer" onClick={scrollToTop}> <GoArrowUp size={31} className="text-bold" /></div> */}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Timeline/>
        <Projects/>
        <Contact />
        <Footer />
      </div>
      
      <CanvasCursor/>
      <SmoothWavyCanvas className = "z-0"/>
    </div>
  );
}

export default App;