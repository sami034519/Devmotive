import React from "react";
import background from "../images/bg5.png";
import "animate.css";

function SimpleSoftwareBanner() {
  return (
    <div className="relative w-full lg:h-[80vh] h-[300px] overflow-hidden">
      {/* Background Image */}
      <img
        loading="lazy"
        src={background}
        alt="Software Development"
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 lg:px-16">
        <h1 className="text-red-600 text-3xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
          Software Development
        </h1>

        <h2 className=" text-xl lg:text-4xl font-semibold mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
          Responsive and Reliable
        </h2>

        <p className=" text-sm lg:text-lg max-w-xl mt-3 animate__animated animate__fadeInLeft animate__delay-2s">
          At DevMotives, we craft user-friendly, scalable software to help your business grow.
        </p>

        <button className="mt-5 px-6 py-2 bg-red-600 text-white  text-sm lg:text-lg animate__animated animate__fadeInUp animate__delay-3s">
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default SimpleSoftwareBanner;
