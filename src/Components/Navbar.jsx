import React, { useState } from "react";

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);
  const [active, setActive] = useState("Refer");
  const buttons = ["Refer", "Benefits", "FAQs", "Support"];


  return (
    <>
<nav className="flex items-center justify-between bg-white  px-6 py-3 relative m-3">

        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/logo.webp"
            alt="Accredian Logo"
            className="h-8 w-auto ml-20"
          />

          {/* Courses Dropdown */}
          <div className="relative">
            <button
              className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setDropDown(!dropdown)}
            >
              Courses
              <span className="ml-2">
                <img
                  src="https://img.icons8.com/?size=100&id=15810&format=png&color=ffffff"
                  alt="Dropdown Icon"
                  width={10}
                />
              </span>
            </button>
            {dropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Data Science
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  DevOps
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Refer & Earn
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Resources
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            About Us
          </a>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="text-black font-medium rounded-lg text-sm px-5 py-2.5 bg-gray-300 hover:bg-gray-400">
            Login
          </button>
          
          {/* Try for free Button (External Link) */}
          <a
            href="https://trial.accredian.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mr-20"
          >
            Try for free
          </a>
        </div>
      </nav>

      {/* Button Group  */}
      
<div className="flex space-x-4 bg-blue-100 rounded-full p-2  w-fit mx-auto m-5">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => setActive(btn)}
          className={`relative px-6 py-2 rounded-full text-sm font-medium 
            ${active === btn ? "text-blue-600" : "text-gray-600 hover:text-blue-600"}
            after:absolute after:bottom-0 after:left-1/2 after:w-1 after:h-1 after:bg-blue-600 after:rounded-full
            after:transition-all after:duration-300 after:transform after:-translate-x-1/2
            ${active === btn ? "after:opacity-100 after:mt-1" : "after:opacity-0 group-hover:after:opacity-100"}
          `}


        >
          {btn}
        </button>
      ))}
    </div>



    </>
  );
};

export default Navbar;
