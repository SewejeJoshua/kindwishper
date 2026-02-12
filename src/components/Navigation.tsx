import {useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navigation */}
      <div className= {`hidden md:flex items-center text-white justify-between max-w-7xl mx-auto py-4 px-6 
                      ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }
      `} >
        
        <div className="text-xl font-bold pl-[20px]" style={{ fontFamily: "Creato Display" }}>
          KindWishper
        </div>

         
        <div className="flex gap-8 lg:ml-[300px] mx-auto">
          <p className="whitespace-nowrap cursor-pointer">Features</p>
          <p className="whitespace-nowrap cursor-pointer">How it Works</p>
          <p className="whitespace-nowrap cursor-pointer">Communities</p>
          <p className="whitespace-nowrap cursor-pointer">FAQs</p>
        </div>

        
        <button className="bg-[#C2FF40] text-black px-3 py-2 rounded-full">
          Get Started
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4 mx-auto">
         
        <div className="text-xl text-white font-bold" style={{ fontFamily: "Creato Display" }}>
          KindWishper
        </div>

         
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

       
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg p-6 flex flex-col gap-6 mx-auto">
          <p className="cursor-pointer">Features</p>
          <p className="cursor-pointer">How it Works</p>
          <p className="cursor-pointer">Communities</p>
          <p className="cursor-pointer">FAQs</p>
          <button
            className="bg-[#C2FF40] text-black py-2 px-6 rounded-full font-bold mt-2"
            style={{ fontFamily: "Creato Display" }}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
