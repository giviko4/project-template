// src/components/Lightbox.jsx
import React, { useEffect, useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import './Lightbox.css';

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  // useEffect და სხვა ფუნქციები უცვლელია
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') onNext();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onNext, onPrev, onClose]);

  const stopPropagation = (e) => e.stopPropagation();

  const imageVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100, opacity: 0, scale: 0.9,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100, opacity: 0, scale: 0.9,
    }),
  };

  // === დაემატა ანიმაცია overlay-სთვის ===
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  // =====================================

  const [direction, setDirection] = useState(0);
  const handleNext = () => { setDirection(1); onNext(); };
  const handlePrev = () => { setDirection(-1); onPrev(); };

  return (
    // ვიყენებთ AnimatePresence-ს მთლიან კომპონენტზე
    <AnimatePresence>
      {currentIndex !== null && ( // ვაჩვენებთ მხოლოდ მაშინ, როცა currentIndex არ არის null
        <motion.div
          className="lightbox-overlay"
          onClick={onClose}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
        >
          <button className="lightbox-close-btn" onClick={onClose}><FiX /></button>

          <button className="lightbox-nav-btn prev" onClick={(e) => { stopPropagation(e); handlePrev(); }}>
            <FiChevronLeft />
          </button>

          <div className="lightbox-content" onClick={stopPropagation}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Enlarged view ${currentIndex + 1}`}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              />
            </AnimatePresence>
          </div>

          <button className="lightbox-nav-btn next" onClick={(e) => { stopPropagation(e); handleNext(); }}>
            <FiChevronRight />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;