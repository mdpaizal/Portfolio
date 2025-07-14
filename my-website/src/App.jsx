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
  

  return (
    <div className="bg-white text-gray-900 overflow-y-scroll font-sans relaive">
      <Sparkles 
        className="fixed inset-0 w-full h-full z-0 pointer-events-none"
        color="#fbbf24"
        density={50}
        size={1.5}
      />
      <div className="relative z-50">
        
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Timeline/>
        <Projects/>
        <Contact />
        <Footer />
      </div>
      
      {/* <CanvasCursor/> */}
      <SmoothWavyCanvas className = "z-0"/>
    </div>
  );
}

export default App;