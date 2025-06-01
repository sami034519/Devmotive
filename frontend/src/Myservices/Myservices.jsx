import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import background from "../images/bg5.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import FaqSection from "../FAQS/Faqs";
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
import Howwork from "../images/Howwe work.webp";

// Icons

import {
  FaMobileAlt,
  FaCogs,
  FaCloud,
  FaCode,
  FaNetworkWired,
  FaBalanceScale,
  FaMoneyCheck,
  FaFileInvoiceDollar,
  FaUserShield,
  FaChartLine,
  FaRegFileAlt,
  FaUsers,
  FaTasks,
  FaServer,
  FaSitemap,
  FaCashRegister,
} from "react-icons/fa";

const iconMap = {
  "Website & Mobile App Development": <FaMobileAlt />,
  "SaaS Application Design": <FaCogs />,
  "System Integration & Automation": <FaServer />,
  "Vulnerability Assessment & Penetration Testing": <FaUserShield />,
  "Compliance & Risk Advisory": <FaBalanceScale />,
  "Network Security & Monitoring": <FaNetworkWired />,
  "CI/CD Pipeline Setup": <FaCode />,
  "Cloud Hosting (AWS, Azure, GCP)": <FaCloud />,
  "Containerization & Automation (Docker, Kubernetes)": <FaSitemap />,
  "Bookkeeping & Ledger Management": <FaMoneyCheck />,
  "Monthly Salary Sheet Preparation": <FaFileInvoiceDollar />,
  "VAT Filing & Tax Return": <FaBalanceScale />,
  "Payroll Processing (UK PAYE & Auto-Enrolment)": <FaCashRegister />,
  "Annual Accounts Preparation": <FaFileInvoiceDollar />,
  "Company Formation & HMRC Compliance": <FaRegFileAlt />,
  "Financial Statements & Budget Planning": <FaChartLine />,
  "ACCA-Qualified Accountants": <FaUsers />,
  "Business Process Digitalization": <FaCogs />,
  "Tech & Finance Advisory for SMEs": <FaChartLine />,
  "Agile & Project Management Coaching": <FaTasks />,
};

