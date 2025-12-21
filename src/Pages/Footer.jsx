import { FaTwitter, FaLinkedin,FaInstagram,FaTiktok } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-cream w-full mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="p-4 lg:p-5 sm:p-0">
            <h2 className="font-bold text-2xl mb-2  sm:text-left">
            AmySly
          </h2>
          <p className="text-writing font-sans"> I specialize in building user-friendly web applications. </p>
          </div>
          
          {/* Social Links */}
          <div className="p-4 lg:p-5 sm:p-0">
            <h3 className="font-bold text-xl mb-3">Connect with me</h3>
            <div className="flex space-x-8 text-writing">
              <a
                href="https://x.com/amysly_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaTwitter size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/amara-sylvanus-470182142"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://github.com/Amysly"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <SiGithub size={22} />
              </a>
               <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaInstagram size={22} />
              </a>
               <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaTiktok size={22} />
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="p-4 lg:p-5 sm:p-0">
            <h3 className="font-bold text-xl mb-3">Email me</h3>
            <p className="text-writing font-sans text-sm ">
              amarachukuwuobiegue@gmail.com
            </p>
          </div>
        </div>

      </div>
      <div className="w-full border-b border-gray-50"></div>
        {/* Bottom */}
        <div className="pt-4">
          <p className="text-writing text-sm font-sans text-center">
            © {new Date().getFullYear()} AmySly. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
