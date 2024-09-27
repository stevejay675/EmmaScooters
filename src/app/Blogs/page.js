"use client";

import React, { useState } from "react";
import "./blog.css";
import { FaCalendarAlt, FaUser, FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TelegramChatWidget from "@/components/widget/TelegramChatWidget";
import Newsletter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/navbar";
import Banner from "@/components/banner/banner";

const blogs = [
  {
    id: 1,
    title: "Choosing the Best Mobility Scooter",
    date: "September 25, 2024",
    author: "Emma Taylor",
    image: "/images/blog1.jpg",
    description: "Learn the essential factors to consider when choosing the right mobility scooter for daily use.",
    fullText:
      "When choosing a mobility scooter, it's important to consider the size, battery life, speed, and the terrain you'll be using it on. Some models are designed for long-range use, while others are perfect for short trips around town. Make sure to test the comfort and controls before making your final decision.",
    views: "1.8K",
  },
  {
    id: 2,
    title: "Top Electric Wheelchairs for 2024",
    date: "September 20, 2024",
    author: "John Doe",
    image: "/images/blog2.webp",
    description: "Discover the best electric wheelchairs on the market in 2024 and their key features.",
    fullText:
      "In 2024, electric wheelchairs have seen significant advancements in design, battery life, and comfort. From foldable models to those designed for outdoor use, the options are endless. Brands like Permobil and Pride Mobility offer models that combine ease of use with advanced technology.",
    views: "1.2K",
  },
  {
    id: 3,
    title: "Maintaining Your Mobility Scooter",
    date: "September 18, 2024",
    author: "Sarah Smith",
    image: "/images/blog3.png",
    description: "A complete guide to maintaining your mobility scooter for long-lasting performance.",
    fullText:
      "To keep your mobility scooter running smoothly, it's essential to perform regular maintenance. Check the tires, battery, and control systems frequently. Keeping the scooter clean and storing it in a dry place will help extend its lifespan.",
    views: "950",
  },
  {
    id: 4,
    title: "How Electric Wheelchairs Improve Independence",
    date: "September 15, 2024",
    author: "James Green",
    image: "/images/blog4.jpg",
    description: "Learn how electric wheelchairs can significantly improve independence for users.",
    fullText:
      "Electric wheelchairs provide users with greater mobility and independence. Features like joystick controls, adjustable seating, and long battery life allow users to navigate their environments more freely, reducing dependence on caregivers.",
    views: "1.3K",
  },
  {
    id: 5,
    title: "The Best Mobility Solutions for Disabled Patients",
    date: "September 10, 2024",
    author: "Emily White",
    image: "/images/blog5.jpg",
    description: "Explore the best mobility solutions available for disabled and handicapped patients.",
    fullText:
      "From mobility scooters to specialized electric wheelchairs, there are numerous solutions that provide increased comfort and freedom for disabled patients. Customizations like adjustable seats, footrests, and personalized control settings make it easier for users to perform daily tasks independently.",
    views: "900",
  },
  {
    id: 6,
    title: "Are Folding Mobility Scooters Worth It?",
    date: "September 5, 2024",
    author: "Mike Brown",
    image: "/images/blog6.jpg",
    description: "Find out if folding mobility scooters are the right choice for your mobility needs.",
    fullText:
      "Folding mobility scooters are designed for convenience and portability. They are ideal for users who need a compact solution that can be easily transported. However, they may not have the same power or battery life as full-sized models, so it's important to assess your needs before purchasing one.",
    views: "750",
  },
  {
    id: 7,
    title: "A Guide to Electric Wheelchair Safety",
    date: "September 1, 2024",
    author: "Laura Green",
    image: "/images/blog7.webp",
    description: "Learn important safety tips for using electric wheelchairs to prevent accidents.",
    fullText:
      "Safety is paramount when using electric wheelchairs. Make sure to follow guidelines like keeping your wheelchair charged, avoiding wet surfaces, and wearing a seatbelt when necessary. Regularly inspect the wheelchair to ensure it is functioning properly and safely.",
    views: "1.6K",
  },
];

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const closePopup = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="blog-page">
      <Navbar />
      <header className="blog-header">
        <h1 data-aos="fade-down">Mobility and Accessibility Blog</h1>
        <p data-aos="fade-up">Your resource for mobility scooters, electric wheelchairs, and more.</p>
      </header>

      <section className="blog-container">
        {blogs.map((blog) => (
          <div
            className="blog-card"
            key={blog.id}
            onClick={() => handleBlogClick(blog)}
          >
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              
              <h2>{blog.title}</h2>
              <div className="blog-meta">
                <FaCalendarAlt /> <span>{blog.date}</span>
                <FaUser /> <span>{blog.author}</span>
                <FaEye /> <span>{blog.views}</span>
              </div>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </section>

      {selectedBlog && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>X</button>
            <h2>{selectedBlog.title}</h2>
            <p><strong>{selectedBlog.date}</strong> by {selectedBlog.author}</p>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="popup-image" />
            <p className="full-text">{selectedBlog.fullText}</p>
          </div>
        </div>
      )}
      <TelegramChatWidget />
      <Newsletter />
      <Footer />
      <TelegramChatWidget />
    </div>
    
  );
};

export default BlogPage;
