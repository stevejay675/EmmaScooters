'use client'

import React, { useState } from 'react';
import './faq.css'; // Custom CSS for styling

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: 'What services do you offer?', answer: 'We offer a wide range of services including sales of mobility scooter , Electric Wheelchairs, and Spare parts of these products.' },
    { question: 'How can I order a product?', answer: 'You can order directly through our assistant on email, telegram or facebook messenger' },
    { question: 'Do you offer delivery services?', answer: 'Yes, we offer international and nationwide delivery. Delivery times depend on your location.' },
    { question: 'Can I track my order?', answer: 'Yes, once your order is shipped, you will receive a tracking number via email.' },
    { question: 'Do you offer warranties on your products?', answer: 'All of our mobility scooters come with a one-year warranty on parts and labor.' },
    { question: 'How can I contact customer support?', answer: 'You can reach our customer support through Email, telegram or messenger using the  floating icon at the bottom right' },
    { question: 'What are your payment options?', answer: 'We accept all major credit cards, PayPal, and bank transfers.' },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleToggle(index)}
            >
              {item.question}
              <span className="faq-icon">{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQSection;
