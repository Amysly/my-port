import { useState, useEffect } from "react";
import CvButton from "../components/CvButton";
import {motion } from "framer-motion";


const paragraphWrite={
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


const Home = () => {
  const [doneTyping, setDoneTyping] = useState(false);

useEffect(() => {
    // match typing duration in CSS (2s here)
    const timer = setTimeout(() => setDoneTyping(true), 3000);
    return () => clearTimeout(timer);
  }, []);


  const iconStyle =
    "bg-zinc-700 p-2 rounded-full hover:bg-yellow-400 transition-colors duration-300";

  return (
    <div className=" bg-white min-h-screen flex items-center justify-center pt-4 px-12 ">
      <div className="text-white p-4 items-center">
        
        {/* Intro Section */}
        <section className="text-center mt-2 text-black mb-3">
          <div className="font-sans">
            <h1 className="text-2xl  lg:text-5xl mb-6 t font-serif"
            >
              
              Hi, I'm
            </h1>
             <h1
            className='text-2xl  lg:text-5xl mb-6  font-serif typewriter'
        >
          Amarachi Obiegue
        </h1>
          <motion.p className="text-lg lg:text-xl  font-serif"
          variants={paragraphWrite}
          initial='hidden'
          animate='visible'
          >
            I'm a frontend developer specializing in building user-friendly web applications. 
            I'm seeking a challenging role where I can apply my skills, grow my potential, 
            and contribute to both team collaboration and company success.
          </motion.p>
          </div>
         
        </section>
        {/* Profile Image */}
         <CvButton/>
      </div>
    </div>
  );
};

export default Home;
