import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';
import mapImage from '../assets/map-image.png'; 
import video1 from '../assets/video3.mp4';  // Import the video file

export default function Hero() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLightMode, setIsLightMode] = useState(true);  // Manage the theme state

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    // Detect the theme (can be based on system preferences or a theme toggle)
    const theme = window.localStorage.getItem('theme') || 'light';
    setIsLightMode(theme === 'light');

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero section">
      {/* Conditionally render video based on the theme */}
      {!isLightMode && (
        <video 
          className="background-video" 
          autoPlay 
          muted 
          loop
          style={{ animationDuration: '200s' }} // Adjusting speed to 0.5x
        >
          <source src={video1} type="video/mp4" />  {/* Use the imported video */}
          Your browser does not support the video tag.
        </video>
      )}

      <div className="container" style={{ transform: `translateY(${scrollPosition * 0.01}px)` }}>
        <div 
          className="text-content" 
          style={{ transform: `translateY(${scrollPosition * 0.08}px)` }}
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
