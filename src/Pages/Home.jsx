import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaTwitterSquare} from "react-icons/fa";
const Home = () => {
    return ( 
        <div className="h-full w-full bg-cover bg-center">
        <div className="pt-4 px-4 background">
        <div className="text-white p-4">
          <div className=" font-mono text-center mt-32">
          <div className="profile-div mb-8">
            <img  src="/images/amara.jpg" className="profile-pic mt-3 lg:mt-4 sm:mt-0
             w-52 h-52 lg:w-80 lg:h-80 sm:w-52 sm:h-52
             object-cover rounded-full"/>
            </div>
            <div className="font-serif">
              <h1 className="text-2xl lg:text-5xl sm:text-xl  mb-8 text-yellow-400 font-serif ">Amarachi Obiegue</h1>
              <p className="sm:text-2xl lg:text-3xl">I'm a passionate frontend developer</p>
              <p className="sm:text-2xl lg:text-3xl"> I provide clean code and pixel perfect  design.</p>
              <p className="sm:text-2xl lg:text-3xl">I also make website more & more interactive with web animations.</p>
            </div>
            <div className="flex justify-center space-x-4 mt-10 mb-10 text-4xl sm:text-3xl lg:text-5xl">
          <FaTwitterSquare className="bg-zinc-700 p-2 rounded-full hover:bg-yellow-400"/>
          <FaFacebook className="bg-zinc-700 p-2 rounded-full hover:bg-yellow-400"/>
          <FaInstagramSquare className="bg-zinc-700 p-2 rounded-full hover:bg-yellow-400"/>
          <FaLinkedin className="bg-zinc-700 p-2 rounded-full hover:bg-yellow-400"/>
      </div>

          </div>
          
        </div>
     <div>
    
     </div>
     </div>
    </div>
     );
  }
  
  export default Home;