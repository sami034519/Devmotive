import React, { useEffect } from "react";
import background from "../../images/bg5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Reports from "../../images/reports.png";
import Compliance from "../../images/complaince.png";
import Automation from "../../images/automation.gif";
import Strategy from "../../images/strategy.gif";
import salarysheet from "../../images/SALARYSHEET.jpg";
 import taxreturn  from "../../images/taxreturnf.jpg"
 import accountprepare from "../../images/financial_stmt.jpg"
import ReviewsSlider from "../Reviews/Review";

function Finance() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-out",
    });
  }, []);

  return (
    <>
      <div className="relative w-full lg:h-[80vh] h-[300px] overflow-hidden mt-20">
        <img
          loading="lazy"
          src={background}
          alt="Finance & Accounting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex lg:max-w-full max-w-60 flex-col items-start justify-center px-1 lg:px-16">
          <h1 className="text-red-600 text-3xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
            Finance & Accounting
          </h1>
          <h2 className="text-xl lg:text-4xl font-semibold mt-3 animate__animated animate__fadeInLeft animate__delay-1s">
            Clarity. Compliance. Confidence.
          </h2>
          <p className="hidden lg:block text-sm lg:text-lg lg:max-w-xl max-w-64 mt-3 animate__animated animate__fadeInLeft animate__delay-2s">
            Explore expert finance and accounting services tailored for SMEs and enterprises. Powered by ACCA-certified professionals.
          </p>
          <div className="bg-red-700 lg:w-56 w-28 lg:h-[52px] flex flex-col justify-end mt-5 lg:mt-20 rounded animate__animated animate__backInUp animate__delay-2s pt-1">
            <button className="bg-red-600 text-white lg:text-2xl lg:px-6 py-1 lg:py-2 w-full lg:h-12 rounded">
              READ MORE
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center text-xl lg:text-auto text-center lg:text-2xl py-5 lg:pt-20 font-medium text-gray-700 overflow-hidden">
        <h1 data-aos="fade-right">
          DevMotive’s <span className="text-red-600">Finance & Accounting</span> Services
        </h1>
      </div>

      <div className="lg:pl-36 pl-3 lg:max-w-[90%] overflow-hidden">
        <div className="w-full flex justify-center py-3 text-gray-500 text-start">
          <p data-aos="fade-left">
            Our comprehensive accounting and financial services help you stay compliant, organized, and ready for growth. Whether it’s day-to-day bookkeeping or strategic financial planning — DevMotive delivers with accuracy and expertise.
          </p>
        </div>

        <div className="w-full flex justify-start items-center text-2xl py-5 font-medium text-gray-700">
          <h1 data-aos="fade-right">Our Core Services</h1>
        </div>
      </div>

      {/* Bookkeeping */}
      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            BOOKKEEPING & LEDGER MANAGEMENT
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Maintain accurate and well-organized transaction records with expert bookkeeping. We track, manage, and reconcile ledgers to ensure transparent financial documentation.
          </p>
        </div>
        <div>
          <img className="max-w-56" data-aos="zoom-in-up" src={Reports} alt="Bookkeeping" />
        </div>
      </div>

      {/* Salary Sheets */}
      <div className="p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img className="max-w-56" src={salarysheet} data-aos="zoom-in-up" alt="Salary Sheet" />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            MONTHLY SALARY SHEET PREPARATION
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Automate and simplify your payroll processes. We prepare monthly salary statements ensuring accurate deductions, benefits, and statutory compliance.
          </p>
        </div>
      </div>

      {/* Tax Filing */}
      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            VAT FILING & TAX RETURNS
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Be tax-compliant and stress-free. We manage VAT submissions, corporate tax returns, and self-assessment filings to ensure you meet deadlines and avoid penalties.
          </p>
        </div>
        <div>
          <img className="max-w-56" data-aos="zoom-in-up" src={taxreturn} alt="Tax Return" />
        </div>
      </div>

      {/* Payroll */}
      <div className="p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img className="max-w-56" src={Strategy} data-aos="zoom-in-up" alt="Payroll" />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            PAYROLL PROCESSING (UK PAYE & AUTO-ENROLMENT)
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            We provide seamless payroll management for both local and international teams. Our experts ensure timely employee payments, HMRC submissions, and pension auto-enrolment setup.
          </p>
        </div>
      </div>

      {/* Annual Accounts */}
      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            ANNUAL ACCOUNTS PREPARATION
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Get your year-end financials done right. We prepare profit & loss accounts, balance sheets, and statements to meet your local and international regulatory requirements.
          </p>
        </div>
        <div>
          <img className="max-w-56" data-aos="zoom-in-up" src={Reports} alt="Annual Accounts" />
        </div>
      </div>

      {/* Company Formation */}
      <div className="p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img className="max-w-56" src={Compliance} data-aos="zoom-in-up" alt="Company Formation" />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            COMPANY FORMATION & HMRC COMPLIANCE
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Launch your company with confidence. We handle company registration, HMRC setup, and ongoing regulatory filing so you can focus on growth.
          </p>
        </div>
      </div>

      {/* Financial Statements */}
      <div className="bg-slate-50 p-10 my-5 lg:my-12 flex flex-col-reverse lg:flex-row justify-around items-center overflow-hidden">
        <div className="lg:max-w-[60%] w-full">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            FINANCIAL STATEMENTS & BUDGET PLANNING
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Drive smarter decisions with well-structured financial statements and budget forecasts. Our financial modeling helps you plan for growth and manage expenses effectively.
          </p>
        </div>
        <div>
          <img className="max-w-60" data-aos="zoom-in-up" src={accountprepare} alt="Financial Planning" />
        </div>
      </div>

      {/* ACCA Experts */}
      <div className="p-10 lg:my-12 flex lg:flex-row gap-4 flex-col justify-around items-center overflow-hidden">
        <div>
          <img className="max-w-56" src={Automation} data-aos="zoom-in-up" alt="ACCA Certified" />
        </div>
        <div className="lg:max-w-[60%] overflow-hidden">
          <h1 className="text-xl font-medium" data-aos="fade-right">
            SERVICES DELIVERED BY ACCA-CERTIFIED PROFESSIONALS
          </h1>
          <p className="py-10 text-gray-500" data-aos="fade-left">
            Trust your finance to qualified hands. Our accountants are ACCA-certified, offering both expertise and assurance in every service delivered.
          </p>
        </div>
      </div>

      <ReviewsSlider />
    </>
  );
}

export default Finance;
