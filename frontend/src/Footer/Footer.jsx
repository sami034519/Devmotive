import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/singlelogof-.png";
import { FaFacebookF, FaInstagram, FaYoutube,  FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
function Footer() {
  return (
    <>
      <div className=" relative z-30 bg-gradient-to-r from-white to-slate-200  w-full">
        <div className="flex justify-center pt-8">
          <p
            className="lg:max-w-[65%] text-center px-2 "
            style={{
              fontFamily: "Poppins, sans-serif",
              wordSpacing: "-3px",
              fontStyle: "normal",
              color: "rgb(45, 57, 88)",
              fontSize: "40px",
              lineHeight: "45px",
              fontWeight: "700",
            }}
          >
            We've helped brands of all kinds and businesses of every size to
            grow their online revenue
          </p>
        </div>
        <div className="flex justify-center pt-8">
          <p className="text-2xl font-medium  lg:max-w-[60%] text-center text-gray-800 px-2">
            Are you ready to start your project? Contact us today and get
            started!
          </p>
        </div>
        <div className="w-full flex justify-center items-start pt-10 pb-14">
          <div className="bg-red-700 pt-1" data-aos="flip-left">
            <button className="bg-red-600 text-white font-medium text-xl px-6 py-2  lg:px-10 lg:py-3">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
      <div className="relative bg-slate-700 pb-16 py-6 w-full text-white ">
        <div className="flex lg:flex-row flex-col justify-around items-center pt-10 gap-4 ">
          <div className="flex justify-around gap-x-10 font-medium">
            <Link to="" className="hover:border-b-2 ">ABOUT</Link>
            <Link to="" className="hover:border-b-2 ">PORTFOLIO</Link>
            <Link to="" className="hover:border-b-2 ">SERVICES</Link>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Link to="/">
              <img className="h-32" src={logo} alt="" />
            </Link>
            <p className="text-center">© 2025 DEVMOTIVE. All Rights Reserved.</p>
            <p className="text-center">123 Baker Street London W1U 6RS United Kingdom London W1U 6RS</p>
          </div>
          <div className="flex justify-around gap-x-10 font-medium">
            <Link to="" className="hover:border-b-2 ">TEAMS </Link>
            <Link to="" className="hover:border-b-2 ">CONTACT US</Link>
            <Link to="" className="hover:border-b-2 ">HOME</Link>
          </div>
        </div>
        <div className="flex justify-center w-screen h-2 pt-16"><div className="border-b-2 bg-white w-[80%]"></div></div>
         <div className="flex justify-center w-full pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[70%] text-white text-xl">
        {[
          { name: 'Facebook', icon: <FaFacebookF />, url: 'https://facebook.com', color: 'hover:text-blue-600' },
          { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com', color: 'hover:text-pink-500' },
          { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com', color: 'hover:text-red-600' },
          { name: 'TikTok', icon: <SiTiktok />, url: 'https://tiktok.com', color: 'hover:text-black' },
          { name: 'LinkedIn', icon: <FaLinkedinIn />, url: 'https://linkedin.com', color: 'hover:text-blue-700' },
          { name: 'Behance', icon: <FaBehance />, url: 'https://behance.net', color: 'hover:text-blue-500' },
        ].map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-between gap-4 border border-white rounded-md p-3 transition duration-300 ${item.color}`}
          >
            <span className="text-white text-base">{item.name}</span>
            <span className="text-2xl">{item.icon}</span>
          </a>
        ))}
      </div>
    </div>
      </div>
    </>
  );
}

export default Footer;
