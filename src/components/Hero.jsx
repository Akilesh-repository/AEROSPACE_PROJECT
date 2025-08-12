import React, { useEffect, useState, useRef } from 'react';
import './Hero.css';
import heroVideo from '../assets/hero_banner_vid.mp4';
import useFadeIn from '../hooks/useFadeIn';

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef(null);
  const [ref, isVisible] = useFadeIn();

  const handleScroll = () => setOffsetY(window.pageYOffset);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0.5, y: 0.5 });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundPositionX = `${mousePos.x * 100}%`;
  const backgroundPositionY = offsetY * 0.5 + mousePos.y * 10;

  return (
    <section
      className={`hero-section fade-in ${isVisible ? 'visible' : ''}`}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundPosition: `${backgroundPositionX} ${backgroundPositionY}%`,
        transition: 'transform 0.3s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="hero-content">
        <h1>AEROSPACE TECHNOLOGIES</h1>
        <p>Where Innovation Meets Altitude</p>
        <a href="#about" className="hero-btn" onClick={(e) => {
          e.preventDefault();
          const target = document.querySelector('.market-sectors');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }}>Learn More</a>
      </div>
    </section>
  );
};

export default Hero;