import React, { useState, useRef } from 'react';
import './WhyChooseUs.css';
import machine1Video from '../assets/machine_1.mp4';
import useFadeIn from '../hooks/useFadeIn';

const WhyChooseUs = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [ref, isVisible] = useFadeIn();

  // Detect if screen width is less than or equal to 768px (mobile)
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const handleMouseMove = (e) => {
    if (isMobile || !ref.current) return; // Disable rotation on mobile

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section
      className={`why-choose-us-section fade-in ${isVisible ? 'visible' : ''}`}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isMobile ? 'none' : `perspective(600px) rotateX(${-rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: 'transform 0.2s ease',
      }}
    >
      <div className="why-choose-us-wrapper">
        <div className="left-content">
          <h2>Why choose us</h2>
          <p className="why-choose-us-text">
            Wire EDM is far more precise than conventional milling but takes much longer to process. With more than 32+ machines its no more a longer process. Customers do not have to concern about the delivery schedule. We work from Small batch qty to huge batch qty. We are one of the trusted partner since we are accredited with AS9100 for Wire EDM, Sparking / Sinker EDM & Super drill / Fast Hole. We Operate 24/7 to ensure timely delivery to our customers and even roughing/finishing process up-to 5 Axis Milling can be at done in-house to even shorten the lead time.
          </p>
          <ul className="features-list">
            <li> Wire EDM</li>
            <li> Timely Delivery</li>
            <li> Trusted Partner</li>
            <li> High Performance</li>
          </ul>
        </div>
        <div className="right-content">
          <div className="top-left red-block">
            <div className="years-number">11</div>
            <div className="years-text">Years of Experience</div>
          </div>
          <div className="top-right image-block">
            {/* Image area left blank */}
            <div className="image-placeholder">Why Choose Us?</div>
          </div>
          <div className="bottom-left video-block">
            <video
              src={machine1Video}
              autoPlay
              muted
              loop
              className="video-element"
            />
          </div>
          <div className="bottom-right text-block">
            <h3>Manufacturing in :</h3>
            <p>Precision Machined Components &amp; Cnc Wire Cutting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;