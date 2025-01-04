import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black shadow-inner py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Section 1: About Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are a leading e-commerce platform offering a wide range of products at
            unbeatable prices. Customer satisfaction is our priority.
          </p>
        </div>

        {/* Section 2: Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#faq" className="hover:text-gray-400">FAQs</a>
            </li>
            <li>
              <a href="#returns" className="hover:text-gray-400">Returns</a>
            </li>
            <li>
              <a href="#support" className="hover:text-gray-400">Support</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2">
            <li>
              <a href="#electronics" className="hover:text-gray-400">Electronics</a>
            </li>
            <li>
              <a href="#fashion" className="hover:text-gray-400">Fashion</a>
            </li>
            <li>
              <a href="#home" className="hover:text-gray-400">Home & Living</a>
            </li>
            <li>
              <a href="#beauty" className="hover:text-gray-400">Beauty</a>
            </li>
            <li>
              <a href="#sports" className="hover:text-gray-400">Sports</a>
            </li>
          </ul>
        </div>

        {/* Section 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-gray-800 border-2 border-black outline-none"
            />
            <button
              type="submit"
              className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-cyan-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Section 5: Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} E-Commerce Platform. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
