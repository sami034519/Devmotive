import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import webimg from "../../images/web-development.jpg";
import mobile from "../../images/mobile-app-dev-min.jpg";
import devops from "../../images/devops-cover1-min.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import SAAS from "../../images/ai-cover-min.jpg";
import account from "../../images/account.jpg";
import security from "../../images/security.jpg";
import salarysheet from "../../images/SALARYSHEET.jpg";
import consulting from "../../images/CONSULTING.jpg";

function Services() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <div className="bg-black bg-opacity-70 relative z-30 flex justify-center items-center h-16 lg:h-24">
        <h1
          data-aos="fade-up"
          className="text-white font-medium lg:text-4xl text-2xl"
        >
          OUR SERVICES
        </h1>
      </div>

      <div className="bg-white relative z-30 pt-10">
        {/* Services cards */}
        <div className="grid lg:grid-cols-3 grid-cols-1 justify-items-center gap-x-4 lg:pt-20 lg:px-56 gap-y-5">
          {[
            {
              img: webimg,
              title: "WEB DEVELOPMENT",
              path: "/services/software-development",
            },
            {
              img: mobile,
              title: "MOBILE APP DEVELOPMENT",
              path: "/services/software-development",
            },
            {
              img: SAAS,
              title: "SAAS APPLICATION DEVELOPMENT",
              path: "/services/software-development",
            },
            {
              img: security,
              title: "CYBER SECURITY SOLUTIONS",
              path: "/services/cybersecurity",
            },
            {
              img: webimg,
              title: "NETWORK SECURITY",
              path: "/services/cybersecurity",
            },
            {
              img: account,
              title: "FINANCE AND ACCOUNTING",
              path: "/services/finance-accounting-services",
            },
            {
              img: devops,
              title: "CLOUD AND DEVOPS",
              path: "/services/cloud-devops",
            },
            {
              img: salarysheet,
              title: "MONTHLY SALARY SHEET",
              path: "/services/finance-accounting-services",
            },
            {
              img: consulting,
              title: "IT CONSULTING",
              path: "/services/it-consulting",
            },
          ].map((card, i) => (
            <Link
              key={i}
              to={card.path}
              className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                         rounded-tl-3xl rounded-br-3xl overflow-hidden lg:w-auto w-80 transition-all duration-300 
                         shadow-red-100 hover:shadow-red-600 hover:shadow-lg hover:bg-red-50 no-underline text-black"
              data-aos="fade-up"
            >
              <div>
                <img
                  loading="lazy"
                  className="h-64 rounded-tl-3xl"
                  src={card.img}
                  alt={card.title}
                />
              </div>
              <div>
                <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                  {card.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>

        {/* service button */}
        <div className="w-full flex justify-center items-start pt-10 pb-14">
          <div
            className="bg-red-700 pt-1 hover:scale-110 transition-transform duration-300 rounded-lg"
            data-aos="flip-left"
          >
            <Link to="/services">
              <button className="bg-red-600 text-white font-medium text-xl px-6 py-2 lg:px-10 lg:py-3 rounded-lg">
                FIND MORE SERVICES
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
