import React from "react";
import background from "../images/bg5.png";
import cloud from "../images/cloud-hosting-min.png";
import vps from "../images/vps.png";
import serverless from "../images/serverless-hosting.png";
import paas from "../images/paas.png";
import managehost from "../images/managed-hosting-min.png";
import dedicated from "../images/dedicated-hosting-min.png";
import containerhosting from "../images/container-hosting-min.png"
import ReviewsSlider from "../Reviews/Review";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Cloud() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration (ms)
          once: false, // whether animation should happen only once
          easing: "ease-out", // easing option
        });
      }, []);
  return (
    <>
      {/* hero section */}
      <div className="relative w-full lg:h-[80vh] h-[300px] overflow-hidden mt-20">
        {/* Background Image */}
        <img
          loading="lazy"
          src={background}
          alt="Software Development"
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-1 lg:px-16">
          <h1 className="text-red-600 text-3xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
            Cloud & DevOps
          </h1>

          <h2 className=" text-xl lg:text-4xl font-semibold mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
            Scalable, Secure & Cost-Efficient.
          </h2>

          <p className=" text-sm lg:text-lg lg:max-w-xl max-w-64 mt-3 animate__animated animate__fadeInLeft animate__delay-2s">
            Our Cloud & DevOps services ensure your infrastructure is agile,
            secure, and built for scale.
          </p>

          <button className="mt-5 px-6 py-2 bg-red-600 text-white  text-sm lg:text-lg animate__animated animate__fadeInUp animate__delay-3s rounded-lg">
            READ MORE
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center text-xl lg:text-auto text-center lg:text-2xl py-5 lg:pt-20 font-medium text-gray-700 overflow-hidden">
        <h1 data-aos="fade-right">
          Lead Your Future With <span className="text-red-600">Devmotive</span>{" "}
          Technologies Innovative DevOps Services
        </h1>
      </div>
      <div className="lg:pl-36 pl-3 lg:max-w-[90%] overflow-hidden">
        <div className="w-full flex justify-center text-gray-500 text-start ">
          <p className="" data-aos="fade-left">
            At Devmotive Technologies, we bridge the gap between development and
            operations to accelerate your digital transformation journey. Our
            DevOps services are designed to streamline software delivery,
            enhance collaboration, and ensure high-performance infrastructure.
            By integrating automation, continuous integration/continuous
            delivery (CI/CD), and real-time monitoring, we enable faster
            releases with fewer errors.
          </p>
        </div>
        <div
          className="w-full flex justify-start items-center text-2xl py-5 pt-5
       font-medium text-gray-700 "
        >
          <h1 className="text-start" data-aos="fade-right">
            DevOps Services Offered at Devmotive Technologies
          </h1>
        </div>
        <div className="w-full flex justify-start text-gray-500 text-start ">
          <p className="" data-aos="fade-left">
            At Devmotive Technologies, we offer a full spectrum of DevOps
            services designed to optimize your software development lifecycle,
            enhance team collaboration, and accelerate product delivery. Our
            goal is to help you release high-quality software faster, more
            reliably, and with minimal risk.
          </p>
        </div>
      </div>
      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">CLOUD HOSTING</h1 >
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Our team is committed to delivering cloud hosting services that
            leverage computing power from multiple servers. This distributed
            approach enhances the reliability, performance, and scalability of
            your business infrastructure. With our services, you can easily
            adapt to growing demands and seamlessly scale your operations. We
            prioritize flexibility and efficiency, ensuring that your business
            can thrive in a dynamic digital landscape.
          </p>
        </div>
        <div>
          <img className="max-w-56" data-aos="zoom-in-up" src={cloud} alt="" />
        </div>
      </div>

      <div className=" p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img className="max-w-56" src={vps} data-aos="zoom-in-up" alt="" />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            VIRTUAL PRIVATE SERVER <span className="text-red-600">(VPS)</span>{" "}
            HOSTING
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            At Devmotive Technologies, our VPS hosting services offer the
            perfect balance between performance, control, and cost-efficiency.
            Unlike shared hosting, VPS provides dedicated resources within a
            virtual environment—ensuring better speed, reliability, and security
            for your applications.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-10 lg:my-12 flex lg:flex-row flex-col-reverse justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-rigt">SERVERLESS HOSTING</h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            At Devmotive Technologies, our Serverless Hosting solutions redefine
            the way you deploy and scale applications. With serverless
            architecture, you no longer need to manage or maintain physical
            servers. Instead, your code runs in fully managed environments that
            automatically scale based on demand.
          </p>
        </div>
        <div>
          <img className="max-w-56" src={serverless} data-aos="zoom-in-up" alt="" />
        </div>
      </div>

      <div className=" p-10 lg:my-12 flex lg:flex-row gap-3 flex-col justify-around items-center overflow-hidden" >
        <div>
          <img className="max-w-56" src={paas} data-aos="zoom-in-up" alt="" />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            PLATFORM AS A SERVICE <span className="text-red-600">(PAAS)</span>{" "}
            HOSTING
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Serverless Hosting allows you to run applications without managing
            servers. At Devmotive Technologies, we provide serverless solutions
            that automatically handle the infrastructure—scaling up when demand
            increases and scaling down when it's idle. Instead of provisioning
            or maintaining servers, you simply deploy your code, and it runs in
            isolated environments triggered by specific events like user
            actions, API calls, or database changes.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-10 lg:my-12 flex lg:flex-row gap-3 flex-col-reverse justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">MANAGE HOSTING</h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            At Devmotive Technologies, our Managed Hosting services take the
            stress out of server management so you can focus on growing your
            business. We handle the technical operations of your hosting
            environment—including server setup, monitoring, maintenance,
            updates, security, and backups.
          </p>
        </div>
        <div>
          <img className="max-w-56" src={managehost} data-aos="zoom-in-up" alt="" />
        </div>
      </div>

      <div className=" p-10 lg:my-12 flex lg:flex-row gap-3 flex-col justify-around items-center overflow-hidden">
        <div>
          <img className="max-w-56" src={dedicated} data-aos="zoom-in-up" alt="" />
        </div>
        <div className=" lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">DEDICATED SERVER HOSTING</h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            At Devmotive Technologies, our Dedicated Server Hosting solutions
            provide you with exclusive access to a physical server, offering
            unmatched performance, reliability, and customization for
            mission-critical applications.
          </p>
          <p className=" text-gray-500" data-aos="fade-left">
            Dedicated servers are required to host or run your applications and
            websites so that users can access your services. Our host provider
            assigns, manages and maintains the physical server resources for
            your project, ensuring seamless operations.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-10 lg:my-12 flex gap-3 lg:flex-row flex-col-reverse justify-around items-center overflow-hidden+">
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">CONTAINER HOSTING</h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            At Devmotive Technologies, our Container Hosting services empower your business to deploy and manage applications with greater agility and consistency. Containers package your application and its dependencies together, ensuring it runs reliably across different environments—whether on a developer’s laptop, on-premises servers, or the cloud.
          </p>
        </div>
        <div>
          <img className="max-w-56" src={containerhosting} data-aos="zoom-in-up" alt="" />
        </div>
      </div>
      <ReviewsSlider/>
    </>
  );
}

export default Cloud;
