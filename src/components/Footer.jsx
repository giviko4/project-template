// src/components/Footer.jsx
import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Fiala Cafe. All Rights Reserved.</p> {/* <-- შეიცვალა აქ */}
        <div className="social-links">
          <a href="#"><FiInstagram /></a>
          <a href="#"><FiFacebook /></a>
          <a href="#"><FiTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