const services = [
  {
    title: "Software Development",
    subServices: [
      {
        name: "Website & Mobile App Development",
        description:
          "Modern web and mobile apps tailored to your business goals.",
      },
      {
        name: "SaaS Application Design",
        description: "We build scalable and secure SaaS platforms for growth.",
      },
      {
        name: "System Integration & Automation",
        description:
          "Streamline operations by integrating and automating systems.",
      },
    ],
  },
  {
    title: "Cybersecurity",
    subServices: [
      {
        name: "Vulnerability Assessment & Penetration Testing",
        description: "Identify system weaknesses and prevent cyberattacks.",
      },
      {
        name: "Compliance & Risk Advisory",
        description: "Ensure industry-standard compliance and manage risk.",
      },
      {
        name: "Network Security & Monitoring",
        description: "Real-time monitoring and protection for your network.",
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    subServices: [
      {
        name: "CI/CD Pipeline Setup",
        description: "Automate deployments with efficient DevOps pipelines.",
      },
      {
        name: "Cloud Hosting (AWS, Azure, GCP)",
        description: "Launch and scale with reliable cloud infrastructure.",
      },
      {
        name: "Containerization & Automation (Docker, Kubernetes)",
        description:
          "Deploy containers for efficient and portable applications.",
      },
    ],
  },
  {
    title: "Finance & Accounting Services",
    subServices: [
      {
        name: "Bookkeeping & Ledger Management",
        description: "Maintain clear, accurate records of all transactions.",
      },
      {
        name: "Monthly Salary Sheet Preparation",
        description: "Automated and error-free salary management.",
      },
      {
        name: "VAT Filing & Tax Return (Self-Assessment & Corporate)",
        description: "File taxes correctly and stay legally compliant.",
      },
      {
        name: "Payroll Processing (including UK PAYE & Auto-Enrolment)",
        description: "Streamlined payroll with local tax compliance.",
      },
      {
        name: "Annual Accounts Preparation",
        description: "Comprehensive end-of-year financial reporting.",
      },
      {
        name: "Company Formation & HMRC Compliance",
        description: "Start your business with full legal setup and guidance.",
      },
      {
        name: "Financial Statements & Budget Planning",
        description: "Plan ahead with smart financial analysis and budgeting.",
      },
      {
        name: "Services delivered by certified accountants (ACCA-qualified)",
        description: "Handled by expert ACCA-certified professionals.",
      },
    ],
  },
  {
    title: "IT Consulting",
    subServices: [
      {
        name: "Business Process Digitalization",
        description: "Digitize your business workflows to boost efficiency.",
      },
      {
        name: "Tech & Finance Advisory for SMEs",
        description:
          "Get expert advice tailored for small and medium businesses.",
      },
      {
        name: "Agile & Project Management Coaching",
        description: "Train your teams in Agile, Scrum, and project delivery.",
      },
    ],
  },
];

function Myservices() {
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
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full lg:h-[80vh] h-[300px]  mt-12">
        <img
          loading="lazy"
          src={background}
          alt="Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center mt-5 px-6 lg:px-16">
          <h1 className="text-red-600 text-3xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
            Our Services
          </h1>
          <h2 className="text-xl lg:text-4xl font-semibold mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
            Innovative and Scalable
          </h2>
          <p className="text-sm lg:text-lg max-w-xl mt-3 animate__animated animate__fadeInLeft animate__delay-2s lg:block hidden">
            At DevMotives, we craft user-friendly, scalable software to help
            your business grow.
          </p>
         <div className={`bg-red-700 pt-1 lg:w-56 w-28 lg:h-[52px] flex flex-col justify-end mt-5 lg:mt-20 rounded-lg 
             animate__animated animate__backInUp animate__delay-2s
          `}>
            <button className="bg-red-600 text-white lg:text-2xl lg:px-6 py-1 lg:py-2 w-full lg:h-12 rounded-lg">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 lg:py-20 px-4 sm:px-10">
        {services.map((section, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-semibold text-red-600 mb-8">
              {section.title}
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {section.subServices.map((sub, idx) => (
                <Link
  key={idx}
  to={`/services/${section.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`}
  data-aos="fade-up"
  className="bg-white p-6 rounded-xl shadow-md hover:shadow-red-500 transition-shadow duration-300 flex flex-col gap-2"
>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl text-red-600">
                      {iconMap[sub.name] || <FaCode />}
                    </div>
                    <h3 className="text-gray-800 text-lg font-semibold hover:text-red-600 transition-colors duration-200">
                      {sub.name}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {sub.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* how we work  */}
      <div className="w-full flex lg:flex-row flex-col justify-center items-center lg:gap-10 lg:p-10 overflow-hidden">
        <div>
          <img
            className="lg:w-[700px] w-80 rounded-2xl"
            src={Howwork}
            loading="lazy"
            data-aos="zoom-in"
            alt=""
          />
        </div>
        <div className="lg:max-w-[700px] max-w-80  flex flex-col gap-y-7 lg:py-0 py-3">
          <h1
            className="lg:text-4xl text-2xl font-bold text-gray-700"
            data-aos="fade-left"
          >
            HOW <span className="text-red-600">WE</span> WORK
          </h1>
          <p data-aos="fade-left">
            At the core of our process is understanding our clients' goals and
            challenges. We begin each project with detailed consultations to
            gather requirements, define the project scope, and understand the
            target audience. This helps us create customized solutions that
            truly align with the business objectives of our clients.
          </p>
          <p data-aos="fade-left">
            Once we have a clear understanding of the project, our team develops
            a strategic plan. This includes creating user journeys, defining
            technical architecture, and identifying the best tools and
            technologies. We ensure transparency by sharing timelines,
            milestones, and communication processes with our clients.
          </p>
          <p data-aos="fade-left">
            We follow an agile development methodology, allowing us to deliver
            work in small, manageable phases. This approach ensures flexibility,
            faster feedback, and continuous improvement. Our team of skilled
            developers, designers, and QA professionals work in collaboration to
            bring high-quality software to life.
          </p>
        </div>
      </div>
      {/* FAQS */}
      <FaqSection />
      {/* clients section */}
      <div className="w-full flex justify-center text-gray-700 text-2xl lg:text-4xl font-bold pt-12">
       <h1> OUR <span className="text-red-600">  TRUSTED  </span>  CLIENTS</h1>
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
    </>
  );
}

export default Myservices;
