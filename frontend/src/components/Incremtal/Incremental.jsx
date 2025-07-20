import React from "react";
import CountUp from "react-countup";

const stats = [
  { label: "Happy Clients", target: 120 },
  { label: "Employees", target: 35 },
  { label: "Projects Completed", target: 85 },
  { label: "Years of Experience", target: 10 },
];

const CompanyStats = () => {
  return (
    <section className="bg-white lg:py-2 lg:pb-16 pb-5 px-4">
      <div
        className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center"
        data-aos="fade-up"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 bg-gradient-to-tr from-white to-red-100 rounded-lg"
          >
            <h3 className="text-4xl font-bold text-red-600">
              <CountUp
                start={0}
                end={stat.target}
                duration={4}
                suffix="+"
                enableScrollSpy
                scrollSpyOnce={false}
              >
                {({ countUpRef }) => <span ref={countUpRef}></span>}
              </CountUp>
            </h3>

            <p className="text-gray-600 font-medium mt-2 text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStats;
