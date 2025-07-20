import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen mt-32 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          data-aos="fade-up"
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold uppercase">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            We’re here to help! Reach out to our team for any inquiries or
            collaborations.
          </p>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80"
            alt="Contact Us"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 uppercase">
            Why <span className="text-red-500 uppercase">Contact Us?</span>
          </h2>
          <p className="text-gray-600 mb-4">
            Whether you have a question about our services, need support, or
            want to discuss a project, we’re always ready to help you succeed.
          </p>
          <p className="text-gray-600">
            Our team is committed to providing fast, reliable, and personalized
            assistance for all your needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2
          data-aos="zoom-in"
          className="text-3xl font-bold text-center uppercase text-gray-800 mb-10"
        >
          Our <span className="text-red-500 uppercase">Contact Details</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div
            data-aos="zoom-in-up"
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <FaPhoneAlt className="text-red-500 text-3xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            <p className="text-gray-600">+447961675363</p>
          </div>
          <div
            data-aos="zoom-in-up"
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <FaEnvelope className="text-red-500 text-3xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            <p className="text-gray-600">info@devmotive.com</p>
          </div>
          <div
            data-aos="zoom-in-up"
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <FaMapMarkerAlt className="text-red-500 text-3xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            <p className="text-gray-600">
              Headquarters: London, United Kingdom Office #12
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            className="bg-white p-6 rounded-xl shadow hover:scale-105 transition"
          >
            <FaClock className="text-red-500 text-3xl mb-3 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800">Hours</h3>
            <p className="text-gray-600">Mon - Fri: 24 - 7</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-64">
        <iframe
          src="https://maps.google.com/maps?q=United%20Kingdom&t=&z=6&ie=UTF8&iwloc=&output=embed
"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="map"
        ></iframe>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 text-white py-16 text-center">
        <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4 uppercase">
          Let’s Collaborate!
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-2xl mx-auto text-lg"
        >
          Whether you’re starting a new project or need expert consultation,
          we’re just a call or email away.
        </p>
      </section>
    </div>
  );
}
