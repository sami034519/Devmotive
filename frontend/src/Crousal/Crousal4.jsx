import { useState, useEffect } from "react";
import React from "react";
import background from "../images/bg5.png";
import "animate.css";

function Crousal4({ active }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (active) {
      setAnimate(false); // Reset animation
      const timeout = setTimeout(() => setAnimate(true), 50); // Trigger animation
      return () => clearTimeout(timeout); // Clean up on unmount or prop change
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
        {/* Text Content */}
        <div
          className={`text-left max-w-xl transition-all duration-700 ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className={`lg:text-[70px] text-[25px] font-semibold text-red-600 whitespace-nowrap ${
            animate ? "animate__animated animate__fadeInDownBig" : ""
          }`}>
            Search Engine
          </h1>

          <h1 className={`lg:text-[60px] lg:mt-14 lg:mb-7 text-2xl font-semibold text-black whitespace-nowrap ${
            animate ? "animate__animated animate__lightSpeedInLeft animate__delay-1s" : ""
          }`}>
            Optimization
          </h1>

          <p className={`lg:text-lg lg:w-[500px] text-xs text-black w-56 ${
            animate ? "animate__animated animate__lightSpeedInLeft animate__delay-2s" : ""
          }`}>
            At DevMotives, our SEO services are designed to put your brand in front of the right audience at the right time.
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

export default Crousal4;
