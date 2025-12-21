import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skills from "./Skills";

const text = "What You Need To Know About Me";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
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

const About = () => {
  return (
    <section
      className="flex flex-col items-center pt-12 px-4 md:min-h-0"
    >

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-16 items-center">
          {/* light SIDE */}
        <Skills/>
               {/* right SIDE */}
               <div className="">
                 <motion.h2
                   className="text-lg lg:text-2xl  font-bold text-black
                    text-center lg:text-left mb-4 mt-3"
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
                <p className="text-black font-sans lg:text-lg leading-relaxed 
                sm:leading-7 lg:leading-8"   data-aos="fade-left">
            For me, frontend development isn’t just about writing code; it’s
            about creating experiences interfaces that feel smooth, responsive,
            and welcoming. Recently, I’ve been exploring Node.js and Express.js
            to build real-time applications, while also diving into MongoDB to
            understand how databases power the web and learning to write more
            scalable, reliable code.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;
