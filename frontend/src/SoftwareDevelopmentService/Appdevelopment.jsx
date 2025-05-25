import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import web1 from "../images/mob1.png";
import web2 from "../images/mob2.jpg";
import web3 from "../images/mob3.jpg";
import Technologies from "../Technologies/Technologies";
import {
  FaRocket,
  FaMobileAlt,
  FaCogs,
  FaShieldAlt,
  FaChartPie,
  FaHeadset,
} from "react-icons/fa";
import Reviews from "../Reviews/Review";

function Appdevelopment() {
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
            APP <span className="text-red-600">DEVELOPMENT</span> BY DEVMOTIVE
          </h1>
        </div>
        <div className="w-full flex justify-start items-center py-3 lg:py-6 lg:pl-28 overflow-hidden ">
          <p
            className="lg:max-w-[80%] text-start leading-5"
            data-aos="fade-left"
          >
            At DevMotive, we build high-performance mobile and web applications
            tailored to your brand and business goals. Whether you need a sleek
            startup app, a dynamic business application, or a complex
            enterprise-level platform, our expert team delivers responsive,
            fast, and secure solutions using the latest technologies. We focus
            on clean UI/UX design, seamless user experiences, and performance
            optimization to ensure your app not only looks great—but works
            flawlessly. Whether you're launching your first app or expanding
            your digital ecosystem, we’ve got you covered.
          </p>
        </div>

        <div className="w-full flex justify-start items-center lg:pl-28 overflow-hidden ">
          <h1 className="lg:text-3xl font-medium" data-aos="fade-right">
            OUR <span className="text-red-600">EXPERTIES</span> IN APP
            DEVELOPMENT
          </h1>
        </div>
        <div className="w-full flex justify-start items-center py-3 lg:py-6 lg:pl-28 overflow-hidden ">
          <p
            className="lg:max-w-[80%] text-start leading-5"
            data-aos="fade-left"
          >
            At DevMotive, we pride ourselves on delivering cutting-edge app
            development solutions that transform visionary ideas into powerful,
            user-friendly mobile and web applications. Our team of skilled
            developers and designers leverage the latest frameworks and best
            practices to build apps that are not only visually impressive but
            also robust, scalable, and performance-driven. Whether it's a sleek
            consumer-facing app or a complex enterprise platform, we approach
            every project with creativity, precision, and technical excellence.
            We specialize in designing intuitive user interfaces and seamless
            user experiences that work flawlessly across iOS, Android, and
            cross-platform environments. Recognizing the importance of speed,
            security, and maintainability, we optimize every aspect of your
            application to ensure it delivers value to your users and drives
            business growth. Our expertise spans technologies like React Native,
            Flutter, Swift, Kotlin, Node.js, Firebase, and secure API
            integrations—tailored to meet your unique business needs.
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
                ENGINEERING{" "}
                <span className="text-red-600">HIGH PERFORMANCE</span> APPS
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
                className="font-medium text-white text-sm lg:text-[16px] leading-[36px] bg-red-600 py-1 px-3  hover:bg-green-600 rounded-lg"
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
          <div className="absolute top-2 lg:-top-32 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 grid md:grid-cols-3 gap-8">
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-up"
            >
              <FaMobileAlt className="text-4xl text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Cross-Platform Ready
              </h3>
              <p className="text-lg text-gray-700">
                Build once, deploy everywhere. We develop apps that run smoothly
                across Android and iOS with a unified codebase.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="zoom-in"
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">High Performance</h3>
              <p className="text-lg text-gray-700">
                Our apps are optimized for speed and responsiveness to ensure
                seamless performance and fast loading times.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="flip-left"
            >
              <FaShieldAlt className="text-4xl text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Built-In Security</h3>
              <p className="text-lg text-gray-700">
                We embed security from the start — protecting user data and app
                functionality from the ground up.
              </p>
            </div>
          </div>

          {/* Bottom 3 Cards - Floating Down */}
          <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 grid md:grid-cols-3 gap-8">
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-right"
            >
              <FaChartPie className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Analytics Integration
              </h3>
              <p className="text-lg text-gray-700">
                Gain insights with real-time analytics integration to track
                performance, engagement, and growth.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-up"
            >
              <FaCogs className="text-4xl text-yellow-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Custom Features</h3>
              <p className="text-lg text-gray-700">
                From e-commerce to social features, we build custom
                functionality aligned with your business goals.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-left"
            >
              <FaHeadset className="text-4xl text-pink-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Post-Launch Support
              </h3>
              <p className="text-lg text-gray-700">
                We offer continuous support, updates, and performance monitoring
                to keep your app running at its best.
              </p>
            </div>
          </div>

          {/* Center Message */}
          <div className="text-center text-white max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">KEY BENEFITS</h2>
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
              <FaMobileAlt className="text-4xl text-red-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Cross-Platform Ready
              </h3>
              <p className="text-lg text-gray-700">
                We build apps that work seamlessly across Android and iOS with a
                single codebase for faster delivery.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="zoom-in"
            >
              <FaRocket className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">High Performance</h3>
              <p className="text-lg text-gray-700">
                Our apps are designed for speed and optimized performance,
                ensuring smooth and fast user experiences.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="flip-left"
            >
              <FaShieldAlt className="text-4xl text-green-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Built-In Security</h3>
              <p className="text-lg text-gray-700">
                Security-first approach ensures user data and app operations
                stay protected from vulnerabilities.
              </p>
            </div>
          </div>

          {/* Bottom 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-right"
            >
              <FaChartPie className="text-4xl text-purple-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">
                Analytics Integration
              </h3>
              <p className="text-lg text-gray-700">
                Integrated tracking and analytics tools help you monitor usage,
                retention, and conversions with precision.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-up"
            >
              <FaCogs className="text-4xl text-yellow-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Custom Features</h3>
              <p className="text-lg text-gray-700">
                We develop feature-rich apps customized to your exact business
                needs — from chat to booking to payments.
              </p>
            </div>
            <div
              className="bg-white border border-slate-200 shadow-md shadow-slate-400 p-8 rounded-xl"
              data-aos="fade-left"
            >
              <FaHeadset className="text-4xl text-pink-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-lg text-gray-700">
                Our team provides post-launch maintenance, updates, and support
                to ensure your app’s long-term success.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:h-40"></div>

        {/* technologies section */}
      </div>
      <Technologies />
      <Reviews />
    </>
  );
}

export default Appdevelopment;
