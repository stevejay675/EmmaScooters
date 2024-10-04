// pages/order.js
import React from 'react';
import Image from 'next/image';
import './order.css'; // Import the global CSS file
import TelegramChatWidget from '@/components/widget/TelegramChatWidget';
import Newsletter from '@/components/newsletter/newsletter';
import Footer from '@/components/footer/Footer';
import ContactSection from '@/components/contact/contact';

const Order = () => {
  return (

    <>
    <div className="order-container">
      <section className="order-section">
        <ContactSection />
        <h1>How to Order</h1>
        <p>Ordering from EmmaGo is simple, safe, and reliable. Follow these easy steps:</p>
        <ul className="order-steps">
          <li>fill the contact form with the product you want or</li>
          <li>1. Click on the floating message icon at the bottom right.</li>
          <li>2. Choose your preferred messaging platform (Telegram, Messenger, or Email).</li>
          <li>3. Message us with the product you want to order, along with your delivery details.</li>
          <li>4. Our team will confirm the order and arrange delivery.</li>
        </ul>
      </section>

      

      <section className="order-section">
        <h2>Our Categories</h2>
        <div className="product-grid">
          <div className="product">
            <Image src="/images/parts.jpg" alt="Scooter 1" width={200} height={150} />
            <h3>Spare Parts</h3>
            <p>We offer a wide range of spare parts for all types of mobility scooters and electric wheelchairs. Whether you need batteries, tires, motors, or any other replacement part, we have you covered with high-quality, reliable parts to keep your equipment running smoothly. Our spare parts are sourced from trusted manufacturers to ensure longevity and performance, providing the best support for your mobility needs.</p>
          </div>
          <div className="product">
            <Image src="/images/scooters.jpg" alt="Scooter 2" width={200} height={150} />
            <h3>Mobility Scooters</h3>
            <p>We sell both brand-new and partially used mobility scooters, offering options that suit various needs and budgets. Our scooters are designed for comfort, ease of use, and reliability, making them perfect for both indoor and outdoor use. With a range of models that cater to different mobility levels, we ensure that everyone finds the right solution for their lifestyle.</p>
          </div>
          <div className="product">
            <Image src="/images/wchairs.webp" alt="Wheelchair 1" width={200} height={150} />
            <h3>Electric Wheelchairs</h3>
            <p>At EmmaGo, we provide a wide selection of electric and manual wheelchairs, offering enhanced mobility for individuals with varying needs. Our wheelchairs are ergonomically designed for maximum comfort and durability, ensuring users can move freely and confidently. From lightweight, portable options to advanced models with cutting-edge technology, we have the perfect wheelchair to fit your mobility requirements.</p>
          </div>
         
        </div>
        <TelegramChatWidget />
      </section>


      <section className="order-section">
        <h2>Why Choose EmmaGo?</h2>
        <p>
          At EmmaGo, we pride ourselves on delivering top-notch mobility scooters and electric wheelchairs to customers around the world. 
          With years of expertise, we ensure all our products meet the highest standards of quality and performance.
        </p>
        <p>
          We partner with the best global delivery networks to ensure that your product reaches you as quickly as possible. 
          We also offer extensive customer support to guide you through the process.
        </p>
      </section>


      <section className="order-section">
        <h2>Payment Methods</h2>
        <p>We accept a wide range of payment methods for your convenience:</p>
        <div className="payment-methods">
          <Image src="/images/paypal.png" alt="PayPal" width={60} height={60} />
          <Image src="/images/bank.jpg" alt="Bitcoin" width={60} height={60} />
          <Image src="/images/btc.png" alt="Bank Transfer" width={60} height={60} />
        </div>
      </section>

      
    </div>

    <TelegramChatWidget />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Order;
