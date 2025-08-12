import React from 'react';
import './QualityPage.css';
import FooterSection from '../components/FooterSection';
import useFadeIn from '../hooks/useFadeIn';

const QualityPage = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <div className={`quality-page fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <section className="about-top-section">
        {/* Video for top section */}
        <video className="quality-top-video" autoPlay muted loop playsInline>
          <source src={new URL('../assets/hero_banner_vid_4.mp4', import.meta.url).href} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-top-overlay" />
        <div className="about-top-container">
          <div className="about-top-content">
            <h1>Quality</h1>
            <nav className="about-breadcrumb">
              <span>Home</span> {'>'} <span>Quality</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="quality-images-section">
        <div className="quality-images-container">
          <div className="quality-image-box">
            <img src={new URL('../assets/certificate_1.png', import.meta.url).href} alt="Certificate 1" />
          </div>
          <div className="quality-image-box">
            <img src={new URL('../assets/certificate_2.jpg', import.meta.url).href} alt="Certificate 2" />
          </div>
          <div className="quality-image-box">
            <img src={new URL('../assets/certificate_3.jpg', import.meta.url).href} alt="Certificate 3" />
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default QualityPage;