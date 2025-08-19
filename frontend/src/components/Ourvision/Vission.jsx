import React from "react";
import ceo from '../../images/shaheer.png'
const VisionSection = () => {
  const visionaries = [
    {
      id: 1,
      name: "Muhammad Shaheer",
      image: ceo ,// replace with your image path
      post:'CEO & Founder'
    },
    
  ];

  return (
    <div className="w-full">
      {/* Our Vision Section */}
      <section className="text-center py-12 px-4 bg-white">
        <h2 className="text-3xl font-bold">
          OUR <span className="text-red-500">VISION</span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          To be the vanguard of digital transformation, empowering businesses
          worldwide to thrive and flourish in the ever-evolving technological
          landscape. We are committed to delivering cutting-edge solutions that
          inspire growth, foster innovation, and make a lasting impact.
        </p>
      </section>

      {/* Our Visionaries Section */}
      <section className="bg-gray-50 py-12 px-4">
        <h2 className="text-center text-3xl font-bold">
          MEET OUR <span className="text-red-500">VISIONARIES</span>
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-10">
          {visionaries.map((person) => (
            <div
              key={person.id}
              className="bg-white p-4 rounded-xl shadow-md w-64 text-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-full rounded-lg"
              />
              <h3 className="mt-4 font-semibold text-lg">{person.name}</h3>
              <p className="text-gray-600">{person.post}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisionSection;
