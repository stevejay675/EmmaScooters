// src/components/about/AboutUs.js
"use client";
import React from "react";
import Image from "next/image"; // Next.js image import
import "./aboutus.css"; // Import CSS for About Us section

const AboutUs = () => {
  return (
    <section className="about-us" id="about">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={`images/about2.jpg`}
          width={400}
          height={500} 
          alt="About Us"
           className="about-image" />
        </div>

        {/* Title and Paragraph on the right */}
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            At EmmaGo, we believe that mobility should be accessible to
            everyone. Our products—ranging from mobility scooters to electric
            wheelchairs—are designed with one mission in mind: to empower people
            with enhanced independence, safety, and comfort.
          </p>
          <p>
          We are proud to partner with the best delivery systems worldwide, 
          ensuring that no matter where you are, your product arrives quickly
           and securely. Our global reach combined with fast, reliable delivery 
           makes sure you never have to wait long to regain your independence.
           delivery available for individuals based in: USA, UK(ENGLAND, LONDON, SCOTLAND), AUSTRALIA.
          </p>
          <p>
            With years of expertise in providing mobility solutions, we ensure
            our customers receive personalized support, high-quality products,
            and seamless service. We are committed to helping you regain your
            freedom, move with confidence, and enjoy life to the fullest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
