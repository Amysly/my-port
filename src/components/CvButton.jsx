import React from 'react'
import { motion } from 'framer-motion'
const cvButton={
  hidden:{
    opacity:0,
  },
  visible:{
   opacity:1 ,
   transition:{delay: 3, duration: 1,
    type:'spring', stiffness:200
   }
  }
}

const CvButton = () => {
  return (
  <div className="flex justify-center">
  <motion.a
    href="/cv/Amarachi-ObiegueCV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white px-4 py-2 text-xl bg-writing flex items-center justify-center 
    whitespace-nowrap hover:bg-white hover:text-writing hover:border border-amber-900
    font-sans w-32 mt-5 rounded-lg transition-colors duration-300 
    hover:scale-105"
    variants={cvButton}
    initial="hidden"
    animate="visible"
  >
    Hire Me
  </motion.a>
</div>

  )
}

export default CvButton
