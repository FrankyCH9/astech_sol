'use client'
import React, { useState, useEffect } from 'react';
import './carousel.css';

const images = [
  '/images/imagen1.jpg',
  '/images/imagen2.jpg',
  '/images/imagen3.jpg',
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoplayInterval, setAutoplayInterval] = useState(null);

  const handleNext = () => {
    const nextIndex = (currentImage + 1) % images.length;
    setCurrentImage(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentImage - 1 + images.length) % images.length;
    setCurrentImage(prevIndex);
  };

  const startAutoplay = () => {
    const interval = setInterval(() => {
      handleNext();
    }, 2500);

    setAutoplayInterval(interval);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayInterval);
    setAutoplayInterval(null);
  };

  useEffect(() => {
    // Comienza el autoplay cuando el componente se monta
    startAutoplay();

    // Detiene el autoplay cuando el componente se desmonta o cuando currentImage cambia
    return () => {
      stopAutoplay();
    };
  }, [currentImage]); // Ejecuta useEffect cuando currentImage cambia

  return (
    <div className="carousel-container">
      <img src={images[currentImage]} alt="Slide" className="carousel-image" />
      
    </div>
  );
};

export default Carousel;
