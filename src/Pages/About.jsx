import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen pt-12 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-yellow-400 text-lg sm:text-xl lg:text-3xl
       font-serif text-center mt-24">
        ABOUT ME
      </h2>

      {/* Divider line */}
      <div className="border border-yellow-400 w-24 my-4"></div>

      {/* Content */}
      <div className="text-yellow-400 font-serif text-sm sm:text-base lg:text-xl max-w-3xl text-justify space-y-4">
        <p>
          I’m a passionate frontend developer skilled in HTML5, CSS3, Bootstrap, Tailwind CSS, 
          JavaScript, and React. I specialize in building responsive, user-friendly web applications 
          with clean and efficient code.
        </p>

        <p>
          Recently, I’ve been learning TypeScript to create more dynamic and scalable solutions. 
          I enjoy solving problems, improving my skills, and taking on new challenges that help me 
          grow while contributing to team and company success.
        </p>
      </div>
    </section>
  );
};

export default About;
