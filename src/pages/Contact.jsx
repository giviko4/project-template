// src/pages/Contact.jsx
import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // დავამატეთ ახალი იკონები
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page container">
      <h1>Get In Touch</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Choose your preferred way to connect with us.
      </p>

      {/* "Send a Message" ფორმის ნაცვლად ვიყენებთ ამ ბარათებს */}
      <div className="contact-actions-grid">
        {/* Email ბარათი */}
        <a href="mailto:contact@fialacafe.ge" className="action-card">
          <FiMail className="action-icon" />
          <h3>Email Us</h3>
          <p>contact@fialacafe.ge</p>
        </a>

        {/* Call ბარათი */}
        <a href="tel:+995555123456" className="action-card">
          <FiPhone className="action-icon" />
          <h3>Call Us</h3>
          <p>+995 555 123 456</p>
        </a>

        {/* Find Us (რუკის) ბარათი */}
        <a 
          href="https://www.google.com/maps/place/Rustaveli+Ave,+T'bilisi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="action-card"
        >
          <FiMapPin className="action-icon" />
          <h3>Find Us</h3>
          <p>123 Rustaveli Ave, Tbilisi</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;