import React from "react";
import myProjects from "../Pages/ProjectDetails";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div className="py-8 px-4 sm:px-6 md:px-8 lg:py-12 lg:px-16 md:min-h-0 md:block">
      <div className="flex flex-col items-center justify-center text-center font-bold mb-6">
        <h2 className="text-2xl sm:text-4xl mb-4">Things I’ve Built</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 p-10">
        {myProjects.map((project, index) => {
          // Disable buttons for School Management System
          const isDisabled = project.title === "School Management System";

          return (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={`${index * 500}`}
              className="bg-cream overflow-hidden shadow-lg rounded-md pt-8"
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
              <div className="p-4 font-writing">
                <h3 className="text-lg font-semibold text-black text-center">
                  {project.title}
                </h3>
                <p className="text-sm mt-2">{project.description}</p>
                <p className="text-sm font-bold mt-3">{project.techStack}</p>

                <div className="flex gap-3 mt-4 flex-wrap justify-center">
                  {/* Live Button */}
                  {project.liveLink && !isDisabled ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-writing text-white px-5 py-2 rounded-lg text-sm font-writing hover:bg-neutral-400 transition"
                    >
                      Live
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="bg-gray-500 text-white px-3 py-2 rounded-lg text-sm cursor-not-allowed opacity-70"
                    >
                      In Progress
                    </span>
                  )}

                  {/* Code Button */}
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-writing text-white px-3 py-2 rounded-lg text-sm font-serif hover:bg-neutral-400 transition"
                    >
                      <FaGithub size={25} />
                    </a>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
