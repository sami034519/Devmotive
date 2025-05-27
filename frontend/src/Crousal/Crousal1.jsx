import React, { useEffect, useState } from "react";
import crousal1 from "../images/crousal1.jpg";
import "animate.css";

function Crousal1({ active }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (active) {
      // Reset animation first
      setAnimate(false);

      // Trigger it again after a small delay
      const timeout = setTimeout(() => setAnimate(true), 50);

      // Cleanup on unmount or prop change
      return () => clearTimeout(timeout);
    }
  }, [active]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden z-30">
      {/* Background Image */}
      <img
        loading="lazy"
        src={crousal1}
        alt="Background"
        className="w-full h-[200px] lg:h-[80vh] object-cover"
      />

      {/* Overlay Div */}
      <div
        className={`absolute lg:w-[60%] w-[70%] top-0 left-0 h-[200px] lg:h-[80vh] bg-red-600 bg-opacity-80 transition-all duration-1000 ${
          animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
        }`}
        style={{
          clipPath: "ellipse(80% 100% at 0% 50%)",
        }}
      ></div>

      {/* Text Content */}
      <div
        className={`absolute top-28 lg:top-[200px] left-10 transform -translate-y-1/2 text-white transition-all duration-1000 ${
          animate ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <h1
          className={`lg:text-[80px] text-xl font-semibold lg:mt-28 ${
            animate
              ? "animate__animated animate__fadeInDownBig animate__delay-1s"
              : ""
          }`}
        >
          Welcome To
        </h1>
        <h1
          className={`lg:text-[60px] text-2xl font-extrabold lg:font-bold mb-2 lg:mb-10 lg:mt-24 text-black ${
            animate
              ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
              : ""
          }`}
        >
          DevMotive
        </h1>
        <p
          className={`lg:text-lg text-xs w-[40%] ${
            animate
              ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
              : ""
          }`}
        >
          At DevMotives, we are driven by a passion for building innovative,
          reliable, and scalable software solutions that empower businesses to
          thrive in the digital era.
        </p>
      </div>
    </div>
  );
}

export default Crousal1;
