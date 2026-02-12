import React from "react";
import Poly from "../assets/images/groupfour.png";

const Hero = () => {
  return (
    <div className="bg-[#8A60FD] min-h-auto w-auto overflow-hidden">
      <div className="max-w-6xl mx-auto px-10 py-25 grid grid-cols-2  md:pt-30">
        
        <div className="text-white ">
          <h1 className="text-2xl md:text-5xl font-bold leading- text-left">
            Your Space for <br />
            Anonymous Kind <br />
            Messages & <br />
            Birthday Wishes
          </h1>

          <p className="text-sm md:text-base mt-6 max-w-lg text-left">
            Receive anonymous birthday wishes and kind messages
            through your personal link and communities, from people
            who care, shared in a safe space.
          </p>

          <button className="bg-[#C2FF40] text-black w-[200px] py-4 px-2 lg:py-3 lg:py-2 rounded-full  mt-8">
            Get Your Message Link
          </button>
        </div>

        <div className=" md:ml-25 md:mt-0">
          <img src={Poly} className="w-[350px] h-[400px] " alt="Polygon" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
