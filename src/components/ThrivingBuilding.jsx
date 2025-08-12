import React, { useState, useRef } from 'react';
import './ThrivingBuilding.css';
import aboutUsVideo from '../assets/about_us_vid.mp4';

const ThrivingBuilding = () => {
  const [tiltStyle, setTiltStyle] = useState({});
  const contentRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = contentRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * -10;

    setTiltStyle({
      transform: `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.1s ease',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(600px) rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.5s ease',
    });
  };

  return (
    <section className="thriving-building-section">
      <div className="thriving-building-container">
        <div className="thriving-building-image">
          {/* Replaced image with video as requested */}
          <video
            src={aboutUsVideo}
            autoPlay
            muted
            loop
            playsInline
            className="thriving-building-video"
          />
        </div>
        <div
          className="thriving-building-content"
          ref={contentRef}
          style={tiltStyle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h2>We're thriving and building better products</h2>
          <div className="info-box vision-box">
            <div className="icon vision-icon" />
            <h3>VISION</h3>
            <p className="thriving-building-text">
         APA envisions becoming India’s premier provider of electrical discharge machining solutions, driven by a commitment to unparalleled quality control. 
         Our ambition is to lead the industry, setting new benchmarks in customer satisfaction.
         We aim to continuously innovate, embracing advanced technologies to stay ahead of evolving market needs.
         Our focus remains on delivering precision, reliability, and value that exceed expectations.
            </p>
          </div>
          <div className="info-box mission-box">
            <div className="icon mission-icon" />
            <h3>MISSION</h3>
            <p className="thriving-building-text">
Delivering exceptional solutions to our customers, while relentlessly enhancing every facet of our operations.
We strive to set new benchmarks in quality, innovation, and reliability.
Our commitment ensures lasting partnerships built on trust and excellence.
Together, we drive progress that shapes a better future.
            </p>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default ThrivingBuilding;