import React from "react";
import { 
  SiReact, SiTypescript, SiTailwindcss, 
  SiExpress, SiMongodb, SiHtml5, 
  SiGit, SiJavascript, SiBootstrap 
} from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
const contactText ='Interested in working with me?'
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
    <div>
    <div className=" flex items-center justify-center
     md:min-h-0 md:block md:justify-normal">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-5 lg:p-20">
        
        {/* LEFT SIDE - INTRO */}
        <div className="">
          <motion.h2
            className="text-2xl lg:text-4xl font-serif
             text-black text-center lg:text-left mb-6 mt-12 sm:mt-4 md:mt-10"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-6 mt-4 lg:mt-10">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              aria-label={skill.name}
              className="bg-zinc-900 p-3 rounded-lg flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            > 
              <div>{skill.icon}</div>
              <h4 className="font-sans text-white text-sm lg:text-xl mt-2">{skill.name}</h4> 
            </div>
          ))}
        </div>
      </section>
    </div>
    <div>
      <div className="">
           <motion.p className="font-serif text-2xl 
           lg:text-4xl text-center mb-4 mt-4 sm:mt3"
           variants={containerVariants}
            initial="hidden"
            animate="visible">
              {contactText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                whileHover="hover"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
                 </motion.span>
            ))}
            </motion.p>
            <h2 className="border border-black text-sm lg:text-xl text-black 
                   font-serif w-32  flex items-center justify-center p-2 mb-6 mx-auto" 
                   data-aos='fade-right'>
                     <Link to={'/contact'}>
                      Contact Me
                     </Link>
             </h2>
      </div>
    </div>
    
    </div>
  );
};

export default Skills;
