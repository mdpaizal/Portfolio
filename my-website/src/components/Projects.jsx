import React from "react";
import { FaGithub } from "react-icons/fa";
import ecommerce from "../assets/e-commerce.jpg"

const projects = [
  {
    title: "e-Commerce Website from Scratch",
    description:
      "Developed a full stack e-commerce web application from scratch using React.js, Node.js, Express, and MongoDB, implementing user authentication, product management, and secure payment integration without relying on third-party platforms.",
    image: ecommerce,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mdpaizal/E-commerce-Project.git",
        style: "bg-black text-white",
        icon: <FaGithub />,
      },
      // {
      //   label: "Notebook",
      //   href: "#",
      //   style: "bg-blue-600 text-white",
      // },
    ],
  },
];

const Projects = () => {
  const project = projects[0]; // extract the first project

  return (
    <section className="py-16 px-4">
      <h2 className="text-xl font-bold text-center mb-2">Explore My</h2>
      <h3 className="text-4xl text-yellow-500 font-extrabold text-center mb-12">Projects</h3>

      {/* Centering Wrapper */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all max-w-md w-full">
          <div className="h-60 mb-4 flex items-center overflow-hidden justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full hover:scale-105 transform transition duration-400 w-full object-cover"
            />
          </div>
          <h4 className="text-xl font-bold mb-2">{project.title}</h4>
          <p className="text-gray-600 text-sm mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-3">
            {project.links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2 ${link.style}`}
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
