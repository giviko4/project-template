// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import CollageGallery from '../components/CollageGallery'; // <-- შემოვიტანეთ
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <section className="about-section container">
        <h2>Our Story</h2>
        <p>
          Founded in the heart of Tbilisi, our cafe is a place where tradition meets modernity. 
          We are passionate about sourcing the finest coffee beans and creating pastries that bring joy. 
          Join us for a moment of peace and a taste of perfection.
        </p>
      </section>
      
      <section className="gallery-section">
        <div className="container">
          <h2>Gallery</h2>
        </div>
        <CollageGallery /> {/* <-- გამოვიყენეთ CollageGallery */}
      </section>
    </div>
  );
};

export default Home;