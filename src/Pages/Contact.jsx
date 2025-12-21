import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const contactText = "Interested in working with me?";

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

const Contact = () => {
  return (
<div className="text-center relative z-0">
  <motion.p
    className="font-bold text-2xl lg:text-3xl mb-6"
    variants={containerVariants}
    initial="hidden"
    animate="visible"
  >
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

  <h2
    className="border border-black text-sm lg:text-xl text-black font-sans w-32 
    flex items-center justify-center p-2 mb-6 mx-auto"
    data-aos="fade-right"
  >
    <Link to="/contact">Contact Me</Link>
  </h2>
</div>

  )
}

export default Contact
