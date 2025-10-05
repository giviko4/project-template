// src/components/CollageGallery.jsx
import React, { useState } from 'react';
import Lightbox from './Lightbox';
import './CollageGallery.css';

import img1 from '../assets/gallery/cake1.jpg';
import img2 from '../assets/gallery/cake2.jpg';
import img3 from '../assets/gallery/cake3.jpg';
import img4 from '../assets/gallery/cake4.jpg';

// ვქმნით სურათების მასივს, რომელსაც გადავცემთ Lightbox-ს
const images = [img1, img2, img3, img4];

const CollageGallery = () => {
  // state-ში ვინახავთ არჩეული სურათის ინდექსს და არა მისამართს
  const [currentIndex, setCurrentIndex] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setCurrentIndex(null);
  };

  const goToNext = () => {
    // თუ ბოლო სურათზე ვართ, გადავდივართ პირველზე, თუ არა - ვზრდით ინდექსს
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const goToPrev = () => {
    // თუ პირველ სურათზე ვართ, გადავდივართ ბოლოზე, თუ არა - ვამცირებთ ინდექსს
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="collage-container">
        {/* onClick-ში გადავცემთ სურათის ინდექსს (0, 1, 2, 3) */}
        <div className="collage-item item-1" onClick={() => openImage(0)}>
          <img src={images[0]} alt="Tiramisu" />
        </div>
        <div className="collage-item item-2" onClick={() => openImage(1)}>
          <img src={images[1]} alt="Hazelnut Cake" />
        </div>
        <div className="collage-item item-3" onClick={() => openImage(2)}>
          <img src={images[2]} alt="Cinnamon Cake" />
        </div>
        <div className="collage-item item-4" onClick={() => openImage(3)}>
          <img src={images[3]} alt="Another delicious cake" />
        </div>
      </div>
      
      <Lightbox 
        images={images} 
        currentIndex={currentIndex} 
        onClose={closeImage}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
};

export default CollageGallery;