import React from "react";
import krishna from '../../assets/krishna.png'
import arun from '../../assets/arun.png'
import mansi from '../../assets/mansi.png'
import namu from '../../assets/namu.png'
import om from '../../assets/om.png'
import sangamesh from '../../assets/sangamesh.png'

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?ga=GA1.1.1833494961.1734070854&semt=ais_hybrid')" }}>
        <h1 className="text-white text-4xl md:text-5xl font-bold">About Us</h1>
      </div>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto p-6 md:p-10">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mission</h2>
        <p className="text-lg text-center mb-6">
          At E-Shop, our mission is to deliver exceptional shopping experiences by providing high-quality products at affordable prices. 
          We are committed to innovation, sustainability, and customer satisfaction.
        </p>
        <img
          src="https://img.freepik.com/free-photo/top-view-desk-with-black-friday-gifts_23-2148288216.jpg?ga=GA1.1.1833494961.1734070854&semt=ais_hybrid"
          alt="Mission"
          className="rounded-lg mx-auto shadow-lg w-3/4 h-96 sm:w-3/4 lg:w-1/2"
        />
      </section>

      {/* Team Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Team Member */}
            <div className="text-center">
              <img
                src={krishna}
                alt="Team Member 1"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Krishna vk</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <img
                src={mansi}
                alt="Team Member 2"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">manshi</h3>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>
            <div className="text-center">
              <img
                src={namu}
                alt="Team Member 3"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Namarata More</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <img
                src={om}
                alt="Team Member 3"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Omprakash Biradar</h3>
              <p className="text-gray-600"> marketing Management</p>
            </div>
            <div className="text-center">
              <img
                src={arun}
                alt="Team Member 3"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Arun Bhure</h3>
              <p className="text-gray-600">Product Management</p>
            </div>
            <div className="text-center">
              <img
                src={sangamesh}
                alt="Team Member 3"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Sangamesh Panchal</h3>
              <p className="text-gray-600">Drug Dealer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
     
    </div>
  );
};

export default About;
