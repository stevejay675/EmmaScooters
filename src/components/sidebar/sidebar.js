// src/components/sidebar/sidebar.js
import React from "react";
import { FaTimes } from "react-icons/fa";  // Close "X" icon
import "./sidebar.css"; // Import the CSS for Sidebar
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Dark overlay for the background when sidebar is visible */}
      <div className={`overlay ${isOpen ? "visible" : ""}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        {/* Close button */}
        <div className="sidebar-close" onClick={toggleSidebar}>
          <FaTimes />
        </div>
        <div className="sidebar-content">
          <Link href='/' onClick={toggleSidebar}>Home</Link>
          <a href="#about" onClick={toggleSidebar}>About</a>
          <a href="#services" onClick={toggleSidebar}>Services</a>
          <a href="#contact" onClick={toggleSidebar}>Contact</a>
          <Link href='Blogs'>Blogs</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
