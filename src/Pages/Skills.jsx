import React from "react";
import { 
  SiReact, SiTypescript, SiTailwindcss, 
  SiExpress, SiMongodb, SiHtml5, 
  SiGit, SiJavascript, SiBootstrap 
} from "react-icons/si";

const skills = [
  { id: 1, name: "React", icon: <SiReact className="text-cyan-400 text-3xl" /> },
  { id: 2, name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
  { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-3xl" /> },
  { id: 4, name: "Express", icon: <SiExpress className="text-gray-300 text-3xl" /> },
  { id: 5, name: "MongoDB", icon: <SiMongodb className="text-green-500 text-3xl" /> },
  { id: 6, name: "HTML", icon: <SiHtml5 className="text-orange-500 text-3xl" /> },
  { id: 7, name: "Git", icon: <SiGit className="text-red-500 text-3xl" /> },
  { id: 8, name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
  { id: 9, name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-3xl" /> },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 max-w-6xl">
        
        {/* LEFT SIDE - INTRO */}
        <div className="text-yellow-400 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-center lg:text-left mb-6">
             Technologies I Specialize In
          </h2>
          <p className="text-lg lg:text-xl font-sans text-center lg:text-left">
           Over the past few years, I’ve gained hands-on experience with modern
            frontend tools and frameworks. I use these technologies to build
            responsive, user-friendly, and visually engaging applications.
          </p>
        </div>

        {/* RIGHT SIDE - SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-white p-3 rounded-lg mb-2 flex 
            flex-col items-center justify-center"> 
            <div>{skill.icon}</div>
             <h4>{skill.name}</h4> </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Skills;
