// Layout.jsx
import React from "react";
import "./Layout.css";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}
