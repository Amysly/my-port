import { IoDiamondOutline } from "react-icons/io5";
import { PiDesktopLight } from "react-icons/pi";
import { IoLaptopOutline } from "react-icons/io5";

const Service = () => {
  return (
    <section className="background-two">
      <div className="pt-4 px-4 background">
        {/* Section Title */}
        <div>
          <h2 className="col-span-full text-yellow-400 text-lg lg:text-4xl sm:text-xl  sm:mt-10
          lg:mt-20 text-center font-serif">
            SERVICES
          </h2>
          <div className="border border-yellow-400 w-32 mx-auto mt-4"></div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-7 p-10">
              <div  className="border-2 border-zinc-700 rounded-lg pt-8 pl-2 pr-2">
                <div className="text-5xl mt-10 mb-8 bg-zinc-700 p-4 border rounded-full w-24 h-24 hover:bg-yellow-400 icons">
                  <IoLaptopOutline className=" text-white ml-2 mt-1"/>
                </div>
                <h3 className="text-yellow-400 text-center mb-2 mt-4 sm:text-2xl lg:text-3xl font-serif">
                  Responsive Website
                </h3>
                <p className="text-white text-center sm:text-lg lg:text-2xl mb-8 font-serif">
                Offers solutions that ensure websites work seamlessly
                 on any device, from desktops to mobile phones.
                </p>
              </div>
              <div  className="border-2 border-zinc-700 rounded-lg pt-8">
                <div className="text-5xl mt-10 mb-8 bg-zinc-700 p-4 border rounded-full w-24 h-24 hover:bg-yellow-400 icons">
                  <IoDiamondOutline  className=" text-white ml-2 mt-2"/>
                </div>
                <h3 className="text-yellow-400 text-center mb-2 mt-4 sm:text-2xl lg:text-3xl font-serif">
                  Creative Design
                </h3>
                <p className="text-white text-center sm:text-lg lg:text-2xl mb-8 font-serif">
                Focuses on providing aesthetically pleasing and innovative
                 designs tailored to clients' needs.
                </p>
              </div>

              <div  className="border-2 border-zinc-700 rounded-lg pt-8">
                <div className="text-5xl mt-10 mb-8 bg-zinc-700 p-4 border rounded-full w-24 h-24 hover:bg-yellow-400 icons">
                  < PiDesktopLight  className=" text-white ml-2 mt-1"/>
                </div>
                <h3 className="text-yellow-400 text-center mb-2 mt-4 sm:text-2xl lg:text-3xl font-serif">
                  Web Design
                </h3>
                <p className="text-white text-center sm:text-lg lg:text-2xl mb-8 font-serif">
                Involves crafting user-friendly and visually appealing websites
                 that engage users and enhance their experience.

                </p>
              </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
