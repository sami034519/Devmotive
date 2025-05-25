import React from "react";
import { useState } from "react";
import background from "../images/bg5.png";
import "animate.css";
import Webdevelopment from "./Webdevelopment";
import Appdevelopment from "./Appdevelopment";
import { FaGlobe, FaMobileAlt } from "react-icons/fa";
function SimpleSoftwareBanner() {
  const [activeComponent, setActiveComponent] = useState("website");
  return (
    <>
    {/* herosection */}
    <div className="relative w-full lg:h-[80vh] h-[300px] overflow-hidden mt-20">
      {/* Background Image */}
      <img
        loading="lazy"
        src={background}
        alt="Software Development"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-1 lg:px-16">
        <h1 className="text-red-600 text-3xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
          Software Development
        </h1>

        <h2 className=" text-xl lg:text-4xl font-semibold mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
          Responsive and Reliable
        </h2>

        <p className=" text-sm lg:text-lg lg:max-w-xl max-w-64 mt-3 animate__animated animate__fadeInLeft animate__delay-2s">
          At DevMotives, we craft user-friendly, scalable software to help your business grow.
        </p>

        <button className="mt-5 px-6 py-2 bg-red-600 text-white  text-sm lg:text-lg animate__animated animate__fadeInUp animate__delay-3s rounded-lg">
          READ MORE
        </button>
      </div>
    </div>
     {/* buttons */}
      <div className="p-6  ">
      {/* Buttons */}
      <div className="flex gap-2 lg:gap-4 justify-center mb-8 ">
        <button
          onClick={() => setActiveComponent("website")}
          className={`flex items-center gap-x-2 px-1 py-3 lg:gap-2 lg:px-6 lg:text-lg text-xs lg:py-3 rounded-lg transition shadow-lg shadow-slate-400 hover:translate-y-3 hover:shadow-lg hover:shadow-red-500  ${
            activeComponent === "website"
              ? "bg-red-600 text-white"
              : "bg-white text-red-700 border-2 border-red-600"
          }`}
          
        >
          <FaGlobe /> Website Development
        </button>

        <button
          onClick={() => setActiveComponent("app")}
          className={`flex items-center gap-x-2 px-1 py-3 text-xs lg:gap-2 lg:px-6 lg:text-lg lg:py-3 rounded-lg transition shadow-lg shadow-slate-400 hover:translate-y-3 hover:shadow-lg hover:shadow-red-500   ${
            activeComponent === "app"
              ? "bg-red-600 text-white "
              : "bg-white text-red-600 border-2 border-red-600"
          }`}
          
        >
          <FaMobileAlt /> App Development
        </button>
        </div>

        <div className="w-full">
        {activeComponent === "website" && <Webdevelopment />}
        {activeComponent === "app" && <Appdevelopment />}
       
      </div>
</div>
    </>
  );
}

export default SimpleSoftwareBanner;
