import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaHandsHelping, FaRocket, FaGlobe } from "react-icons/fa";
import { NavLink, Link} from "react-router-dom";

export default function MissionPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  const values = [
    {
      icon: <FaBullseye className="text-red-500 text-4xl" />,
      title: "Our Mission",
      description:
        "To deliver cutting-edge software solutions and services that empower businesses to thrive in a competitive digital landscape.",
    },
    {
      icon: <FaHandsHelping className="text-red-500 text-4xl" />,
      title: "Our Values",
      description:
        "We prioritize trust, innovation, and collaboration, ensuring that every project is handled with excellence and transparency.",
    },
    {
      icon: <FaRocket className="text-red-500 text-4xl" />,
      title: "Our Vision",
      description:
        "To become a global leader in software innovation, helping companies accelerate their digital transformation journey.",
    },
    {
      icon: <FaGlobe className="text-red-500 text-4xl" />,
      title: "Global Impact",
      description:
        "We aim to create solutions that not only solve business challenges but also have a positive impact on society worldwide.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen mt-32 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          data-aos="fade-up"
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-red-500">Mission</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Building innovative software solutions that redefine possibilities
            and empower businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
            alt="Our Mission"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">
            <span className="text-red-500">WHY</span> WE EXIST
          </h2>
          <p className="text-gray-600 mb-4">
            At Devmotive, we believe technology is the key to unlocking new
            opportunities. Our mission is not just to build software but to
            create meaningful digital experiences that solve real-world
            challenges.
          </p>
          <p className="text-gray-600">
            From startups to enterprises, we help organizations harness the
            power of modern technology to achieve sustainable growth.
          </p>
        </div>
      </section>

      {/* Mission Values */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2
          data-aos="zoom-in"
          className="text-3xl font-bold text-center text-gray-800 mb-10"
        >
          OUR <span className="text-red-500">CORE VALUES</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl hover:scale-105 transition transform"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 text-white py-16 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold mb-4 uppercase"
        >
          Join Us in Shaping the Future
        </h2>
        <p data-aos="fade-up" data-aos-delay="200" className="max-w-2xl mx-auto text-lg">
          Whether you are looking for cutting-edge software solutions or seeking
          a reliable partner to grow with, Devmotive is committed to making your
          vision a reality.
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <NavLink to={'/contactpage'}><button className="mt-6 bg-white text-red-500 hover:bg-red-600 hover:border hover:border-white hover:text-white px-6 py-3 font-semibold rounded shadow-md transition">
            Contact Us
          </button></NavLink>
          
        </div>
      </section>
    </div>
  );
}
