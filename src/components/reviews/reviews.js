"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components for React
import { Navigation, Pagination, A11y } from "swiper/modules"; // Import necessary Swiper modules
import "swiper/css"; // Import Swiper's basic CSS
import "swiper/css/navigation"; // Import Swiper's navigation module CSS
import "swiper/css/pagination"; // Import Swiper's pagination module CSS
import "./reviews.css"; // Your custom CSS

const reviews = [
  {
    name: "Robert Brown",
    image: "/images/prm2.png",
    rating: 5,
    review:
      "Excellent service! The mobility scooter I bought has made a huge difference in my life. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "/images/p3.jpeg",
    rating: 4,
    review:
      "The electric wheelchair I purchased is top-notch. I couldn't be happier with my purchase.",
  },
  {
    name: "Alice Brown",
    image: "/images/p2.jpg",
    rating: 5,
    review:
      "Fantastic customer support and great products! I would highly recommend them to anyone.",
  },
  {
    name: "Michael Johnson",
    image: "/images/p4.jpeg",
    rating: 5,
    review:
      "The best purchase I've ever made. The mobility scooter works perfectly, and the support team is amazing.",
  },
  {
    name: "Laura Davis",
    image: "/images/p5.jpeg",
    rating: 4,
    review:
      "I love my new electric wheelchair! It's so easy to use and has improved my daily life significantly.",
  },
  {
    name: "Emily Wilson",
    image: "/images/p6.jpeg",
    rating: 5,
    review:
      "Incredible service and high-quality scooters. I'm beyond satisfied with the entire experience.",
  },
  {
    name: "Sarah Taylor",
    image: "/images/p7.jpeg",
    rating: 4,
    review:
      "My mobility scooter has been a game-changer. Great product and the team was very helpful.",
  },
  {
    name: "David Miller",
    image: "/images/p8.jpeg",
    rating: 5,
    review:
      "The support I received was outstanding. They really care about their customers and their needs.",
  },
  {
    name: "Emily White",
    image: "/images/p9.jpeg",
    rating: 5,
    review:
      "I'm very impressed with both the product quality and the customer service. Definitely recommend this shop.",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2>What Our Customers Say</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]} // Pass the necessary modules here
        spaceBetween={30} // Space between slides
        slidesPerView={1} // Show 1 slide per view by default
        navigation // Enable navigation
        pagination={{ clickable: true }} // Enable pagination
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 }, // Show 2 slides on medium screens
          1024: { slidesPerView: 3 }, // Show 3 slides on larger screens
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <img src={review.image} alt={review.name} className="user-image" />
              <h3>{review.name}</h3>
              <div className="stars">
                {Array(review.rating)
                  .fill("⭐")
                  .map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
              </div>
              <p>{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
