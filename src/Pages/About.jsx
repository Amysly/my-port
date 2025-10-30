import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="bg-purple-950 min-h-screen flex flex-col items-center pt-12 px-4 md:min-h-0"
    >
      {/* Heading */}
      <h2
        className="text-white text-lg sm:text-xl lg:text-3xl font-serif text-center mt-5 sm:mt-16"
        data-aos="fade-in"
      >
        ABOUT ME
      </h2>

      {/* Divider line */}
      <div
        className="h-[2px] bg-white w-24 my-4 mx-auto"
        data-aos="fade-in"
      ></div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-16 items-center">
        {/* Profile Image */}
        <div className="flex justify-center" data-aos="fade-right">
          <img
            src="/images/amara.jpg"
            alt="Profile of Amarachi Obiegue"
            className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain mt-4"
          />
        </div>

        {/* Text Content */}
        <div
          className="text-white font-sans text-sm sm:text-base lg:text-xl leading-relaxed sm:leading-7 lg:leading-8"
          data-aos="fade-left"
        >
          {/* Hidden on small screens */}
          <p className="mb-4 hidden sm:block">
            Every great website tells a story, and I love being the one who
            brings that story to life. My journey started with simple lines of
            HTML and CSS, but curiosity kept pushing me further into the world
            of Tailwind CSS, JavaScript, TypeScript, and eventually React.
          </p>

          {/* Always visible */}
          <p>
            For me, frontend development isn’t just about writing code; it’s
            about creating experiences interfaces that feel smooth, responsive,
            and welcoming. Recently, I’ve been exploring Node.js and Express.js
            to build real-time applications, while also diving into MongoDB to
            understand how databases power the web and learning to write more
            scalable, reliable code.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6 mb-10">
        <motion.h2
          className="border border-white text-sm lg:text-xl text-white font-serif w-32 flex items-center justify-center p-2 hover:bg-black transition-colors"
          data-aos="fade-left"
        >
          <Link to="/project">My Projects</Link>
        </motion.h2>
      </div>
    </section>
  );
};

export default About;
