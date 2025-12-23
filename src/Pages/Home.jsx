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
  //const [doneTyping, setDoneTyping] = useState(false);

//useEffect(() => {
    // match typing duration in CSS (2s here)
   // const timer = setTimeout(() => setDoneTyping(true), 3000);
    //return () => clearTimeout(timer);
  //}, []);


  const iconStyle =
    "bg-zinc-700 p-2 rounded-full hover:bg-yellow-400 transition-colors duration-300";

  return (
    <div className=" bg-cream min-h-screen flex items-center justify-center 
    md:min-h-0 md:block md:justify-normal py-4 px-12">
      <div className="p-4 items-center">
         <div className="flex justify-center items-center mt-16">
            <img 
            alt="Amarasly's profile image"
            src="images/amyslyblack.png"
            loading="lazy"
            className="h-64 w-64 rounded-full object-cover"
            />

          </div>
        {/* Intro Section */}
        <section className="text-center mt-2 text-black mb-3">
          <div className="font-sans">
            <h1 className="text-2xl  lg:text-5xl mb-6 font-sans"
            >
              
              Hi, I'm
            </h1>
             <h1
            className='text-2xl  lg:text-5xl mb-6  font-sans typewriter'
        >
          Amarachi Obiegue
        </h1>
          <motion.p className="text-lg lg:text-xl  font-sans text-black"
          variants={paragraphWrite}
          initial='hidden'
          animate='visible'
          >
            I'm a frontend developer specializing in building user-friendly web applications. 
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
