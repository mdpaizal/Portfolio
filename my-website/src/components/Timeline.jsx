import React from "react";
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
    subtitle: "Jamal Mohamed College(Autonomous),",
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
  return (
    <section id="timeline" className="py-16  px-4">
      <h2 className="text-xl  text-center mb-12">My Professional <br/><span className=" text-3xl  font-bold text-yellow-500">Timeline</span></h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-yellow-500"></div>

        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full ${
                item.side === "left" ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Content Box */}
              
              <div className="w-[45%] bg-gray-50 p-6 rounded-xl shadow-md relative z-10"> 
                <span className="absolute top-[-35px] text-2xl  font-bold"  >{item.head}</span>
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.subtitle}</p>
                <p className="text-gray-700 text-sm mt-2">{item.desc}</p>
              </div>

              {/* Icon in Center */}
              <div className="w-8 h-8 bg-yellow-500 text-white flex items-center justify-center rounded-full z-20 shadow-lg">
                {item.icon}
              </div>

              {/* Empty Spacer */}
              <div className="w-[45%]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
