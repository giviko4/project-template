// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import HeroImage from '../assets/hero-coffee.jpg';

const Hero = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${HeroImage})` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to Fiala Cafe</h1> {/* <-- შეიცვალა აქ */}
        <p>Your perfect escape for quality coffee and delightful pastries.</p>
      </div>
    </div>
  );
};

export default Hero;



