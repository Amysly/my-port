
import Home from "../Pages/Home"
import About from "../Pages/About";
import Project from "../Pages/Project";
import Contact from "../Pages/Contact";

const Homepage = () => {
    return (  
        <>
        <section id="home" className="scroll-mt-24">
        <Home />
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="project" className="scroll-mt-24">
        <Project />
      </section>

      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>

        </>
    );
}
 
export default Homepage;