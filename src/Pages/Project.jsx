import React from "react";
import myProjects from "../Pages/ProjectDetails";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 120 ,
      delay:0.5

    }
  }
};

const Project = () => {
  return (
    <div className="py-12 px-6 sm:px-10 lg:px-16 min-h-screen mt-10">
      {/* ================= Mobile / Tablet Layout ================= */}
      <div className="md:hidden">
        {/* Heading + description (small screen styling) */}
        <div className="text-black font-serif text-center mb-8">
          <h2 className="text-2xl sm:text-3xl mb-4">Things I’ve Built</h2>
          <p className="leading-6 text-base sm:text-lg">
            Here are some of the projects I’ve worked on. Each one highlights my
            ability to design and build effective solutions, adapt to different
            technologies, and see projects through from start to finish.
          </p>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {myProjects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
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
            <p className="text-sm text-white mt-2">{project.description}</p>
            <p className="text-sm text-white mt-1">{project.techStack}</p>

            <div className="flex gap-3 mt-4 flex-wrap justify-center">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-950 text-black px-3 py-2 rounded-lg 
                text-sm font-serif hover:bg-yellow-500 transition"
              >
                Live Demo
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-950 px-3 py-2 rounded-lg text-sm 
                font-serif hover:bg-zinc-600 transition"
              >
                Source Code
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
      </div>

      {/* ================= Desktop Layout ================= */}
      <div className="hidden md:grid grid-cols-2 gap-10 w-full">
        {/* Left Section */}
        <div className="font-serif flex flex-col justify-center" data-aos="fade-up">
          <h2 className="text-4xl mt-5 mb-6">Things I’ve Built</h2>
          <p className="leading-7 text-lg">
            Here are some of the projects I’ve worked on. Each one highlights my
            ability to design and build effective solutions, adapt to different
            technologies, and see projects through from start to finish. These
            projects are accompanied by a brief description, along with links to
            the source code and live application.
          </p>
        </div>

        {/* Right Section (scrollable cards) */}
        <div
          className="h-[32rem] overflow-y-auto pr-2 space-y-10 
          scrollbar-thin scrollbar-thumb-yellow-400/60 scrollbar-track-zinc-800"
        >
          {myProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-950 overflow-hidden shadow-2xl rounded-b-md"
            >
              <a
                href={project.fullImage}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                />
              </a>

              <div className="p-5 font-serif">
                <h3 className="text-xl font-semibold text-white text-center">
                  {project.title}
                </h3>
                <p className="text-sm text-white mt-2">
                  {project.description}
                </p>
                <p className="text-sm text-white mt-2">{project.techStack}</p>

                <div className="flex gap-3 mt-4 flex-wrap">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-3 py-2 rounded-lg 
                    text-sm font-serif hover:bg-zinc-600  transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-3 py-2 rounded-lg text-sm 
                    font-serif hover:bg-zinc-600 transition"
                  >
                    Source Code
                  </a>
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
