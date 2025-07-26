import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaGraduationCap, FaAward } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";

const timelineItems = [
  {
    head: "Experience",
    side: "left",
    date: "July 2025 – Present",
    title: "Full-Stack devloper Intern",
    subtitle: "Maskan Technologies",
    desc: "Engaged in the design, development, and maintenance of full stack web applications using modern frameworks and databases..",
    icon: <FaBriefcase />,
  },
  {
    head: "Course",
    side: "right",
    date: "Aug 2024 – May 2025",
    title: "Full Stack Web Devlopment",
    subtitle: "Maskan Technologies",
    desc: "Learned from top devlopers at industry.",
    icon: <FaAward />,
  },
  {
    head: "Education",
    side: "left",
    date: "2023 – 2025",
    title: "Master of Computer Applications",
    subtitle: "Jamal Mohamed College(Autonomous)",
    desc: "CGPA: 7.2/10",
    icon: <FaGraduationCap />,
  },
  {
    side: "left",
    date: "2020 – 2023",
    title: "Bachelor of Computer Science ",
    subtitle: "Jamal Mohamed College(Autonomous)",
    desc: "CGPA: 7.5/10",
    icon: <FaGraduationCap />,
  },
    {
    head: "Workshop",
    side: "right",
    date: "Feb 2023",
    title: "Web Devlopment",
    subtitle: "i-Life Technologies",
    // desc: "CGPA: 7.2/10",
    icon: <FaScrewdriverWrench />,
  },
];

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [lineHeight, setLineHeight] = useState(0);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems(prev => [...prev, index]);
            
            // Animate timeline line
            setTimeout(() => {
              setLineHeight(prev => Math.max(prev, (index + 1) * 20));
            }, index * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="timeline" className="py-16 px-4 relative overflow-hidden">
      
      <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-full animate-pulse"></div>
      
      <div className="text-center mb-16">
        <h2 className="text-xl mb-4 animate-fade-in-up">
          My Professional
        </h2>
        <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient-x">
          Timeline
        </span>
        <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-4 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full rounded-full">
          <div 
            className="w-full bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full transition-all duration-1000 ease-out"
            style={{ height: `${lineHeight}%` }}
          ></div>
        </div>

        <div className="space-y-16">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              data-index={index}
              className={`flex items-center justify-between w-full ${
                item.side === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              
              <div className={`w-[45%] group relative ${
                visibleItems.includes(index) 
                  ? 'animate-timeline-slide-in opacity-100' 
                  : 'opacity-0 translate-x-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}>
                
                
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
                  
                  {item.head && (
                    <div className="absolute -top-4 left-6 px-4 py-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-sm font-bold rounded-full shadow-lg animate-bounce-slow">
                      {item.head}
                    </div>
                  )}
                  
                  
                  <span className="inline-block text-sm text-gray-500 mb-2 px-3 py-1 bg-gray-100 rounded-full group-hover:bg-yellow-100 transition-colors duration-300">
                    {item.date}
                  </span>
                  
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-yellow-500 group-hover:to-orange-500 transition-all duration-300">
                    {item.title}
                  </h3>
                  
                  
                  <p className="text-sm text-gray-600 font-semibold mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                    {item.subtitle}
                  </p>
                  
                  
                  {item.desc && (
                    <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {item.desc}
                    </p>
                  )}
                  
                  
                  <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                </div>
              </div>

              
              <div className={`relative z-20 ${
                visibleItems.includes(index) 
                  ? 'animate-timeline-icon-pop' 
                  : 'opacity-0 scale-0'
              }`}
              style={{ animationDelay: `${index * 200 + 300}ms` }}>
                
                
                <div className="absolute inset-0 w-12 h-12 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                
                
                <div className="relative w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 hover:rotate-12">
                  <span className="text-lg">{item.icon}</span>
                </div>
              </div>

              
              <div className="w-[45%]"></div>
            </div>
          ))}
        </div>
        
        
        <div className="flex justify-center mt-12">
          <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
