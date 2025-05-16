import React from "react";
import logo from "../images/singlelogof-.png";
import homeconcept from "../images/home-concept.png";
import homeicons from "../images/home-concept-icons.png";
import home1 from "../images/home-concept-item-1.png";
import home2 from "../images/home-concept-item-2.png";
import home3 from "../images/home-concept-item-3.png";
import home4 from "../images/project-home-1.jpg";

function Whychoose() {
  return (
    <>
      <div className="bg-black bg-opacity-70 relative z-30 flex justify-center items-center h-16 lg:h-24">
        <h1
          data-aos="fade-up"
          className="text-white font-medium lg:text-4xl text-2xl"
        >
          WHY CHOOSE DEVMOTIVE
        </h1>
      </div>

      <div className="lg:h-[80vh] h-[40vh] bg-white z-30 relative w-full">
        <div
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-center"
          className="relative"
        >
          <div>
            <img
              className="absolute lg:left-9 left-2 top-24  w-[95%]   "
              src={homeconcept}
              alt=""
            />
          </div>
          <img
            className="absolute lg:w-auto w-[90%] left-3 top-10  lg:top-28 lg:left-60"
            src={homeicons}
            alt=""
          />
          <div className="absolute lg:top-[270px] top-28 left-9 lg:left-[300px] border-dashed border-2 rounded-full border-slate-400 p-1">
            {" "}
            <img className=" rounded-full lg:h-auto h-10" src={home1} alt="" />
          </div>
          <h1 className="absolute top-[170px] left-5 text-sm  lg:top-[450px] lg:left-[310px] font-bold text-slate-400 lg:text-3xl"
         style={{
        fontFamily: '"Shadows Into Light", cursive',
        
      }}
          >
            STRATEGY
          </h1>

          <div className="absolute top-28 left-24 lg:top-[270px] lg:left-[32%]  border-dashed border-2 rounded-full border-slate-400 p-1">
            {" "}
            <img className="lg:h-44 rounded-full  h-12" src={home2} alt="" />
          </div>
          <h1 className="absolute top-44 left-24 text-sm lg:top-[460px] lg:left-[33%] font-bold text-slate-400 lg:text-3xl"
           style={{
        fontFamily: '"Shadows Into Light", cursive',
        
      }}
          >
            PLANNING
          </h1>

          <div className="absolute left-44 top-24  lg:top-[200px] lg:left-[50%] border-dashed border-2 rounded-full border-slate-400 p-1">
            {" "}
            <img className="lg:h-48 rounded-full h-14" src={home3} alt="" />
          </div>
          <h1 className="absolute lg:top-[420px] top-44 left-48 text-sm lg:left-[54%] font-bold text-slate-400 lg:text-3xl"
           style={{
        fontFamily: '"Shadows Into Light", cursive',
        
      }}
          >
            BUILD
          </h1>

          <div className="absolute lg:top-[160px] lg:right-[10%] right-5 top-24 border-dashed border-2 rounded-full border-slate-400 p-1">
            {" "}
            <img className="rounded-full lg:h-auto h-20" src={home4} alt="" />
          </div>
          <h1 className="absolute top-48 right-7 text-sm lg:top-[520px] lg:right-[14%] font-bold text-slate-400 lg:text-3xl"
           style={{
        fontFamily: '"Shadows Into Light", cursive',
        
      }}
          >
            OUR WORK
          </h1>
        </div>
      </div>
      <div className="lg:h-[70vh] bg-slate-700 z-30 relative w-full gap-x-2 lg:gap-x-20 lg:flex-row flex-col flex justify-center items-center">
        <div data-aos="fade-left " className="lg:block hidden">
          <img className=" lg:h-auto h-60" src={logo} alt="" />{" "}
          
        </div>
        <div data-aos="fade-up" className="lg:hidden block">
          <img className=" lg:h-auto h-60" src={logo} alt="" />{" "}
          
        </div>
        <div>
          <p className="max-w-[800px] text-white text-center lg:p-0 p-2 lg:text-left text-xs lg:text-xl" data-aos="fade-right">
            Because we bring innovation and precision together. With our{" "}
            <span class="text-red-400">dual expertise</span> in both digital
            solutions and financial management, we offer a{" "}
            <span class="text-red-400">one-stop solution</span> for streamlining
            your business operations. Our{" "}
            <span class="text-red-400">qualified team</span> includes{" "}
            <span class="text-red-400">ACCA-certified accountants</span> and{" "}
            <span class="text-red-400">expert developers</span> working
            collaboratively under one roof to deliver exceptional results. At
            DevMotive, <span class="text-red-400">compliance-oriented</span>{" "}
            service is a priority—we strictly adhere to{" "}
            <span class="text-red-400">UK tax laws</span>,{" "}
            <span class="text-red-400">GDPR</span>, and modern{" "}
            <span class="text-red-400">cybersecurity standards</span>. Most
            importantly, we offer{" "}
            <span class="text-red-400">tailored solutions</span> that are fully{" "}
            <span class="text-red-400">scalable</span>, designed to evolve and
            grow with your business.
          </p>
          <p className="max-w-[800px] text-white text-sm pt-12 lg:block hidden" data-aos="fade-right " >We don’t just offer services — we deliver strategic partnerships that drive lasting success. Our <span class="text-red-400">cross-functional team</span> seamlessly blends <span class="text-red-400">technical innovation</span> with <span class="text-red-400">financial accuracy</span>, ensuring that every solution we build is both efficient and compliant. From <span class="text-red-400">custom software development</span> to <span class="text-red-400">financial reporting</span> and automation, our offerings are designed to reduce overheads and boost performance. We take a <span class="text-red-400">client-first approach</span>, crafting solutions that align with your industry, objectives, and growth trajectory. With DevMotive, you're not just investing in services — you're partnering with a team committed to <span class="text-red-400">sustainable success</span>.</p>
        </div>
      </div>
    </>
  );
}

export default Whychoose;
