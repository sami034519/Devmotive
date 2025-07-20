import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import web1 from "../../images/web1.jpg";
import web2 from "../../images/web2.png";
import web3 from "../../images/web3.jpg";
import Technologies from "../Technologies/Technologies";
import {
  FaRocket,
  FaMobileAlt,
  FaLock,
  FaChartLine,
  FaCogs,
  FaUserFriends,
} from "react-icons/fa";
import Reviews from "../Reviews/Review";

function Webdevelopment() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: false, // whether animation should happen only once
      easing: "ease-out", // easing option
    });
  }, []);
  return (
    <>
      <div className="text-gray-600 lg:pt-10">
        <div className="w-full flex justify-start items-center lg:pl-28 overflow-hidden ">
          <h1 className="lg:text-3xl font-medium w-full" data-aos="fade-right">
            WEBSITE <span className="text-red-600">DEVELOPMENT</span> BY
            DEVMOTIVE
          </h1>
        </div>
        <div className="w-full flex justify-start items-center py-3 lg:py-6 lg:pl-28 overflow-hidden ">
          <p
            className="lg:max-w-[80%] lg:text-base text-sm text-start leading-5"
            data-aos="fade-left"
          >
            At DevMotive, we craft high-performance websites tailored to your
            brand and business goals. Whether you need a sleek landing page, a
            dynamic business website, or a complex web portal, our expert team
            delivers responsive, fast, and secure solutions using the latest
            technologies. We focus on clean design, user-friendly interfaces,
            and SEO optimization to ensure your website not only looks great—but
            performs even better.Whether you're a startup looking for a sleek
            landing page, an established business in need of a powerful company
            site, or an enterprise requiring a custom web portal—we’ve got you
            covered.
          </p>
        </div>

        <div className="w-full flex justify-start items-center lg:pl-28 overflow-hidden ">
          <h1 className="lg:text-3xl font-medium" data-aos="fade-right">
            OUR <span className="text-red-600">EXPERTIES</span> IN WEB
            DEVELOPMENT
          </h1>
        </div>
        <div className="w-full flex justify-start items-center py-3 lg:py-6 lg:pl-28 overflow-hidden ">
          <p
            className="lg:max-w-[80%] text-start leading-5 lg:text-base text-sm"
            data-aos="fade-left"
          >
            At DevMotive, we pride ourselves on delivering cutting-edge web
            development solutions that transform ideas into impactful digital
            realities. Our team of skilled developers and designers leverage the
            latest technologies and industry best practices to create websites
            that are not only visually stunning but also highly functional and
            scalable. Whether it’s building a simple business site or a complex
            web application, we bring precision, creativity, and technical
            excellence to every project. We specialize in crafting responsive
            and user-centric designs that ensure seamless experiences across all
            devices. Understanding the importance of speed, security, and SEO,
            we optimize every aspect of your website to help you reach and
            engage your target audience effectively. Our expertise includes
            front-end frameworks like React and Vue, back-end technologies such
            as Node.js and Python, and integrating powerful content management
            systems and APIs tailored to your specific needs.
          </p>
        </div>
        {/* web card */}
        <div className="flex lg:flex-row flex-col justify-around items-center lg:gap-x-16 lg:pl-14">
          <div className="flex lg:w-auto w-full justify-center items-center gap-4 lg:gap-10 lg:p-10">
            <div className="flex flex-col gap-5 lg:gap-10">
              <div
                data-aos="fade-up"
                className="lg:w-64 lg:h-64 h-36 w-36 overflow-hidden flex items-end"
              >
                <img
                  src={web1}
                  alt=""
                  className="object-cover w-full h-full rounded-lg shadow"
                />
              </div>

              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="lg:w-64 lg:h-64 h-36 w-36  overflow-hidden flex items-end"
              >
                <img
                  src={web2}
                  alt=""
                  className="object-cover w-full h-full rounded-lg shadow"
                />
              </div>
            </div>

            <div>
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                className="lg:w-64 lg:h-64  h-36 w-36 overflow-hidden flex items-end"
              >
                <img
                  src={web3}
                  alt=""
                  className="object-cover w-full h-full rounded-lg shadow "
                />
              </div>
            </div>
          </div>
          <div>
            <div className="overflow-hidden ">
              <h1
                className="lg:text-3xl font-medium text-start lg:mt-0 mt-5"
                data-aos="fade-left"
              >
                CRAFTING <span className="text-red-600">SMART WEB</span>{" "}
                SOLUTIONS
              </h1>
            </div>
            <div className="overflow-hidden ">
              <p className="lg:max-w-[80%] py-2 lg:py-5" data-aos="fade-left">
                At DevMotive, Crafting Smart Web Solutions means building
                websites that do more than just look good—they solve real
                business problems with intelligence and efficiency. We combine
                thoughtful design, user-centered functionality, and powerful
                technologies to develop websites that are responsive, scalable,
                and easy to manageCustom features tailored to your business
                needs Optimized performance for speed and user experience
                Seamless integrations with APIs, databases, and tools Scalable
                architecture to grow with your company Data-driven insights for
                ongoing improvements.
              </p>
            </div>
            <div className="pb-4">
              {" "}
              <button
                className="font-medium text-white text-sm lg:text-[16px] leading-[36px] bg-red-600 py-1 px-3  hover:bg-green-600 rounded"
                data-aos="flip-up"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* web benifits */}
        <div className="lg:h-48"></div>
        <div className="relative bg-slate-700 py-44 overflow-visible lg:block hidden">
          {/* Top 3 Cards - Floating Up */}
          <div className="absolute top-2  lg:-top-32 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 grid md:grid-cols-3 gap-8">
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-up"
            >
              <FaRocket className="text-4xl text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-lg text-gray-700">
                We develop high-speed websites optimized for responsiveness and
                fast loading. Speed matters — both for users and SEO.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="zoom-in"
            >
              <FaMobileAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Mobile First Design
              </h3>
              <p className="text-lg text-gray-700">
                Our sites are crafted to deliver flawless experiences on mobile,
                tablet, and desktop — ensuring reach and usability.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="flip-left"
            >
              <FaLock className="text-4xl text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Secure by Design</h3>
              <p className="text-lg text-gray-700">
                With security built from the ground up, your site is protected
                from vulnerabilities and threats right out of the box.
              </p>
            </div>
          </div>

          {/* Bottom 3 Cards - Floating Down */}
          <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 grid md:grid-cols-3 gap-8">
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-right"
            >
              <FaChartLine className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">SEO Optimized</h3>
              <p className="text-lg text-gray-700">
                Search engine friendly for better visibility and ranking.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-up"
            >
              <FaCogs className="text-4xl text-yellow-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Custom Functionality
              </h3>
              <p className="text-lg text-gray-700">
                From booking systems to analytics dashboards, we develop
                tailor-made tools that serve your unique business needs.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-left"
            >
              <FaUserFriends className="text-4xl text-pink-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Reliable Support</h3>
              <p className="text-lg text-gray-700">
                We provide ongoing maintenance, enhancements, and support to
                ensure your site grows alongside your business.
              </p>
            </div>
          </div>

          {/* Center Message */}
          <div className="text-center text-white max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">KEY BENIFITS</h2>
          </div>
        </div>
        <div className="bg-slate-700 py-20 px-4 overflow-hidden lg:hidden block">
          {/* Section Heading */}
          <div className="text-center text-white max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">KEY BENEFITS</h2>
          </div>

          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-up"
            >
              <FaRocket className="text-4xl text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-lg text-gray-700">
                We develop high-speed websites optimized for responsiveness and
                fast loading. Speed matters — both for users and SEO.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="zoom-in"
            >
              <FaMobileAlt className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Mobile First Design
              </h3>
              <p className="text-lg text-gray-700">
                Our sites are crafted to deliver flawless experiences on mobile,
                tablet, and desktop — ensuring reach and usability.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="flip-left"
            >
              <FaLock className="text-4xl text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Secure by Design</h3>
              <p className="text-lg text-gray-700">
                With security built from the ground up, your site is protected
                from vulnerabilities and threats right out of the box.
              </p>
            </div>
          </div>

          {/* Bottom 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-right"
            >
              <FaChartLine className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">SEO Optimized</h3>
              <p className="text-lg text-gray-700">
                Search engine friendly for better visibility and ranking.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-up"
            >
              <FaCogs className="text-4xl text-yellow-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Custom Functionality
              </h3>
              <p className="text-lg text-gray-700">
                From booking systems to analytics dashboards, we develop
                tailor-made tools that serve your unique business needs.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-left"
            >
              <FaUserFriends className="text-4xl text-pink-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Reliable Support</h3>
              <p className="text-lg text-gray-700">
                We provide ongoing maintenance, enhancements, and support to
                ensure your site grows alongside your business.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:h-40"></div>

        {/* technologies section */}
    
      </div>
        <Technologies/>
        <Reviews />
    </>
  );
}

export default Webdevelopment;
