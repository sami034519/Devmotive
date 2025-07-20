import React, { useEffect } from "react";
import background from "../../images/bg5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import businnesDigitation from "../../images/business-process-digitization.jpg";
import financeadice from "../../images/advice.jpg"
import Automation from "../../images/automation.gif";
import Strategy from "../../images/strategy.gif";

import ReviewsSlider from "../Reviews/Review";

function ITConsulting() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div className="relative w-full lg:h-[80vh] h-[300px] overflow-hidden mt-20">
        <img
          loading="lazy"
          src={background}
          alt="IT Consulting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex lg:max-w-full max-w-60 flex-col items-start justify-center px-1 lg:px-16">
          <h1 className="text-red-600 text-3xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
            IT Consulting
          </h1>
          <h2 className="text-xl lg:text-4xl font-semibold mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
            Innovation Strategy Execution.
          </h2>
          <p className="hidden lg:block text-sm lg:text-lg lg:max-w-xl max-w-64 mt-3 animate__animated animate__fadeInLeft animate__delay-2s">
            Unlock business transformation with our digital strategy, agile delivery, and technical consulting solutions.
          </p>
          <div className="bg-red-700 lg:w-56 w-28 lg:h-[52px] flex flex-col justify-end mt-5 lg:mt-20 rounded animate__animated animate__backInUp animate__delay-2s pt-1">
            <button className="bg-red-600 text-white lg:text-2xl lg:px-6 py-1 lg:py-2 w-full lg:h-12 rounded">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center text-xl lg:text-auto text-center lg:text-2xl py-5 lg:pt-20 font-medium text-gray-700 overflow-hidden">
        <h1 data-aos="fade-right">
          DevMotive’s <span className="text-red-600">IT Consulting</span> Services
        </h1>
      </div>

      <div className="lg:pl-36 pl-3 lg:max-w-[90%] overflow-hidden">
        <div className="w-full flex justify-center py-3 text-gray-500 text-start">
          <p data-aos="fade-left">
            Our IT consulting experts support your business in streamlining operations and driving digital growth with confidence.
          </p>
        </div>

        <div className="w-full flex justify-start items-center text-2xl py-5 font-medium text-gray-700">
          <h1 data-aos="fade-right">Our Core Services</h1>
        </div>
      </div>

      {/* Business Process Digitalization */}
      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            BUSINESS PROCESS DIGITALIZATION
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Digitize your business workflows to boost efficiency, reduce costs, and improve agility with custom automation and system integration.
          </p>
        </div>
        <div>
          <img className="max-w-60" data-aos="zoom-in-up" src={businnesDigitation} alt="Business Digitalization" />
        </div>
      </div>

      {/* Tech & Finance Advisory */}
      <div className="p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img className="max-w-60" src={financeadice} data-aos="zoom-in-up" alt="Finance Advisory" />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            TECH & FINANCE ADVISORY FOR SMEs
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Get expert advice tailored for small and medium businesses on integrating technology with sound financial planning.
          </p>
        </div>
      </div>

      {/* Agile & Project Management Coaching */}
      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            AGILE & PROJECT MANAGEMENT COACHING
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Train your teams in Agile, Scrum, and project management practices to enhance delivery speed and product quality.
          </p>
        </div>
        <div>
          <img className="max-w-56" data-aos="zoom-in-up" src={Strategy} alt="Agile Coaching" />
        </div>
      </div>

      {/* Digital Transformation Strategy */}
      <div className="p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img className="max-w-56" src={Automation} data-aos="zoom-in-up" alt="Tech Strategy" />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            DIGITAL TRANSFORMATION STRATEGY
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Build a strategic roadmap for digital innovation. Our consultants help align technology with business goals for measurable growth.
          </p>
        </div>
      </div>

      <ReviewsSlider />
    </>
  );
}

export default ITConsulting;
