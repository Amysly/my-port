import { FaTwitter, FaLinkedin } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-purple-950">
      {/* Social Icons */}
      <div className="flex items-center justify-center space-x-4 mb-2 pt-3 text-white">
        <a
          href="https://x.com/amysly_?t=Rk62brPZKhJwy-L45yr3Zg&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter
            size={24}
          />
        </a>
        <a
         href="https://www.linkedin.com/in/amara-sylvanus-470182142?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={24}
          />
        </a>
        <a
          href="https://github.com/Amysly"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub
            size={24}
          />
        </a>
      </div>

      {/* Copyright + Email */}
      <div className="pb-2">
        <h6 className="text-white text-lg  sm:text-base text-center font-serif">
          © 2025 amarachukuwuobiegue@gmail.com
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
