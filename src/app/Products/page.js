"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./shop.css";
import Newsletter from "@/components/newsletter/newsletter";
import Footer from "@/components/footer/Footer";

export  default  function ProductPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>

    <section className="product-page">
      <h1 className="page-title" data-aos="fade-up">Our Product Categories</h1>

      {/* Scooters Section */}
      <div className="product-category" data-aos="fade-right">
        <h2>Scooters</h2>
        <div className="sub-category">
          <div className="sub-category-card">
            <img src="/images/shs.jpg" alt="Second-Hand Scooters" />
            <h3>Second-Hand Scooters</h3>
            <p>Price Range: $450 - $800</p>
          </div>
          <div className="sub-category-card" >
            <img src="/images/bnm.jpg" alt="Brand-New Scooters" />
            <h3>Brand-New Scooters</h3>
            <p>Price Range: $900 - $1800</p>
          </div>
          <div className="sub-category-card">
            <img src="/images/lms.webp" alt="Luxury Scooters" />
            <h3>Luxury Scooters</h3>
            <p>Price Range: $2000 - $2800</p>
          </div>
        </div>
      </div>

      {/* Wheelchairs Section */}
      <div className="product-category" data-aos="fade-right">
        <h2>Wheelchairs</h2>
        <div className="sub-category">
          <div className="sub-category-card">
            <img src="/images/shw.jpg" alt="Second-Hand Wheelchairs" />
            <h3>Second-Hand Wheelchairs</h3>
            <p>Price Range: $150 - $400</p>
          </div>
          <div className="sub-category-card">
            <img src="/images/bnw.jpg" alt="Brand-New Wheelchairs" />
            <h3>Brand-New Wheelchairs</h3>
            <p>Price Range: $450 - $900</p>
          </div>
          <div className="sub-category-card">
            <img src="/images/bnw.webp" alt="Luxury Wheelchairs" />
            <h3>Luxury Wheelchairs</h3>
            <p>Price Range: $1000 - $2000</p>
          </div>
        </div>
      </div>

      {/* Spare Parts Section */}
      <div className="product-category" data-aos="fade-right">
        <h2>Spare Parts</h2>
        <div className="sub-category">
          <div className="sub-category-card">
            <img src="/images/ssp.jpg" alt="Scooter Parts" />
            <h3>Scooter Parts</h3>
          </div>
          <div className="sub-category-card">
            <img src="/images/wsp.jpeg" alt="Wheelchair Parts" />
            <h3>Wheelchair Parts</h3>
          </div>
          <div className="sub-category-card">
            <img src="/images/all.jpg" alt="General Parts" />
            <h3>General Parts</h3>
          </div>
        </div>
      </div>

    </section>
    <Newsletter />
      <Footer />
    </>
  );
}

