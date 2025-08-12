import React, { useState, useRef } from 'react';
import './AboutUsPage.css';
import heroVideo from '../assets/hero_banner_vid_2.mp4';
import personImage from '../assets/person_2.jpg';
import ThrivingBuilding from '../components/ThrivingBuilding';
import AboutUsOurServices from '../components/AboutUsOurServices';
import '../components/AboutUsOurServices.css';
import FooterSection from '../components/FooterSection';
import useFadeIn from '../hooks/useFadeIn';

const AboutUsPage = () => {
  const [shadowStyle, setShadowStyle] = useState({});
  const imgRef = useRef(null);
  const [ref, isVisible] = useFadeIn();

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    // Calculate shadow offset relative to center
    const offsetX = (x - rect.width / 2) / 8;
    const offsetY = (y - rect.height / 2) / 8;

    setShadowStyle({
      boxShadow: `${offsetX}px ${offsetY}px 20px rgba(0, 0, 0, 0.5)`
    });
  };

  const handleMouseLeave = () => {
    setShadowStyle({});
  };

  return (
    <div className={`about-page fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <section className="about-top-section">
        <video className="about-top-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-top-overlay" />
        <div className="about-top-container">
          <div className="about-top-content">
            <h1>About us</h1>
            <nav className="about-breadcrumb">
              <span>Home</span> {'>'} <span>About us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="our-story-section">
        <div className="our-story-container">
          <div className="our-story-text">
            <h3>OUR STORY</h3>
            <h2>Running a successful business <em>since 2014</em></h2>
            <p className="about-us-text">
              Aerospace Company was Established in 2014 in Hosur by Mr. Arul Prakash, whose journey into precision machining began at NTTF, Hosur.
              There, he was one of India’s early pioneers in mastering Electrical Discharge Machining (EDM), a technology that sparked his lasting passion.
              His vision has since propelled Aerospace to the forefront of precision engineering, blending innovation with expertise.
            </p>
            <p className="about-us-text">
              With over 8 years of mastery in EDM and machining, Aerospace Company has solidified its position as a key partner in the aerospace industry,
              seamlessly embedded within its supply chain.
              Building on this foundation, the company has expanded its capabilities to include advanced manufacturing techniques, stringent quality control, and a customer-centric approach.
Its state-of-the-art facility in Hosur is equipped to meet the most demanding aerospace standards, ensuring precision at every stage.
              A dedicated team of skilled professionals works tirelessly to deliver components that exceed client expectations.
By fostering innovation and embracing cutting-edge technologies, the company continues to push the boundaries of what’s possible in precision engineering.
This unwavering commitment to excellence has earned it the trust and loyalty of leading aerospace manufacturers.
            </p>
          </div>
          <div
            className="our-story-image"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={imgRef}
            style={shadowStyle}
          >
            <img
              src={personImage}
              alt="Our Story"
              style={{
                transform: shadowStyle.boxShadow
                  ? `translate(${shadowStyle.boxShadow.split(' ')[0]}, ${shadowStyle.boxShadow.split(' ')[1]})`
                  : 'none',
                transition: 'transform 0.1s ease',
              }}
            />
          </div>
        </div>
      </section>

      <ThrivingBuilding />
      <AboutUsOurServices />

      <FooterSection />
    </div>
  );
};

export default AboutUsPage;
