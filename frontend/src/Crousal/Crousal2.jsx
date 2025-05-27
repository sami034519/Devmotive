import React, { useEffect, useState } from "react";
import background from "../images/bg6.png";
import mobile from "../images/mobile.png";
import "animate.css";

function Crousal2({ active }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (active) {
      setAnimate(false); // Reset
      const timeout = setTimeout(() => setAnimate(true), 50); // Trigger

      return () => clearTimeout(timeout); // Cleanup
    }
  }, [active]);

  return (
    <div className="relative lg:h-[80vh] w-full overflow-hidden z-30">
      {/* Background Image */}
      <img
        src={background}
        alt="Background"
        className="w-full h-[200px] lg:h-[80vh] object-cover"
        loading="lazy"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-around lg:px-12 px-1">
        {/* Left Text */}
        <div
          className={`text-white max-w-lg transition-all duration-1000 ease-out ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1
            className={`lg:text-[70px] text-xl font-semibold text-red-600 whitespace-nowrap ${
              animate
                ? "animate__animated animate__fadeInDownBig animate__delay-1s"
                : ""
            }`}
          >
            Mobile App Development
          </h1>

          <h1
            className={`lg:text-[60px] text-lg font-semibold text-black whitespace-nowrap lg:mt-28 lg:mb-10 mt-2 mb-2 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            We Build Outstanding Apps
          </h1>

          <p
            className={`lg:text-lg text-xs text-black ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
                : ""
            }`}
          >
            At DevMotives, we specialize in crafting powerful, intuitive, and
            user-centric mobile applications that bring your vision to life.
          </p>

          <div
            className={`bg-red-700 lg:w-56 w-28 lg:h-[52px] flex flex-col justify-end mt-5 lg:mt-20 rounded-lg ${
              animate
                ? "animate__animated animate__backInUp animate__delay-3s"
                : ""
            }`}
          >
            <button className="bg-red-600 text-white text-sm lg:text-2xl lg:px-6 py-1 lg:py-2 w-full lg:h-12 rounded-lg">
              READ MORE
            </button>
          </div>
        </div>

        {/* Right Mobile Image */}
        <img
          src={mobile}
          loading="lazy"
          alt="Mobile"
          className={`lg:h-[750px] h-52 transition-all duration-1000 ease-out ${
            animate
              ? "translate-y-0 opacity-100 animate__animated animate__backInUp"
              : "translate-y-20 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export default Crousal2;
