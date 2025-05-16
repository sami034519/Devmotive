import React from "react";
import { useEffect } from "react";
import webimg from "../images/web-development.jpg";
import mobile from "../images/mobile-app-dev-min.jpg";
import devops from "../images/devops-cover1-min.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import SAAS from "../images/ai-cover-min.jpg";
import account from "../images/account.jpg";
import security from "../images/security.jpg";
import salarysheet from "../images/SALARYSHEET.jpg";
import consulting from "../images/CONSULTING.jpg";
function Services() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false, // 👈 important: animate every time the element enters the viewport
      mirror: true, // 👈 animate out while scrolling up (optional)
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
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2  border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl  lg:h-[650px] lg:w-auto w-80 overflow-hidden"
            data-aos="fade-up"
          >
            <div>
              <img className="h-64 rounded-tl-3xl" src={webimg} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                WEB DEVELOPMENT
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 p-2">
                At DevMotive we donot just build websites we craft digital
                experiences that are fast secure and tailored to your brand. Our
                web development services combine clean code, modern design, and
                scalable architecture to deliver solutions that grow with your
                business.Whether you need a responsive corporate website, a
                robust web application, or a powerful e-commerce platform.
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl lg:h-[650px]  lg:w-auto w-80 overflow-hidden "
            data-aos="fade-up"
          >
            <div>
              <img className="h-64 rounded-tl-3xl" src={mobile} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                MOBILE APP DEVELOPMENT
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 pb-10 p-2">
                Devmotive's mobile app development service is a game-changer for
                businesses looking to elevate their digital presence. With a
                keen focus on user-centric design and innovative solutions,
                Devmotive creates mobile apps that are not only visually
                stunning but also functional and intuitive. Their team of
                skilled developers works closely with clients to understand
                their unique requirements.
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl lg:h-[650px]   overflow-hidden lg:w-auto w-80 "
            data-aos="fade-up"
          >
            <div>
              <img className="rounded-tl-3xl h-64" src={SAAS} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                SAAS APPLICATION DEVELOPMENT
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 p-2">
                SaaS (Software as a Service) application development is a
                powerful solution for businesses looking to offer cloud-based
                services, improve accessibility, and scale efficiently. At
                Devmotive, their expertise in SaaS application development
                ensures businesses can build secure, high-performance, and
                scalable platforms that cater to diverse user needs across
                industries.Their team of skilled developers works closely with
                clients to understand
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl lg:h-[650px]  overflow-hidden lg:w-auto w-80"
            data-aos="fade-up"
          >
            <div>
              <img className="h-64 rounded-tl-3xl" src={security} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                CYBER SECURITY SOLUTIONS
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 p-2 pb-3">
                Cybersecurity solutions are crucial in today’s digital
                landscape, where businesses face constant threats from
                cyberattacks, data breaches, and other security vulnerabilities.
                At Devmotive, their cybersecurity solutions are designed to
                protect businesses from these evolving threats, ensuring the
                integrity, confidentiality, and availability of your data and
                systems.Devmotive's team of cybersecurity experts works
                proactively.
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl lg:h-[650px] overflow-hidden lg:w-auto w-80"
            data-aos="fade-up"
          >
            <div>
              <img className="h-64 rounded-tl-3xl" src={webimg} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                NETWORK SECURITY
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 p-2">
                Network security is a critical aspect of safeguarding your
                business’s IT infrastructure from unauthorized access, data
                breaches, and cyberattacks. At Devmotive, their network security
                solutions are designed to provide robust protection against a
                wide range of potential threats, ensuring that your network
                remains secure, reliable, and resilient. Devmotive’s network
                security services focus on securing your network's architecture.
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl lg:h-[650px]  overflow-hidden lg:w-auto w-80"
            data-aos="fade-up"
          >
            <div>
              <img className="h-64 rounded-tl-3xl" src={account} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                FINANCE AND ACCOUNTING
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 p-2 pb-3">
                Finance and accounting are essential pillars of any business,
                ensuring financial stability, compliance, and strategic
                decision-making. At Devmotive, their finance and accounting
                solutions are designed to streamline your financial operations,
                improve accuracy, and support growth while providing
                transparency and insights into your organization’s financial
                health.Devmotive’s finance and accounting services cover a wide
                range of needs.
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl lg:h-[650px]  overflow-hidden lg:w-auto w-80"
            data-aos="fade-up"
          >
            <div>
              <img className="h-64 rounded-tl-3xl" src={devops} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                CLOUD AND DEVOPS
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 p-2 pb-3">
                Devmotive's cloud solutions are designed to help businesses move
                to the cloud seamlessly, ensuring a flexible and scalable
                environment for both development and production. They leverage
                major cloud platforms like AWS, Microsoft Azure, and Google
                Cloud to create customized cloud architectures that meet your
                business's unique needs.DevOps combines development and
                operations, emphasizing automation
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl lg:h-[650px] overflow-hidden lg:w-auto w-80"
            data-aos="fade-up"
          >
            <div>
              <img className="h-64 rounded-tl-3xl" src={salarysheet} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                MONTHLY SALARY SHEET
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 p-2">
                At DevMotive The Monthly Salary Sheet Service offered by
                Devmotive is a highly efficient and streamlined solution
                designed to help businesses manage their payroll and
                compensation processes with accuracy and ease. This service is
                ideal for organizations of all sizes, from startups to large
                enterprises, ensuring that employee salaries are calculated
                correctly, payments are made on time, and all compliance
                requirements are met.
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center text-center max-w-96 gap-5 border-2 border-slate-200 pb-5
                 rounded-tl-3xl rounded-br-3xl lg:h-[650px]  overflow-hidden lg:w-auto w-80"
            data-aos="fade-up"
          >
            <div>
              <img className="h-64 rounded-tl-3xl" src={consulting} alt="" />
            </div>
            <div>
              <h1 className="text-xl font-medium hover:border-b-2 border-b-black cursor-pointer">
                IT CONSULTING
              </h1>
            </div>
            <div>
              <p className=" text-[16px] leading-[25px] text-black/50 p-2">
                Devmotive offers expert IT consulting services designed to help
                businesses harness the power of technology to optimize
                operations, increase efficiency, and drive growth. With a deep
                understanding of the latest tech trends and challenges,
                Devmotive’s IT consulting service provides tailored solutions to
                businesses across various industries, enabling them to stay
                competitive in a rapidly changing digital landscape.help
                businesses harness.
              </p>
            </div>
            <div>
              <div className="bg-red-700 pt-1 hover:scale-110">
                <button className="bg-red-600 text-white px-4 py-1 font-medium  ">
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* servicebutton */}
        <div className="w-full flex justify-center items-start pt-10 pb-14">
          <div className="bg-red-700 pt-1 hover:scale-110" data-aos="flip-left">
            <button className="bg-red-600 text-white font-medium text-xl px-6 py-2  lg:px-10 lg:py-3">
              FIND MORE SERVICES
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
