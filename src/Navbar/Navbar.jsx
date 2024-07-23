import React, { useState } from "react";
import "./Navbar.css";
import img1 from "../../src/assets/1.png";
// import { Link } from "react-router-dom";
import Logo from "../../src/assets/madasky-trans.png";

import NavLinks from "./NavLinks";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="flex items-center font-medium justify-around ">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between items-center">
  <div className="flex items-center">
    <img src={Logo} alt="logo" className="md:cursor-pointer h-10" />
    <div className="ml-3 text-white">
  <div className="flex items-baseline space-x-2">
    <h1 className="text-xl font-bold font-baskerville">MADASKY</h1>
    <span className=" text-xl font-baskerville-old-face">Consulting</span>
  </div>
  <p className="text-sm italic font-valencia-serial">Redefining Excellence</p>
</div>

  </div>
</div>
  <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
    <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
  </div>
</div>
          <ul className="md:flex hidden items-center  main_Nav_Bar">
            <NavLinks />
          </ul>

          {/* Mobile nav */}
          <ul
            className={`
            md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
            duration-500 ${open ? "left-0" : "left-[-100%]"}
            `}
          >
            <NavLinks />
          </ul>
        </div>
      </nav>

      <div className="bg-custom-radial p-5">
        <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center overflow-hidden">
          <div className="w-full md:w-[55%] pl-0 md:pl-9 mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl mb-3 font-bold text-white">
              Together, we have what it takes
            </h1>
            <p className="text-white text-sm md:text-base mb-6 leading-relaxed">
              At ,Madasky we don't just point the way—we help you get where you
              need to go. From transforming your performance to powering new
              growth, we turn your ambition into action.
            </p>
            <div>
              <button className="bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-[45%] flex justify-center md:justify-end overflow-hidden">
            <img
              src={img1}
              alt="Madasky visual"
              className="w-full md:w-[90%] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
