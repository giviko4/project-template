// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import GallerySlider from '../components/GallerySlider';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      {/* 1. წავშალეთ className="container" */}
      <section className="about-section">
        <div className="container"> {/* კონტეინერი გადავიტანეთ შიგნით, ტექსტისთვის */}
          <h2>Our Story</h2>
          <p>
            Founded in the heart of Tbilisi, our cafe is a place where tradition meets modernity. 
            We are passionate about sourcing the finest coffee beans and creating pastries that bring joy. 
            Join us for a moment of peace and a taste of perfection.
          </p>
        </div>
      </section>
      
      {/* 2. წავშალეთ className="container" */}
      <section className="gallery-section">
        {/* სათაურს ვათავსებთ კონტეინერში, რომ ცენტრში იყოს */}
        <div className="container">
            <h2>Gallery</h2>
        </div>
        <GallerySlider /> {/* სლაიდერი იქნება სრული სიგანის */}
      </section>
    </div>
  );
};

export default Home;

