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
        className="text-black px-4 py-2 flex items-center justify-center whitespace-nowrap
        font-serif w-32 border border-black"
         variants={cvButton}
          initial='hidden'
          animate='visible'
    >
        View Resume
    </motion.a>
</div>
  )
}

export default CvButton
