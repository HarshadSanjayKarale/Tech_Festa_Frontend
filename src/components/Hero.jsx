import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import mapImage from '../assets/map-image.png'; 

export default function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero section">
      <div className="container">
        <div 
          className="text-content" 
          style={{
            transform: `translateY(${scrollPosition * 0.1}px)`
          }}
        >
          <h1>
            <span className="gradient-text-1">Travel Safely with </span>
            <span className="gradient-text-2">SafeRoutes</span>
          </h1>
          <p className="slogan">Guiding You Safely, Every Step of the Way</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="map-image-wrapper animate-fade-in">
  <img 
    src={mapImage} 
    alt="SafeRoute Map" 
    className="map-image"
  />
  <div className="map-animation"></div>
</div>

      </div>
    </div>
  );
}
