
import Home from "../Pages/Home"
import About from "../Pages/About";
import Project from "../Pages/Project";
import Forms from "../Pages/Forms"

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
        <Forms />
      </section>
        </>
    );
}
 
export default Homepage;