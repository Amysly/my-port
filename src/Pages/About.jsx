import { Link } from "react-router-dom";
import { motion } from 'framer-motion'


const About = () => {
  return (
    <section className="bg-purple-950 min-h-screen pt-12 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-white text-lg sm:text-xl lg:text-3xl font-serif 
      text-center mt-5 sm:mt-16" data-aos="fade-in">
        ABOUT ME
      </h2>

      {/* Divider line */}
      <div className="h-[2px] bg-white w-24 my-4" data-aos="fade-in"></div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-16">
        {/* Profile Image */}
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src="/images/amara.jpg"
            alt="Profile of Amarachi Obiegue"
            className="shadow-lg sm:w-60 sm:h-60 lg:w-96 lg:h-96 object-contain
            mt-4 sm:mt-4"
          />
        </div>

        {/* Text Content */}
        <div className="text-white font-sans text-sm sm:text-xl 
        lg:text-xl leading-relaxed sm:leading-7 lg:leading-8" data-aos="fade-left">
          <p className="mb-4">
            Every great website tells a story, and I love being the one who brings that story to
            life. My journey started with simple lines of HTML and CSS, but curiosity kept pushing
            me further into the world of Tailwind CSS, JavaScript, TypeScript and eventually React.
          </p>
          <p className="">
            For me, frontend development isn’t just about writing code; it’s about creating
            experiences, interfaces that feel smooth, responsive, and welcoming. Recently, I’ve been
            exploring Node.js and Express.js to build real-time applications, while also diving into
            MongoDB to better understand how databases power the web. At the same time, sharpening
            my skills to write more scalable and reliable code.
          </p>
        </div>
      
      </div>
       <div className="flex justify-center mb-4">
        <motion.h2 className="border border-white text-xl text-white 
        font-serif w-32 flex items-center justify-center p-2 hover:bg-black" data-aos='fade-left'
        >
          <Link to={'/project'}>
           My projects
          </Link>
          </motion.h2>
        </div>
    </section>
  );
};

export default About;
