import React from "react";
import { 
  SiReact, SiTypescript, SiTailwindcss, 
  SiExpress, SiMongodb, SiHtml5, 
  SiGit, SiJavascript, SiBootstrap 
} from "react-icons/si";
import { motion } from "framer-motion";

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
const text = "Technologies I Specialize In";
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // controls delay between letters
      delayChildren: 0.2,   // wait before starting
    },
  },
};

const letterVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 12,
    },
  },
  hover: {
    scale: 1.3,
    transition: { type: "spring", stiffness: 400 },
  },
};

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-10 max-w-6xl">
        
        {/* LEFT SIDE - INTRO */}
        <div className="text-yellow-400 flex flex-col justify-center">
      <motion.h2
      className="text-2xl  lg:text-4xl font-serif
           text-yellow-400  text-center lg:text-left mb-2 sm:mb-6 mt-12 sm:mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h2>
          <p className="text-lg lg:text-xl font-sans text-center lg:text-left">
           Over the past few years, I’ve gained hands-on experience with modern
            frontend tools and frameworks. I use these technologies to build
            responsive, user-friendly, and visually engaging applications.
          </p>
        </div>

        {/* RIGHT SIDE - SKILLS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6 sm:mb-3">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-white p-3 rounded-lg mb-2 flex 
            flex-col items-center justify-center"> 
            <div>{skill.icon}</div>
             <h4 className="font-sans text-zinc-950">{skill.name}</h4> </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Skills;
