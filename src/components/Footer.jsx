import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="h-fit flex flex-col items-center text-center bg-[#f8e3c0]">
      <div className="lg:flex lg:py-5">
        <div className=" flex flex-col gap-1 px-10 lg:px-0 py-2 lg:items-center">
          <h1
            className=" text-[3.1rem] lg:text-4xl xl:text-5xl text-[#DD721D] font-semibold relative flex justify-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            OD Fulawala
          </h1>
          <p
            className="text-[1.2rem] w-[80%]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            "Fresh pooja flowers delivered to your doorstep every morning"
          </p>
          <ul className="flex gap-5 justify-center">
            <li>
              <i className="ri-whatsapp-line text-4xl cursor-pointer"></i>
            </li>
            <li>
              <i className="ri-instagram-line text-4xl cursor-pointer"></i>
            </li>
            <li>
              <i className="ri-facebook-circle-fill text-4xl cursor-pointer"></i>
            </li>
          </ul>
        </div>
        <hr className="text-gray-400 w-[90%] lg:hidden" />
        <div className=" flex flex-col gap-3 items-center py-3 lg:px-20 xl:px-25 2xl:px-35 lg:border-x lg:border-x-gray-500">
          <h2
            className="text-[1.3rem] lg:text-[1.8rem]  lg:w-fit lg:text-nowrap font-bold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Quick Links
          </h2>
          <ul className=" flex flex-col items-start text-[1.3rem] gap-2">
            <li className="list-disc ">Home</li>
            <li className="list-disc">Plans</li>
            <li className="list-disc">Contact</li>
          </ul>
        </div>
        <hr className="text-gray-400 w-[90%] lg:hidden" />
        <div className="flex flex-col items-center lg:items-start px-15 lg:px-8 xl:px-23 gap-2 py-3">
          <h2
            className="text-2xl lg:text-3xl text-start font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Order or Enquire <br /> on Whatsapp
          </h2>
          <p className="text-[1rem] lg:text-[1.1rem] text-center font-semibold lg:text-start">
            Choose a plan or message us directly to subscribe
          </p>
          <Button message="Chat on Whatsapp" color="#3AA658" />
        </div>
      </div>
      <hr className="text-gray-400 w-full" />
      <div
        className="font-semibold py-5 lg:flex lg:justify-between lg:w-full lg:px-10 xl:px-15"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <p>© 2026 OD Fulawala. All rights reserved.</p>
        <p>Orders and subscription are handled through Whatsapp.</p>
      </div>
    </div>
  );
};

export default Footer;
