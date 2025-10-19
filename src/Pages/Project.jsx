import React from "react";
import myProjects from "../Pages/ProjectDetails";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div
      className="py-8 px-4 sm:px-6 md:px-8 lg:py-12 lg:px-16 
      min-h-screen md:min-h-0 md:block mt-10"
    >
      <div>
        {/* Heading + description */}
        <div className="flex flex-col items-center justify-center text-center font-serif mb-8 mt-10">
          <h2 className="text-2xl sm:text-3xl mb-4">Things I’ve Built</h2>
          <p className="leading-6 text-base sm:text-lg max-w-2xl">
            Here are some of the projects I’ve worked on. Each one highlights my
            ability to design and build effective solutions, adapt to different
            technologies, and see projects through from start to finish.
          </p>
    </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 place-items-center w-full">
          {myProjects.map((project, index) => (
            <div 
             key={project.id}
              data-aos="fade-up" 
              data-aos-delay={`${index * 500}`} 
              className="bg-zinc-950 overflow-hidden shadow-2xl rounded-b-md"
            >
              {/* Image preview */}
              <a
                href={project.fullImage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-contain"
                  loading="lazy"
                />
              </a>

              {/* Card Content */}
              <div className="p-4 font-serif">
                <h3 className="text-lg font-semibold text-white text-center">
                  {project.title}
                </h3>
                <p className="text-sm text-white mt-2">
                  {project.description}
                </p>
                <p className="text-sm text-white mt-1">{project.techStack}</p>

                <div className="flex gap-3 mt-4 flex-wrap justify-center">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-3 py-2 rounded-lg 
                      text-sm font-serif hover:bg-slate-100 transition"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="bg-gray-500 text-white px-3 py-2 rounded-lg 
                      text-sm font-serif cursor-not-allowed opacity-70"
                    >
                      In Progress
                    </span>
                  )}

                  {project.codeLink ? (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-3 py-2 rounded-lg 
                      text-sm font-serif hover:bg-slate-100 transition"
                    >
                      Source Code
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="bg-gray-500 text-white px-3 py-2 rounded-lg 
                      text-sm font-serif cursor-not-allowed opacity-70"
                    >
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
