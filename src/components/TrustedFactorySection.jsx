import React, { useState, useRef } from 'react';
import './TrustedFactorySection.css';
import personImage from '../assets/person_1.jpg';
import useFadeIn from '../hooks/useFadeIn';

const TrustedFactorySection = ({
  title = "Trusted Factory Solutions",
  subtitle = "since 2014",
  messageTitle = "Message From MD",
  message = `EDM machining is one of the key solutions in aviation industry to achieve the finest level of precision with lowest possible HAZ.

We fulfil the most stringent EDM criteria for materials such as aluminium, steel, copper, tungsten-carbide and exotic metals like titanium and Inconel.`,
  buttonText = "Read More",
  image = personImage,
}) => {
  const [shadowStyle, setShadowStyle] = useState({});
  const imgRef = useRef(null);
  const [ref, isVisible] = useFadeIn();

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = (x - rect.width / 2) / 10;
    const offsetY = (y - rect.height / 2) / 10;

    setShadowStyle({
      boxShadow: `${offsetX}px ${offsetY}px 15px rgba(0, 0, 0, 0.3)`
    });
  };

  const handleMouseLeave = () => {
    setShadowStyle({});
  };

  return (
    <section className={`trusted-factory-section fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div
        className="trusted-factory-image"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        ref={imgRef}
        style={shadowStyle}
      >
        <img
          src={image}
          alt="Trusted Factory"
          style={{
            transform: shadowStyle.boxShadow
              ? `translate(${shadowStyle.boxShadow.split(' ')[0]}, ${shadowStyle.boxShadow.split(' ')[1]})`
              : 'none',
            transition: 'transform 0.1s ease',
          }}
        />
      </div>
      <div className="trusted-factory-content">
        <p className="trusted-factory-our-story">OUR STORY</p>
        <h2 className="trusted-factory-title">
          {title} <em>{subtitle}</em>
        </h2>
        <h3 className="trusted-factory-message-title">{messageTitle}</h3>
        <p className="trusted-factory-message">{message}</p>
        <button
          className="trusted-factory-read-more"
          onClick={() => window.location.href = '/about'}
          aria-label="Read more about Trusted Factory Solutions"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default TrustedFactorySection;