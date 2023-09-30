import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className="bg-white-500 p-4  border-b border-solid border-b-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section */}
        <div className="flex gap-x-[0.625rem] items-center">

                    <img
            src="./images/bluelogo.svg"
            alt="Logo"
            className=" ml-12"
          />
                  <p className=" font-inter font-[700] text-[1rem] leading-[1.20rem] text-#100A42">
          HelpMeOut
        </p>


        </div>

        {/* Middle Section */}
        <div className="text-center">
          <Link to="#features" className="text-#000 text-lg font-semibold ml-8">
            Features
          </Link>
          <a href="#" className="text-#000 text-lg font-semibold ml-8">
            How It Works
          </a>
        </div>

        {/* Right Section */}
        <div>
                      <Link to="/signup" className="text-#120B48 text-lg font-semibold mr-12">
            Get Started
          </Link>

        </div>
      </div>
    </nav>


    </>
    
  );
};

export default Navbar;
