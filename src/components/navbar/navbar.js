// src/components/navbar/navbar.js
"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";  // Hamburger menu icon
import Sidebar from "../sidebar/sidebar"; // Import Sidebar component
import "./navbar.css"; // Importing the CSS for Navbar
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggling the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="#"><h1>EmmaGo</h1></a>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="right-links">
          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
            <Link href='Blogs'>Blog</Link>
          </div>

          
          <div className="right-ham">
             {/* Hamburger menu for Mobile */}
          <a className="order-now">Order Now</a>
          <div className="navbar-hamburger" onClick={toggleSidebar}>
            <FaBars />
          </div>
          </div>
          </div>

         
        </div>
      </nav>

      {/* Sidebar component with overlay */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
