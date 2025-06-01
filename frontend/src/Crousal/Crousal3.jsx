import { useState, useEffect } from "react";
import React from "react";
import background from "../images/bg5.png";
import 'animate.css';

function Crousal3({ active }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (active) {
      setAnimate(false); // Reset animation state
      const timeout = setTimeout(() => setAnimate(true), 50); // Trigger animation after short delay

      return () => clearTimeout(timeout); // Clean up timer
    }
  }, [active]);

  return (
    <div className="relative lg:h-[80vh] w-full overflow-hidden z-30">
      {/* Background Image */}
      <img
      loading="lazy"
        src={background}
        alt="Background"
        className="w-full h-[200px] lg:h-[80vh] object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex justify-start items-center lg:px-12 px-1">
        {/* Left Side Text */}
        <div
          className={`text-left max-w-xl transition-all duration-700 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className={`lg:text-[70px] text-[25px] font-semibold text-red-600 whitespace-nowrap ${
            animate ? "animate__animated animate__fadeInDownBig" : ""
          }`}>
            Web Development
          </h1>

          <h1 className={`lg:text-[60px] lg:mt-16 lg:mb-10 text-xl font-semibold text-black whitespace-nowrap ${
            animate ? "animate__animated animate__lightSpeedInLeft animate__delay-1s" : ""
          }`}>
            Responsive AND Reliable
          </h1>

          <p className={`lg:text-lg text-xs lg:w-[500px] w-56 mt-2 text-black ${
            animate ? "animate__animated animate__lightSpeedInLeft animate__delay-2s" : ""
          }`}>
            At DevMotives, we specialize in crafting powerful, intuitive, and user-centric web applications <span className="lg:block hidden">that bring your vision to life.</span> 
          </p>

          {/* Button */}
          <div className={`bg-red-700 pt-1 lg:w-56 w-28 lg:h-[52px] flex flex-col justify-end mt-5 lg:mt-20 rounded-lg ${
            animate ? "animate__animated animate__backInUp animate__delay-3s" : ""
          }`}>
            <button className="bg-red-600 text-white lg:text-2xl lg:px-6 py-1 lg:py-2 w-full lg:h-12 rounded-lg">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crousal3;
