import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="flex bg-black space-y-12 items-center justify-center flex-col 
       h-300vh w-full p-10 font-serif">
        <div className=" text-center text-3xl mt-12">
          <h1 className="text-3xl flex flex-col items-center space-y-6">
            <FaExclamationTriangle className="h-12 w-12 text-writing" />
            <p className="text-white">404 | Page Not Found</p>
          </h1>
        </div>
        <Link
          to="/"
          className="p-2 rounded-lg border-2 bg-cream  text-2xl text-black"
        >
          Back to Home
        </Link>
      </div>
    );
}
 
export default NotFound;