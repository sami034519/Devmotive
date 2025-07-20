import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import logo from "../../images/singlelogof-.png"

const faqs = [
  {
    question: "What does Software Development at DevMotive include?",
    answer:
      "We build responsive websites, mobile apps, SaaS platforms, and integrated systems to automate and grow your business.",
  },
  {
    question: "What is included in your Cybersecurity Solutions?",
    answer:
      "We offer penetration testing, network monitoring, and compliance advisory to protect your digital infrastructure.",
  },
  {
    question: "Do you support multiple cloud providers?",
    answer:
      "Yes, we work with AWS, Azure, and Google Cloud, and help you implement CI/CD, Docker, and Kubernetes.",
  },
  {
    question: "Are your accounting services handled by certified professionals?",
    answer:
      "Yes, our financial services are delivered by ACCA-qualified accountants ensuring accuracy and compliance.",
  },
  {
    question: "How can IT Consulting help my business?",
    answer:
      "We help businesses digitize operations, improve project delivery with Agile, and guide finance-tech decisions.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
         
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 bg-slate-700 px-4 py-10 w-full">
      
      {/* Logo */}
      <div className="w-full lg:w-[30%] flex justify-center items-center">
        <img className="max-w-[200px] lg:max-w-[250px]" src={logo} alt="Logo" loading="lazy" />
      </div>

      {/* FAQ Section */}
      <div className="w-full lg:w-[70%] py-6 px-2 sm:px-6">
        <h1 className="text-3xl lg:text-4xl font-semibold text-white mb-8 text-center lg:text-left">
          FAQs
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white"
              data-aos="zoom-in-down"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-5 py-4 bg-gray-100 hover:bg-gray-200 transition"
              >
                <span className="text-left text-gray-800 font-medium text-sm sm:text-base">
                  {faq.question}
                </span>
                <span className="text-red-600">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 py-4 bg-white text-gray-700 border-t text-sm sm:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default FaqSection;
