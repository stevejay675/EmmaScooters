// src/components/intro/intro.js
"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { motion } from "framer-motion";
import "./intro.css";

// Image imports for Next.js (from the public directory)
const introData = [
  {
    image: "intro1.jpeg", // Image path inside the public folder
    title: "Mobility Scooters",
    description: "Explore our range of mobility scooters designed for enhanced freedom and independence.",
  },
  {
    image: "introwc1.jpg", // Image path inside the public folder
    title: "Electric Wheelchairs",
    description: "Our electric wheelchairs offer comfort, stability, and control for seamless mobility.",
  },
  {
    image: "prm1.jpg", // Image path inside the public folder
    title: "Boost Your Productivity",
    description: "Leverage cutting-edge technology to improve your day-to-day efficiency and comfort.",
  },
];

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-container">
        <div className="intro-title">
          <h2>Enhance Your Mobility with Our Products</h2>
        </div>
        <div className="intro-grid">
          {introData.map((item, index) => (
            <motion.div
              key={index}
              className="intro-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={`images/${item.image}`}
                alt={item.title}
                width={400}
                height={300}
                className="intro-image"
              />
              <h3 className="intro-card-title">{item.title}</h3>
              <p className="intro-card-description">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
