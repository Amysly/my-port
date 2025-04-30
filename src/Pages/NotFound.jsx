import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="flex bg-black space-y-12 items-center justify-center flex-col 
        text-yellow-400 h-300vh w-full p-10 font-serif">
        <div className=" text-center text-3xl mt-12">
          <h1 className="text-3xl flex flex-col items-center space-y-6">
            <FaExclamationTriangle className="h-12 w-12 text-red-300" />
            <p>404 | Page Not Found</p>
          </h1>
        </div>
        <Link
          to="/"
          className="p-2 rounded-lg border-2 bg-yellow-400 text-white text-2xl"
        >
          Back to Home
        </Link>
      </div>
    );
}
 
export default NotFound;