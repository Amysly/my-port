import { FaFacebook, FaInstagramSquare, 
  FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Home = () => {
  const iconStyle =
    "bg-zinc-700 p-2 rounded-full hover:bg-yellow-400 transition-colors duration-300";

  return (
    <div className="min-h-screen flex items-center justify-center pt-4 px-12; ">
      <div className="text-white p-4 grid lg:grid-cols-2 gap-6 items-center">
        
        {/* Intro Section */}
        <section className="text-center mt-2">
          <div className="font-sans">
            <h1 className="text-xl sm:text-xl lg:text-5xl mb-6 text-yellow-400 font-serif">
              Hi, I'm
            </h1>
             <h1 className="text-xl sm:text-xl lg:text-5xl mb-6 text-yellow-400 font-serif">
              Amarachi Obiegue
            </h1>
          <p className="text-sm sm:text-base lg:text-xl text-yellow-400 font-serif">
            I'm a frontend developer specializing in building user-friendly web applications. 
            I'm seeking a challenging role where I can apply my skills, grow my potential, 
            and contribute to both team collaboration and company success.
          </p>

          </div>
        </section>

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/images/amara.jpg"
            alt="Profile of Amarachi Obiegue"
            className="profile-pic w-52 h-52 sm:w-60 sm:h-60 lg:w-80 lg:h-80 lg:mt-8
            object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
