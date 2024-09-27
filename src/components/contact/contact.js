"use client";

import React, { useEffect } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info" data-aos="fade-right">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you! Whether you have a question about our products or services, or need support, feel free to get in touch.</p>
          <div className="contact-details">
            <p><strong>Email:</strong> emmascooters.info@gmail.com</p>
          </div>

        
        </div>

        <div className="map" data-aos="fade-up">
          <img src="/images/map.png" alt="Map" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
