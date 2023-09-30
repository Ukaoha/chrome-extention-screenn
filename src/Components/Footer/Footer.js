import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full flex gap-x-[24rem] bg-[#120B48] mt-10 px-[7rem] py-[6rem]">
      <div className="flex gap-x-[0.625rem] items-center">
        <img src='./images/whitelogo.svg' alt="logo"  />
        <p className=" font-inter font-[700] text-[1rem] leading-[1.20rem] text-white">
          HelpMeOut
        </p>
      </div>
      <div className="flex gap-x-[13.75rem]">
        <div className="flex flex-col gap-y-[1.625rem]">
          <h3 className="font-sora font-[600] text-[1rem] leading-[1.26rem] text-white">
            Menu
          </h3>
          <Link
            to="/"
            className=" font-workSans font-[400] text-[1rem] leading-[1.26rem] text-white"
          >
            Home
          </Link>
          <Link
            to="#"
            className="  text-[1rem] font-workSans font-[400] leading-[1.26rem] text-white"
          >
            Converter
          </Link>
          <Link
            to="/"
            className=" font-workSans font-[400] text-[1rem] leading-[1.26rem] text-white"
          >
            How it works
          </Link>
        </div>
        <div className="flex flex-col gap-y-[1.625rem]">
          <h3 className=" leading-[1.26rem] text-white font-sora font-[600] text-[1rem]">
            About us
          </h3>
          <Link
            to="/"
            className=" font-workSans font-[400] text-[1rem] leading-[1.26rem] text-white"
          >
            About
          </Link>
          <Link
            to="#"
            className=" font-workSans font-[400] text-[1rem] leading-[1.26rem] text-white"
          >
            Contact Us
          </Link>
          <Link
            to="/"
            className=" font-workSans font-[400] text-[1rem] leading-[1.26rem] text-white"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-y-[1.625rem]">
          <h3 className="font-sora font-[600] text-[1rem] leading-[1.26rem] text-white">
            Screen Record
          </h3>
          <Link
            to="/"
            className=" font-workSans font-[400] text-[1rem] leading-[1.26rem] text-white"
          >
            Browser Window
          </Link>
          <Link
            to="#"
            className=" font-workSans font-[400] text-[1rem] leading-[1.26rem] text-white"
          >
            Desktop
          </Link>
          <Link
            to="/"
            className=" font-workSans font-[400] text-[1rem] leading-[1.26rem] text-white"
          >
            Application
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer