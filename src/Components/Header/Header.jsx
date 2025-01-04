import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import { MdShoppingCartCheckout } from "react-icons/md";
import { NavLink } from "react-router-dom"
import { auth } from "../../FirebaseAuth/FirebaseAuth";

const Header = ({ userName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
  auth.signOut().then((res)=> console.log(res))
  }

  return (
    <nav className="bg-white text-black shadow-md z-50 fixed top-0 left-0  w-full">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">E-Commerce</div>

        {/* Hamburger menu for small screens */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

        {/* Links */}
        <ul
          className={`absolute md:static top-0 left-0 w-40  md:w-auto font-bold bg-white  md:bg-transparent md:flex md:items-center md:gap-6 transition-transform duration-300  md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            
        >
          <li className="md:inline-block p-4 md:p-0 text-center">
            <NavLink
              to="/"
              className={({ isActive }) => `duration-200 ${isActive ? "text-red-700" : "text-black"}`}
            >
              Home
            </NavLink>
          </li>
          <li className="md:inline-block p-4 md:p-0 text-center">
            <NavLink
              to="/product"
              className={({ isActive }) => `duration-200 ${isActive ? "text-red-700" : "text-black"}`}
            >
              Products
            </NavLink>
          </li>
          <li className="md:inline-block p-4 md:p-0 text-center">
            <NavLink
              to="/Trands"
              className={({ isActive }) => `duration-200 ${isActive ? "text-red-700" : "text-black"}`}
            >
              Trands
            </NavLink>
          </li>
          <li className="md:inline-block p-4 md:p-0 text-center">
            <NavLink
              to="/about"
              className={({ isActive }) => `duration-200 ${isActive ? "text-red-700" : "text-black"}`}
            >
              About
            </NavLink>
          </li>
          <li className="md:inline-block p-4 md:p-0 text-center">
            <NavLink
              to="/contact"
              className={({ isActive }) => `duration-200 ${isActive ? "text-red-700" : "text-black"}`}
            >
              Contact
            </NavLink>
          </li>

          {/* Buttons */}
          <li className="md:inline-block p-4 md:p-0 text-center">
            {
              userName ? (
                <div>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100" onClick={handleLogout}>
                    Logout
                  </button>
                  <span className="text-xl font-bold text-black">{userName}</span>
                </div>
              ) : (<NavLink to='/signup' >
                <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
                  login
                </button>
              </NavLink>)
            }
            
          </li>
          <li className="md:inline-block p-4 md:p-0 text-center">
            <NavLink to='/cart' >
              <button className=" px-4 py-1 rounded text-black hover:text-gray-600">
                <MdShoppingCartCheckout size={24} />

              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
