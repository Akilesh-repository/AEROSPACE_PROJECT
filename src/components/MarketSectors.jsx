import React from 'react';
import './MarketSectors.css';
import useFadeIn from '../hooks/useFadeIn';

const MarketSectors = () => {
  const [ref, isVisible] = useFadeIn();

  const scrollToSponsors = () => {
    const sponsorsSection = document.getElementById('sponsors-section');
    if (sponsorsSection) {
      sponsorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`market-sectors fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2>Amazing things happen to your business</h2>
      <button className="market-sectors-btn" onClick={scrollToSponsors}>
        MARKET SECTORS
      </button>
    </section>
  );
};

export default MarketSectors;
