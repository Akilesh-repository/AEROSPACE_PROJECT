import React from 'react';
import './SpecializingPage.css';
import heroVideo3 from '../assets/hero_banner_vid_3.mp4';
import FooterSection from '../components/FooterSection';
import useFadeIn from '../hooks/useFadeIn';

const SpecializingPage = () => {
  const [ref, isVisible] = useFadeIn();
  const imageTexts = [
    '20 CNC WIRE CUT MACHINES',
    '5 VMC MACHINE',
    '5 TURNING MACHINE',
    'EDM WIRE CUT',
    '1D & 2D HEIGHT GAUGE',
    'CNC SUPER DRILL EDM',
  ];

  const imageNames = [
    'specialing_machine_1.jpeg',
    'specialing_machine_5.jpg',
    'specialing_machine_3.jpg',
    'specialing_machine_4.jpeg',
    'specialing_machine_2.jpg',
    'specialing_machine_6.jpg',
  ];

  return (
    <div className={`specializing-page fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <section className="about-top-section">
        <video className="about-top-video" autoPlay muted loop playsInline>
          <source src={heroVideo3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-top-overlay" />
        <div className="about-top-container">
          <div className="about-top-content">
            <h1>Specializing</h1>
            <nav className="about-breadcrumb">
              <span>Home</span> {'>'} <span>Specializing</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="specializing-images-section">
        <div className="images-container">
          {imageTexts.map((text, index) => (
            <div key={index} className={`image-placeholder image-box-${index + 1}`}>
              <img src={new URL(`../assets/${imageNames[index]}`, import.meta.url).href} alt={text} />
              <p className="image-text">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default SpecializingPage;