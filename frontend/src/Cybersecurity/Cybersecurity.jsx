import React from "react";
import background from "../images/bg5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Threat from "../images/THREAT.png";
import Networksecurity from "../images/networksecurity.png";
import penetrate from "../images/nlp.png";
import ReviewsSlider from "../Reviews/Review";
<i></i>;

function Cybersecurity() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration (ms)
      once: false, // whether animation should happen only once
      easing: "ease-out", // easing option
    });
  }, []);
  return (
    <>
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
            Cybersecurity Services
          </h1>

          <h2 className=" text-xl lg:text-4xl font-semibold mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
            Secure and Trustworthy
          </h2>

          <p className=" text-sm lg:text-lg lg:max-w-xl max-w-64 mt-3 animate__animated animate__fadeInLeft animate__delay-2s">
            At DevMotive, we deliver reliable, scalable cybersecurity solutions
            designed to protect your business.
          </p>

          <button className="mt-5 px-6 py-2 bg-red-600 text-white  text-sm lg:text-lg animate__animated animate__fadeInUp animate__delay-3s rounded-lg">
            READ MORE
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center text-xl lg:text-auto text-center lg:text-2xl py-5 lg:pt-20 font-medium text-gray-700 overflow-hidden">
        <h1 data-aos="fade-right">
          Devmotive Cybersecurity Solutions{" "}
          <span className="text-red-600">Safeguarding</span> Your Digital Future
        </h1>
      </div>
      <div className="lg:pl-36 pl-3 lg:max-w-[90%] overflow-hidden">
        <div className="w-full flex justify-center py-3 text-gray-500 text-start ">
          <p className="" data-aos="fade-left">
            Welcome to Devmotive, where we protect your digital assets with
            world-class cybersecurity solutions. Our mission is to empower
            businesses across Pakistan, the USA, and globally by delivering
            robust cybersecurity services that secure data, prevent breaches,
            and ensure business continuity. Discover how our tailored
            cybersecurity solutions can shield your operations and give you a
            competitive edge in today’s digital world.
          </p>
        </div>
        <div
          className="w-full flex justify-start items-center text-2xl py-5 pt-5
       font-medium text-gray-700 "
        >
          <h1 className="text-start" data-aos="fade-right">
            Our Cybersecurity Services
          </h1>
        </div>
        <div className="w-full flex justify-start text-gray-500 text-start ">
          <p className="" data-aos="fade-left">
            Secure your enterprise with our all-encompassing cybersecurity
            services—designed to fortify your systems, detect vulnerabilities,
            and proactively respond to threats. Here's how we do it:
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            THREAT DETECTION & RESPONSE
          </h1>
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
          <img
            className="max-w-56"
            data-aos="zoom-in-up"
            src={Threat}
            alt={Threat}
          />
        </div>
      </div>

      <div className=" p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img
            className="max-w-56"
            src={Networksecurity}
            data-aos="zoom-in-up"
            alt=""
          />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            NETWORK SECURITY
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Protect your systems from the ground up with advanced infrastructure
            security services: <br />
            <span className="font-semibold">
              Firewall & Intrusion Prevention Systems (IPS):{" "}
            </span>{" "}
            We deploy and configure Fortinet, Cisco ASA, and Palo Alto firewalls
            to block unauthorized access. <br />
          </p>
          <p className="py-1 text-gray-500" data-aos="fade-left">
            <span className="font-semibold"> Endpoint Security:</span>
            We secure endpoints using advanced antivirus and EDR tools like
            Sophos, SentinelOne, and Microsoft Defender for Business.
            <br />{" "}
            <span className="font-semibold">
              Virtual Private Networks (VPNs):
            </span>{" "}
            We implement secure remote access using encrypted VPNs such as
            OpenVPN and WireGuard.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            PENETRATE TESTS
          </h1>
          <p className="py-10 text-gray-500">
            <p className="py-3" data-aos="fade-left">
              Strengthen your security posture with expert assessments:
            </p>
            <p data-aos="fade-left">
              <span className="font-semibold">Automated Scanning: </span>
              We run scans with tools like Nessus, OpenVAS, and Burp Suite to
              detect and report vulnerabilities.
            </p>
            <p className="py-3" data-aos="fade-left">
              <span className="font-semibold">
                Manual Penetration Testing:{" "}
              </span>
              Our certified ethical hackers simulate real-world attacks to find
              and fix critical gaps.
            </p>
            <p data-aos="fade-left">
              <span className="font-semibold">Compliance-Driven Audits: </span>
              We help ensure your organization meets industry standards such as
              ISO 27001, GDPR, HIPAA, and PCI DSS.
            </p>
          </p>
        </div>
        <div>
          <img
            className="max-w-56"
            data-aos="zoom-in-up"
            src={penetrate}
            alt={Threat}
          />
        </div>
      </div>

      <div className=" p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img
            className="max-w-56"
            src={Networksecurity}
            data-aos="zoom-in-up"
            alt=""
          />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            CLOUD & APPLICATION SECURITY
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Secure your cloud platforms and applications from data leaks and
            unauthorized access: <br />
            <span className="font-semibold">Cloud Security: </span> We provide
            AWS, Azure, and Google Cloud security assessments and configuration
            hardening. <br />
          </p>
          <p className="py-1 text-gray-500" data-aos="fade-left">
            <span className="font-semibold"> Secure DevOps (DevSecOps):</span>
            We integrate security into your CI/CD pipelines using tools like
            GitHub Actions, Bitbucket Pipelines, and Snyk.
            <br />{" "}
            <span className="font-semibold">
              Web Application Firewalls (WAF):
            </span>{" "}
            Shield your applications with WAFs such as Cloudflare, AWS WAF, and
            ModSecurity.
          </p>
        </div>
      </div>
      <ReviewsSlider/>
    </>
  );
}

export default Cybersecurity;
