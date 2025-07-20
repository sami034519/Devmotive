import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/singlelogof-.png";
import axios from "axios";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import Contactimg from "../images/Contactus.jpg";
import { FaTwitter } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("https://devmotive-backend.vercel.app/api/order", formData); // Use your backend URL
      setStatus("Message sent successfully!");
      alert("Message sent successfully!")
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      
      setStatus("Failed to send message.");
      
    }
  };


  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false, // 👈 important: animate every time the element enters the viewport
      mirror: true, // 👈 animate out while scrolling up (optional)
    });
  }, []);
  return (
    <>
<div className="relative z-30 bg-gradient-to-r from-white to-slate-300 w-full px-4 py-10 overflow-hidden">
      {/* Heading */}
      <div className="w-full flex justify-center pb-10">
        <h1
          className="text-4xl font-medium text-center text-gray-800"
          data-aos="fade-down"
        >
          FEEL <span className="text-red-600">FREE TO </span>CONTACT
        </h1>
      </div>

      {/* Contact Area */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-screen-xl mx-auto">
        {/* Image with Social Overlay */}
        <div className="relative group w-full max-w-lg">
          <img
            loading="lazy"
            data-aos="fade-up"
            src={Contactimg}
            alt="Contact"
            className="w-full rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="text-white text-2xl hover:text-blue-500 transition" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-white text-2xl hover:text-blue-500 transition" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-white text-2xl hover:text-sky-500 transition" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-white text-2xl hover:text-red-500 transition" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-xl px-2" data-aos="fade-up">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Name & Email */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              />
            </div>

            {/* Subject */}
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="5"
              className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 rounded resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 font-semibold rounded hover:bg-red-700 transition"
            >
              SUBMIT
            </button>

            {/* Status */}
            {status && <p className="text-center font-medium text-green-700 mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>



      {/* footer area */}
     <div className="relative bg-slate-700 text-white w-full px-4 py-10">
  {/* Main Footer Content */}
  <div className="flex flex-col lg:flex-row justify-between items-center gap-10 max-w-screen-xl mx-auto pb-10">
    
    {/* Left Links */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-medium">
      <Link to="/ourmission" className="hover:border-b-2 border-white transition">ABOUT</Link>
      <Link to="" className="hover:border-b-2 border-white transition">PORTFOLIO</Link>
      <Link to="" className="hover:border-b-2 border-white transition">SERVICES</Link>
    </div>

    {/* Center Logo and Address */}
    <div className="text-center max-w-md">
      <Link to="/">
        <img className="h-24 mx-auto mb-4" src={logo} alt="DevMotive Logo" loading="lazy"/>
      </Link>
      <p>© 2025 DEVMOTIVE. All Rights Reserved.</p>
      <p>123 Baker Street, London W1U 6RS, United Kingdom</p>
    </div>

    {/* Right Links */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-medium">
      <Link to="" className="hover:border-b-2 border-white transition">TEAMS</Link>
      <Link to="/contactpage" className="hover:border-b-2 border-white transition">CONTACT US</Link>
      <Link to="" className="hover:border-b-2 border-white transition">HOME</Link>
    </div>
  </div>

  {/* Divider */}
  <div className="border-b border-white w-full max-w-screen-xl mx-auto mb-10"></div>

  {/* Social Icons Grid */}
  <div className="flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-md text-xl">
      {[
        {
          name: "Facebook",
          icon: <FaFacebookF />,
          url: "https://facebook.com",
          color: "hover:text-blue-600",
        },
        {
          name: "Instagram",
          icon: <FaInstagram />,
          url: "https://instagram.com",
          color: "hover:text-pink-500",
        },
        {
          name: "YouTube",
          icon: <FaYoutube />,
          url: "https://youtube.com",
          color: "hover:text-red-600",
        },
        {
          name: "TikTok",
          icon: <SiTiktok />,
          url: "https://tiktok.com",
          color: "hover:text-black",
        },
        {
          name: "LinkedIn",
          icon: <FaLinkedinIn />,
          url: "https://linkedin.com",
          color: "hover:text-blue-700",
        },
        {
          name: "Behance",
          icon: <FaBehance />,
          url: "https://behance.net",
          color: "hover:text-blue-500",
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-between gap-4 border border-white rounded-md p-3 transition duration-300 ${item.color}`}
        >
          <span className="text-base">{item.name}</span>
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
