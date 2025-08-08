import React from "react";
import logo from "../../images/singlelogof-.png";
import whychooseimg from '../../images/whychoose.JPG'

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

      
      <div className="w-full" data-aos="zoom-in-up">
        <img src={whychooseimg} className="object-cover" alt="" />
      </div>

      <div className="lg:h-[70vh] bg-slate-700 z-30 relative w-full gap-x-2 lg:gap-x-20 lg:flex-row flex-col flex justify-center items-center py-2">
        <div data-aos="fade-left " className="lg:block hidden">
          <img loading="lazy" className="lg:h-auto h-60" src={logo} alt="" />
        </div>
        <div data-aos="fade-up" className="lg:hidden block">
          <img loading="lazy" className="lg:h-auto h-40" src={logo} alt="" />
        </div>
        <div>
          <p
            className="max-w-[800px] text-white text-center lg:p-0 px-4 p-2 lg:text-left text-xs lg:text-xl"
            data-aos="fade-right"
          >
            Because we bring innovation and precision together. With our{" "}
            <span className="text-red-400">dual expertise</span> in both digital
            solutions and financial management, we offer a{" "}
            <span className="text-red-400">one-stop solution</span> for streamlining
            your business operations. Our{" "}
            <span className="text-red-400">qualified team</span> includes{" "}
            <span className="text-red-400">ACCA-certified accountants</span> and{" "}
            <span className="text-red-400">expert developers</span> working
            collaboratively under one roof to deliver exceptional results. At
            DevMotive, <span className="text-red-400">compliance-oriented</span>{" "}
            service is a priority—we strictly adhere to{" "}
            <span className="text-red-400">UK tax laws</span>,{" "}
            <span className="text-red-400">GDPR</span>, and modern{" "}
            <span className="text-red-400">cybersecurity standards</span>. Most
            importantly, we offer{" "}
            <span className="text-red-400">tailored solutions</span> that are fully{" "}
            <span className="text-red-400">scalable</span>, designed to evolve and
            grow with your business.
          </p>
          <p
            className="max-w-[800px] text-white text-sm pt-12 lg:block hidden"
            data-aos="fade-right "
          >
            We don’t just offer services — we deliver strategic partnerships that drive lasting success. Our <span className="text-red-400">cross-functional team</span> seamlessly blends <span className="text-red-400">technical innovation</span> with <span className="text-red-400">financial accuracy</span>, ensuring that every solution we build is both efficient and compliant. From <span className="text-red-400">custom software development</span> to <span className="text-red-400">financial reporting</span> and automation, our offerings are designed to reduce overheads and boost performance. We take a <span className="text-red-400">client-first approach</span>, crafting solutions that align with your industry, objectives, and growth trajectory. With DevMotive, you're not just investing in services — you're partnering with a team committed to <span className="text-red-400">sustainable success</span>.
          </p>
        </div>
      </div>
    </>
  );
}

export default Whychoose;
