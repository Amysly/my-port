import React from "react";
import {
  SiReact, SiTypescript, SiTailwindcss,
  SiExpress, SiMongodb, SiHtml5,
  SiGit, SiJavascript, SiCss3
} from "react-icons/si";

const skills = [
  { id: 1, name: "React", icon: <SiReact className="text-cyan-400 text-5xl" /> },
  { id: 2, name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-5xl" /> },
  { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { id: 4, name: "Express", icon: <SiExpress className="text-gray-300 text-5xl" /> },
  { id: 5, name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  { id: 6, name: "HTML", icon: <SiHtml5 className="text-orange-500 text-5xl" /> },
  { id: 7, name: "Git", icon: <SiGit className="text-red-500 text-5xl" /> },
  { id: 8, name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { id: 9, name: "CSS", icon: <SiCss3 className="text-blue-600 text-5xl" /> },
];

const Skills = () => {
  return (
    <div className="mt-10 w-full">

      {/* 🔹 MOBILE SLIDING ROW */}
      <div className="sm:hidden overflow-hidden">
        <div className="flex w-max animate-skill-slide gap-6">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="bg-white w-28 p-4 shadow-xl rounded-sm flex flex-col 
              items-center justify-center shrink-0"
            >
              <div className="mb-2">{skill.icon}</div>
              <h4 className="text-black text-sm font-bold text-center">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 GRID FOR TABLET & DESKTOP */}
      <div className="hidden sm:grid grid-cols-2 sm:grid-cols-3
       md:grid-cols-3 gap-6 lg:gap-4 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white w-44 p-3 shadow-2xl rounded-sm flex flex-col 
            items-center justify-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-2">{skill.icon}</div>
            <h4 className="text-black text-sm font-bold text-center">
              {skill.name}
            </h4>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Skills;
