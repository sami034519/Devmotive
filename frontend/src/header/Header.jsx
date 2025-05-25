import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaCode,
  FaUserTie,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/devmotivelogoupdate.png";

function Header() {
 
useEffect(() => {
  const handleScroll = () => {
    const topbar = document.getElementById("topbar");
    if (!topbar) return;

    if (window.scrollY > 50) {
      topbar.style.display = "none";
    } else {
      topbar.style.display = "flex";
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up the event listener on component unmount
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "BLOGS", path: "/blogs" },
    { name: "TEAMS", path: "/teams" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const servicesSubmenu = [
    {
      name: "Software Development",
      path: "/services/software-development",
      icon: <FaCode />,
    },
    {
      name: "Cybersecurity Solutions",
      path: "/services/cybersecurity",
      icon: <FaShieldAlt />,
    },
    {
      name: "Cloud & DevOps",
      path: "/services/cloud-devops",
      icon: <FaCloud />,
    },
    {
      name: "Finance & Accounting Services",
      path: "/services/finance-accounting",
      icon: <FaChartLine />,
    },
    {
      name: "IT Consulting",
      path: "/services/it-consulting",
      icon: <FaUserTie />,
    },
  ];

  const linkStyle =
    "text-gray-700 font-medium px-3 py-2 transition-all duration-200";
  const activeStyle = "text-red-600 border-b-2 border-red-600";

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50">
      {/* === Top Bar === */}
      <div id="topbar" className=" bg-gray-800 text-white text-sm px-4 flex justify-between lg:justify-around items-center py-2 z-40">
        {/* Left Side */}
        <div className="lg:flex hidden items-center space-x-4">
          <div className="flex items-center gap-1 border-r-2 border-white pr-3">
            <FaPhoneAlt className="text-green-400" />
            <span>+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-1 border-r-2 border-white pr-3">
            <FaWhatsapp className="text-green-500" />
            <span>+1 987 654 321</span>
          </div>
          <div className="flex items-center gap-1 pr-3">
            <MdEmail className="text-red-400" />
            <span>example@gmail.com</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-500 border-2 hover:rounded-full text-base border-white p-1 rounded-lg">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-400 border-2 hover:rounded-full border-white p-1 text-base rounded-lg">
            <FaTwitter />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="hover:bg-red-500 border-2 hover:rounded-full border-white p-1 text-base rounded-lg">
            <FcGoogle />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:bg-blue-600 border-2 hover:rounded-full border-white p-1 text-base rounded-lg">
            <FaLinkedinIn />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:bg-green-500 hover:rounded-full border-2 border-white p-1 text-base rounded-lg">
            <FaWhatsapp />
          </a>
          <button className=" lg:font-medium text-white lg:text-[13px] leading-[36px] bg-red-600 px-3 py-1  hover:bg-green-600 rounded-lg">
             Free Quote
          </button>
        </div>
      </div>

      {/* === Menu Bar === */}
      <div className="bg-white shadow-md z-40 relative ">
        <div className="flex lg:justify-around justify-between items-center px-4 lg:px-16 py-4">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 lg:h-14" loading="lazy"/>
          </Link>

          {/* Mobile Toggle Button */}
          <button onClick={toggleMenu} className="lg:hidden text-2xl">
            <FaBars />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 items-center relative">
            {navItems.map((item) =>
              item.name === "SERVICES" ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShowServicesMenu(true)}
                  onMouseLeave={() => setShowServicesMenu(false)}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${linkStyle} ${
                        isActive
                          ? activeStyle
                          : "hover:text-red-600 hover:border-b-2 hover:border-red-600"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>

                  {/* Submenu Dropdown */}
                 {showServicesMenu && (
  <div className="absolute top-full left-0 bg-white shadow-lg border mt-2 rounded z-50 w-[40rem] grid grid-cols-2 gap-2 p-4">
    {servicesSubmenu.map((service, index) => (
      <Link
        key={index}
        to={service.path}
        className="group flex items-center px-4 py-2 rounded text-lg text-gray-800 hover:bg-red-600 hover:text-white transition"
      >
        <span className="mr-2 text-red-600 group-hover:text-white">{service.icon}</span>
        {service.name}
      </Link>
    ))}
  </div>
)}
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `${linkStyle} ${
                      isActive
                        ? activeStyle
                        : "hover:text-red-600 hover:border-b-2 hover:border-red-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-96" : "max-h-0"
          } bg-white`}
        >
          <div className="flex flex-col px-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `${linkStyle} ${
                    isActive
                      ? activeStyle
                      : "hover:text-red-600 hover:border-b-2 hover:border-red-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
    
  );
}

export default Header;
