// src/components/GallerySlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './GallerySlider.css';

import img1 from '../assets/gallery/cake1.jpg';
import img2 from '../assets/gallery/cake2.jpg';
import img3 from '../assets/gallery/cake3.jpg';
import img4 from '../assets/gallery/cake4.jpg';

const images = [img1, img2, img3, img4];

const GallerySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    
    // === მთავარი პარამეტრები ===
    centerMode: true,   // აუცილებელია გვერდითა სურათების გამოსაჩენად
    slidesToShow: 1,    // ვაჩვენებთ ერთ მთავარ სურათს
    centerPadding: '25%', // ადგილი გვერდითა სურათებისთვის
    // ========================

    responsive: [
      {
        breakpoint: 768, // მობილურის ზომაზე
        settings: {
          slidesToShow: 1,
          centerPadding: '15%', // ვამცირებთ დაშორებას
        }
      }
    ]
  };

  return (
    <div className="gallery-carousel-fade">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide-item-fade">
            <div className="image-container-fade">
              <img src={img} alt={`Gallery item ${index + 1}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GallerySlider;
