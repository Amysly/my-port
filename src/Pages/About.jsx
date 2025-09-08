import React from 'react';

const About = () => {
    return (
      <div className="">

        <div className="pt-4 px-4">
          <h2 className="col-span-full text-yellow-400 text-lg sm:text-3xl 
          lg:text-4xl text-center font-serif lg:mt-20">ABOUT ME</h2>
          <div className="border border-yellow-400 w-32 mx-auto mt-4 mb-5"></div>
          <div className="grid lg:grid-cols-2 gap-8 sm:p-2 md:p-10 lg:p-20">
            <div className="sm:mt-2 lg:mt-8 mb-8 lg:ml-20 sm:mr-5 flex justify-center"  data-aos="fade-down">
            <img src="/images/amara.jpg" alt='amara' className=' w-3/4 object-cover'/> 
            </div>
            <div className="overflow-hidden">
            <div className="" data-aos="slide-left">
              <h3 className="text-yellow-400 text-lg lg:text-4xl font-serif mb-4 mt-5">Hi There! I'm Amarachi Obiegue
              </h3>
              <h5 className="text-yellow-400 text-lg lg:text-3xl font-serif mb-4">Frontend Developer</h5>
              <p className="text-white font-serif mb-4 leading-8 sm:text-base lg:text-2xl">
                  I am a passionate and driven frontend developer, with experience in building websites using
                  Html5, Css3, Bootstrap 4 and 5, Tailwind css, javascript and React. i have worked on creating responsive
                   layouts and adding interactive features through javascript. I recently started learning Typescript to
                    develop more dynamic and efficient web applications.
              </p>

              <p className="text-white font-serif leading-8 sm:text-base lg:text-2xl">
               I enjoy solving problems and continuously improving my coding skills as i work on various projects,
               aiming to create clean, functional and user-friendly website.As i progress, i am excited to take on a 
               new challenge and grow as a developer.
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;
