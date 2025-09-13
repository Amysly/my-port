import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen pt-12 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-yellow-400 text-lg sm:text-xl lg:text-3xl
       font-serif text-center mt-5 sm:mt-16">
        ABOUT ME
      </h2>

      {/* Divider line */}
      <div className="border border-yellow-400 w-24 my-4"></div>

      {/* Content */}
      <div className="text-yellow-400 font-serif text-sm sm:text-base lg:text-xl max-w-3xl text-justify space-y-4">
        <p>
        Every great website tells a story, and I love being the one who brings that story to life. 
        My journey started with simple lines of HTML and CSS, but curiosity kept pushing me further
        into the world of Tailwind CSS, JavaScript, Typescript and eventually React. 
      </p>
      <p>
      For me, frontend development isn’t just about writing code; it’s about creating experiences,
      interfaces that feel smooth, responsive, and welcoming. Recently, I’ve been exploring Node.js 
      and Express.js to build real-time applications, while also diving into MongoDB to better 
      understand how databases power the web. At the same time,sharpening my skills 
      to write more scalable and reliable code.
    </p>
    <p>
      When I’m not coding, I’m usually experimenting with new ideas, challenging myself with tricky 
      problems, and finding joy in the little “aha!” moments that come with learning something new. 
      My goal? To keep growing, keep building, and keep telling stories through design and code.
  </p>
      </div>
    </section>
  );
};

export default About;
