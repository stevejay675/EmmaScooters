"use client";

import React, { useEffect, useState } from "react";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { collection, addDoc } from "firebase/firestore"; // Firebase Firestore methods
import { db } from "../../firebase/firebase"; // Import Firebase configuration

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // State to track form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Add a new document to Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        country: formData.country,
        message: formData.message,
        timestamp: new Date(),
      });
      setSuccess(true); // Show success message
      setFormData({ name: "", email: "", country: "", message: "" }); // Clear the form
    } catch (err) {
      setError("Error sending message. Please try again.");
      console.error("Error adding document: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="contact-form" data-aos="fade-left">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="country"
                placeholder="Your Country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">Message sent successfully!</p>}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="map" data-aos="fade-up">
          <img src="/images/map2.jpg" alt="Map" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
