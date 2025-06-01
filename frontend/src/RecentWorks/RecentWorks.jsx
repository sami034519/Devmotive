import React from "react";
import ecommerce from "../images/ecommerce.jpg";
import saas from "../images/Saasf.jpg";
import cybersecurity from "../images/cybersecurity.jpg";
import Business from "../images/business.jpg";
import Cloud from "../images/cloud.jpg";
import mobile from "../images/mob2.png";

function RecentWorks() {
  return (
    <>
      <div className="bg-black bg-opacity-70 relative z-30 w-full flex justify-center items-center h-16 lg:h-24">
        <h1
          data-aos="fade-up"
          className="text-white font-medium lg:text-4xl text-2xl"
        >
          OUR RECENT PROJECTS
        </h1>
      </div>

      {/* Recent works */}
     <div className="bg-white relative z-30">
  <div
    className="flex justify-center items-center p-8 text-gray-700"
    data-aos="fade-up"
    data-aos-duration="800"
  >
    <p>
      You can review some of the projects that were successfully
      implemented by <strong>DEVMOTIVE</strong>.
    </p>
  </div>

  <div className="bg-white relative z-30 grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center items-center px-3 lg:px-40 py-14">
    {/* Project 1 */}
    <div
      className="relative lg:w-96 w-72 h-72 overflow-hidden rounded-lg cursor-pointer group"
      data-aos="flip-left"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <img
        loading="lazy"
        src={ecommerce}
        alt="E-Commerce Project"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">
          E-Commerce Platform for RetailTech
        </p>
      </div>
    </div>

    {/* Project 2 */}
    <div
      className="relative lg:w-96 w-72 h-72 overflow-hidden rounded-lg cursor-pointer group"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="1000"
    >
      <img
        loading="lazy"
        src={saas}
        alt="SaaS Project"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">
          SaaS Solution for FinServe Group
        </p>
      </div>
    </div>

    {/* Project 3 */}
    <div
      className="relative lg:w-96 w-72 h-72 overflow-hidden rounded-lg cursor-pointer group"
      data-aos="flip-right"
      data-aos-delay="300"
      data-aos-duration="1000"
    >
      <img
        loading="lazy"
        src={cybersecurity}
        alt="Cybersecurity Project"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">
          Cybersecurity Enhancement
        </p>
      </div>
    </div>

    {/* Project 4 */}
    <div
      className="relative lg:w-96 w-72 h-72 overflow-hidden rounded-lg cursor-pointer group"
      data-aos="fade-up"
      data-aos-delay="400"
      data-aos-duration="1000"
    >
      <img
        loading="lazy"
        src={Business}
        alt="Business Digitalization"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">
          Business Process Digitalization
        </p>
      </div>
    </div>

    {/* Project 5 */}
    <div
      className="relative lg:w-96 w-72 h-72 overflow-hidden rounded-lg cursor-pointer group"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-duration="1000"
    >
      <img
        loading="lazy"
        src={Cloud}
        alt="Cloud Migration"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">
          Cloud Migration Advisors
        </p>
      </div>
    </div>

    {/* Project 6 */}
    <div
      className="relative lg:w-96 w-72 h-72 overflow-hidden bg-blue-600 rounded-lg cursor-pointer group"
      data-aos="zoom-in-up"
      data-aos-delay="600"
      data-aos-duration="1000"
    >
      <img
        loading="lazy"
        src={mobile}
        alt="Mobile App Project"
        className="w-72 h-full object-cover transition-transform duration-300 group-hover:scale-125"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-xl font-bold">
          Mobile App Development for AgriTech
        </p>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default RecentWorks;
