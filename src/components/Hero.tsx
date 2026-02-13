
import Poly from "../assets/images/groupfour.png";

const Hero = () => {
  return (
    <div className="bg-[#8A60FD] min-h-auto w-auto overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 py-25 grid grid-cols-2  md:pt-35">
        
        <div className="text-white ">
          <h1 className="text-xl md:text-[55px] font-bold leading-snug text-left w-auto lg:w-[450px]">
            Your Space for
            Anonymous Kind
            Messages & 
            Birthday Wishes
          </h1>

          <p className="text-sm md:text-base mt-6 max-w-[450px] justify-center left-0">
            Receive anonymous birthday wishes and kind messages
            through your personal link and communities, from people
            who care, shared in a safe space.
          </p>

          <button className="bg-[#C2FF40] text-black w-[200px] lg:w-[200px] py-4 px-3 lg:py-3 lg:py-2 rounded-full  mt-8">
            Get Your Message Link
          </button>
        </div>

        <div className=" md:ml-35 ml-[20px] top-0 bottom-0 mt-0">
          <img src={Poly} className="w-[350px] h-[400px] " alt="Polygon" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
