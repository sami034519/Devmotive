import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import circles from "../images/circles.svg";
import angular from "../images/angular.png";
import c1 from "../images/C-1.png";
import html from "../images/html (1).png";
import js from "../images/js.jpg";
import larval from "../images/laravel-.png";
import mysql from "../images/my-sql.png";
import php from "../images/PHP-logo.svg.png";
import python from "../images/python1.png";
import reactnative from "../images/react-native.png";
function Technologies() {
  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration (ms)
        once: false, // whether animation should happen only once
        easing: "ease-out", // easing option
      });
    }, []);
  return (
    <>
      <div className="flex lg:flex-row flex-col  gap-5 justify-around items-center w-full lg:py-24 text-gray-500 font-medium relative z-30 bg-white pl-2 pb-3">
        <div className="lg:max-w-[40%]">
          <div className="text-3xl font-bold lg:pb-10 pb-7 text-gray-600 pt-8" data-aos="fade-right">
            <span className="text-red-600">TECHNOLOGIES</span> WE ARE WORKING ON
          </div>
          <div className="text-xl font-medium lg:pt-5 lg:pb-2 text-gray-800" data-aos="fade-right">
            <h1>ADVANCED APPLICATION DEVELOPMENTS</h1>
          </div>
          <div className="text-sm" data-aos="fade-right">
            <p>
              Advanced Web Application Development refers to the process of
              building dynamic, feature-rich, and scalable web applications
              using modern tools, frameworks, and development practices. It goes
              beyond basic website creation and focuses on creating complex
              systems .
            </p>
          </div>
          <div className="text-xl font-medium pt-5 pb-2 text-gray-800" data-aos="fade-right">
            <h1>CONTENT MANAGEMENT SYSTEM</h1>
          </div>
          <div className="text-sm" data-aos="fade-right">
            <p>
              A Content Management System (CMS) is a software tool that enables
              individuals and organizations to create, manage, and modify
              website content without needing to write code. It provides a
              user-friendly interface where users can easily add or update text,
              images, videos, and documents. CMS platforms typically offer
              features like customizable themes.
            </p>
          </div>
          <div className="text-xl font-medium pt-5 pb-2 text-gray-800">
            <h1 data-aos="fade-right">SOLUTIONS</h1>
          </div>
          <div className="text-sm">
            <p data-aos="fade-right">
              Solutions in the context of web development refer to the tailored
              digital services or systems provided to meet specific business
              needs or solve challenges. .
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="lg:h-[650px] lg:w-[650px] w-[700px] " data-aos="zoom-in-up" src={circles} alt="" />
          <img className="lg:h-28 h-14 absolute top-[10%]" data-aos="zoom-in-up" src={angular} alt="" />
          <img className="lg:h-28 h-14 absolute top-[-7%] left-[40%]" data-aos="zoom-in-up" src={c1} alt="" />
          <img className="lg:h-28 h-14 absolute left-[50%] top-[20%]" data-aos="zoom-in-up" src={html} alt="" />
          <img className="lg:h-28 h-14 absolute right-[10%] top-[40%]" data-aos="zoom-in-up" src={js} alt="" />
          <img className="lg:h-28 h-14 absolute left-[30%] bottom-[45%]" data-aos="zoom-in-up" src={larval} alt="" />
          <img className="lg:h-28 h-14 absolute left-[5%] bottom-[30%]" data-aos="zoom-in-up" src={mysql} alt="" />
          <img className="lg:h-16 h-14 absolute bottom-[12%] left-[40%]" data-aos="zoom-in-up" src={php} alt="" />
          <img className="lg:h-28 h-14 absolute right-[5%] bottom-[10%]" data-aos="zoom-in-up" src={python} alt="" />
          <img className="lg:h-28 h-14 absolute left-[5%] bottom-[50%]" data-aos="zoom-in-up" src={reactnative} alt="" />
        </div>
      </div>
    </>
  );
}

export default Technologies;
