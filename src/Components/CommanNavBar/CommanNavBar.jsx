import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CommmanNavBar.css";
import { CiSearch } from "react-icons/ci";
import Logo from "../../../src/assets/madasky-trans.png";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function CommonNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="common-navbar">
      <div className="navbar-container">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <Link to="/">
          <div className="flex items-center">
            <img
              src={Logo}
              alt="logo"
              className="md:cursor-pointer h-10 change"
            />
            <div className="ml-3">
              <div className="flex items-baseline space-x-2">
                <h1 className="text-xl font-bold font-baskerville">MADASKY</h1>
                <span className=" text-xl font-baskerville-old-face">
                  Consulting
                </span>
              </div>
              <p className="text-sm italic font-valencia-serial">
                Redefining Excellence
              </p>
            </div>
          </div>
        </Link>

        <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <div className="dropdown">
            <Link to="/aboutus">
              <span>Overview</span>
            </Link>
          </div>
          <div className="dropdown">
            <span>Who we are</span>

            <div className="dropdown-content ">
              <Link to="/our-leadership">Our Leadership</Link>
              <Link to="/purpose-mission-values">
                Purpose, Mission & Values
              </Link>
              <Link to="/our-aspiration">Our Aspiration</Link>
              <Link to="/our-history">Our History</Link>
            </div>
          </div>

          <div className="dropdown">
            <span>How we work</span>
            {/* <MdKeyboardArrowDown /> */}
          </div>
          {/* <Link to="/alumni">Alumni</Link> */}
          <Link to="/media">Media</Link>
          <Link to="/blog">MaDasky Blog</Link>
        </div>

        <div className="navbar-right">
          <Link to="/signin" className="nav-button">
            Sign In
          </Link>
          <span className="nav-separator">|</span>
          <Link to="/subscribe" className="nav-button">
            Subscribe
          </Link>
          <button className="search-icon">
            <CiSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
