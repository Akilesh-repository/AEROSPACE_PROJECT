import React from 'react';
import NavbarButtons from '../components/NavbarButtons';
import FooterSection from '../components/FooterSection';
import ProductCardsSection from '../components/ProductCardsSection';
import '../pages/QualityPage.css';
import useFadeIn from '../hooks/useFadeIn';

const WorkingWithPage = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <div className={`working-with-page fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <NavbarButtons />
      <section className="about-top-section">
        {/* Video for top section */}
        <video className="quality-top-video" autoPlay muted loop playsInline>
          <source src={new URL('../assets/hero_banner_vid_4.mp4', import.meta.url).href} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-top-overlay" />
        <div className="about-top-container">
          <div className="about-top-content">
            <h1>Working With</h1>
            <nav className="about-breadcrumb">
              <span>Home</span> {'>'} <span>Working With</span>
            </nav>
          </div>
        </div>
      </section>
      <ProductCardsSection />
      <FooterSection />
    </div>
  );
};

export default WorkingWithPage;