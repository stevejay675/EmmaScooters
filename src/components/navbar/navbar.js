"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa"; // User icon
import { auth } from "../../firebase/firebase"; // Import your Firebase auth
import { signOut } from "firebase/auth"; // For logging out
import Sidebar from "../sidebar/sidebar";
import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null); // State for user

  // Handle authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null); // Reset user state after logout
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="#"><h1>A&J Mobility</h1></a>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="right-links">
            <div className="navbar-links">
              <a href="/">Home</a>
              <a href="#about">About</a>
              <Link href="/Blogs">Blog</Link>
            </div>

            <div className="right-ham">
           
             <Link href='/Order' className="order-now">Order</Link>
              {/* User Icon with hover */}
              <div className="user-icon">
                <FaUserCircle size={24} />
                <div className="user-dropdown">
                  {user ? (
                    <div>
                      <p>{user.email}</p>
                      <button onClick={handleLogout} className="logout-button">Logout</button>
                    </div>
                  ) : (
                    <div>
                      <p>You are logged out</p>
                      <Link href="/Login"><button className="login-button">Login</button></Link>
                    </div>
                  )}
                </div>
              </div>

             
              
              {/* Hamburger Menu */}
              <div className="navbar-hamburger" onClick={toggleSidebar}>
                <FaBars />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Navbar;
