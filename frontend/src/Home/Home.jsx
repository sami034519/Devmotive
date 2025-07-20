import React from "react";
import { useEffect } from "react";
import HeroCarousel from "../Crousal/Main";
import Fiximage from "../images/elexoft-apps-min.png";
import singlelogo from "../images/singlelogof-.png";
import Technologies from "../components/Technologies/Technologies";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";
import client4 from "../images/client4.png";
import client5 from "../images/client5.png";
import client6 from "../images/client6.png";
import client7 from "../images/client8.png";
import client9 from "../images/client9.png";
import client10 from "../images/client10.png";
import client11 from "../images/client11.png";
import client12 from "../images/client12.png";
import client13 from "../images/client13.png";
import clutch from "../images/clutch-3.png";
import Google from "../images/google (1).png";
import trust from "../images/trustpilot.png";
import manifest from "../images/themanifest.png";
import shopify from "../images/shopify.png";
import Services from "../components/Serviceshome/Services";
import WhyChoose from "../components/Whychoose/Whychoose";
import ReviewsSlider from "../components/Reviews/Review";
import RecentWorks from "../components/RecentWorks/RecentWorks";

function Home() {
  const clients = [
    client1,
    client10,
    client11,
    client12,
    client13,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client9,
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // 👈 important: animate every time the element enters the viewport
      mirror: true, // 👈 animate out while scrolling up (optional)
    });
  }, []);

  return (
    <>
      {/* herocrousal */}
      <HeroCarousel />
      {/* introduction */}
      <div className="relative w-full">
        {/* Background Image */}
        <img
        loading="lazy"
          className=" fixed inset-0  -z-10 bottom-0"
          src={Fiximage}
          alt=""
        />

        <div className="bg-white relative z-30 flex flex-wrap lg:flex-nowrap justify-center items-center lg:gap-10 font-semibold pt-5 pb-0 lg:pt-20 lg:pb-12">
          <div className=" " data-aos="fade-up-right">
            <img
              className="lg:h-[300px] h-[130px] lg:rotate-0 rotate-90"
              src={singlelogo}
              alt=""
              loading="lazy"
            />
          </div>
          <div
            className="lg:max-w-[50%] w-full lg:text-start text-center pb-6 px-4 lg:p-6 "
            data-aos="fade-down"
          >
            <h1 className="lg:text-3xl text-2xl font-semibold mb-2 text-slate-800">
              FASTEST GROWING COMPANY
            </h1>
            <p className="text-sm lg:text-base text-gray-700" data-aos="zoom-in">
              {" "}
              <span className="text-red-600">DevMotive Ltd</span> is a{" "}
              <span className="text-red-600">UK-based</span> IT and
              <span className="text-red-600">financial services</span> company
              founded in <span className="text-red-600">2025</span>,
              specializing in innovative{" "}
              <span className="text-red-600">software development</span>,
              <span className="text-red-600">cybersecurity solutions</span>, and
              professional{" "}
              <span className="text-red-600">finance services</span>. Combining
              the expertise of certified{" "}
              <span className="text-red-600">accountants</span>, including{" "}
              <span className="text-red-600">ACCA professionals</span>, with
              skilled <span className="text-red-600">developers</span> and{" "}
              <span className="text-red-600">ethical hackers</span>, DevMotive
              empowers businesses to grow securely and compliantly in today’s{" "}
              <span className="text-red-600">digital economy</span>. Offering
              tailored services ranging from{" "}
              <span className="text-red-600">web</span> and{" "}
              <span className="text-red-600">app development</span>
              to <span className="text-red-600">cloud hosting</span>,{" "}
              <span className="text-red-600">IT consulting</span>, and
              full-scale{" "}
              <span className="text-red-600">financial management</span>,
              DevMotive is committed to helping{" "}
              <span className="text-red-600">SMEs</span>,{" "}
              <span className="text-red-600">startups</span>, and
              <span className="text-red-600">professionals</span> navigate{" "}
              <span className="text-red-600">digital transformation</span> and
              <span className="text-red-600">financial optimization</span> with
              precision and reliability.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <WhyChoose />

      {/* Feature Clients */}
      <div className="h-8 bg-white relative z-30"></div>

      <div className="lg:h-24 h-16 w-full bg-black bg-opacity-70 relative flex justify-center items-center">
        <h1
          data-aos="fade-up"
          className="text-white text-2xl lg:text-4xl font-medium"
        >
          OUR FEATURED CLIENTS
        </h1>
      </div>
      
      <div className="w-full flex justify-center relative bg-white z-30 p-4 pt-5 lg:pt-20">
        <div className="client-scroll-container relative  z-30 pt-12 shadow-md shadow-slate-200 bg-slate-50   p-2">
          <div className="client-scroll ">
            {clients.map((client, index) => (
              <img
              loading="lazy"
                key={index}
                src={client}
                alt={`client-${index}`}
                className="client-image"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-0 gap-5  justify-items-center items-center bg-white relative z-30 pt-7 lg:pt-16 lg:px-44 pb-7 lg:pb-36">
        <div>
          <img
          loading="lazy"
            data-aos="zoom-in-down"
            className="lg:w-32 w-20"
            src={clutch}
            alt="Clutch"
          />
        </div>
        <div>
          <img
          loading="lazy"
            data-aos="zoom-in-down"
            className="lg:w-44 w-24"
            src={Google}
            alt="Google"
          />
        </div>
        <div>
          <img
          loading="lazy"
            data-aos="zoom-in-up"
            className="lg:w-52 w-28"
            src={trust}
            alt="Trust"
          />
        </div>
        <div>
          <img
          loading="lazy"
            data-aos="zoom-in-up"
            className="lg:w-52 w-28"
            src={manifest}
            alt="Manifest"
          />
        </div>
        <div>
          <img
          loading="lazy"
            data-aos="zoom-in-down"
            className="lg:w-52 w-28"
            src={shopify}
            alt="Shopify"
          />
        </div>
      </div>

      <ReviewsSlider />
      <RecentWorks/>
      <Technologies/>
    </>
  );
}

export default Home;
