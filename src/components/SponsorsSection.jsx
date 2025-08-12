import React, { useState } from 'react';
import './SponsorsSection.css';
import useFadeIn from '../hooks/useFadeIn';

import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponse2.png';
import sponsor3 from '../assets/sponsor3.png';
import sponsor4 from '../assets/sponsor4.png';
import sponsor5 from '../assets/sponsor5.png';
import sponsor6 from '../assets/sponsor6.png';
import sponsor7 from '../assets/sponsor7.png';
import sponsor8 from '../assets/sponsor8.png';
import sponsor9 from '../assets/sponsor9.png';
import sponsor10 from '../assets/sponsor10.png';

const sponsors = [
  { id: 1, image: sponsor1, alt: 'Sponsor 1' },
  { id: 2, image: sponsor2, alt: 'Sponsor 2' },
  { id: 3, image: sponsor3, alt: 'Sponsor 3' },
  { id: 4, image: sponsor4, alt: 'Sponsor 4' },
  { id: 5, image: sponsor5, alt: 'Sponsor 5' },
  { id: 6, image: sponsor6, alt: 'Sponsor 6' },
  { id: 7, image: sponsor7, alt: 'Sponsor 7' },
  { id: 8, image: sponsor8, alt: 'Sponsor 8' },
  { id: 9, image: sponsor9, alt: 'Sponsor 9' },
  { id: 10, image: sponsor10, alt: 'Sponsor 10' },
];

const SponsorsSection = () => {
  const [tiltStyles, setTiltStyles] = useState({});
  const [ref, isVisible] = useFadeIn();

  const handleMouseMove = (e, id) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    setTiltStyles((prev) => ({ ...prev, [id]: { transform: `perspective(600px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.15)`, transition: 'transform 0.1s ease' } }));
  };

  const handleMouseLeave = (id) => {
    setTiltStyles((prev) => ({ ...prev, [id]: { transform: 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)', transition: 'transform 0.3s ease' } }));
  };

  return (
    <section className={`sponsors-section fade-in ${isVisible ? 'visible' : ''}`} id="sponsors-section" ref={ref}>
      <h2>
        We Work With Our Partners To Provide Project Perfection, <br />
        <span className="highlight">Join With Our Partnership.</span>
      </h2>
      <div className="sponsors-container-wrapper">
        <div className="sponsors-container">
          {/* Original sponsors */}
          {sponsors.map((sponsor) => (
            <div
              key={`original-${sponsor.id}`}
              className="sponsor-box"
              style={tiltStyles[sponsor.id] || {}}
              onMouseMove={(e) => handleMouseMove(e, sponsor.id)}
              onMouseLeave={() => handleMouseLeave(sponsor.id)}
            >
              <img src={sponsor.image} alt={sponsor.alt} />
            </div>
          ))}
          {/* Duplicate sponsors for seamless loop */}
          {sponsors.map((sponsor) => (
            <div
              key={`clone1-${sponsor.id}`}
              className="sponsor-box"
              style={tiltStyles[sponsor.id] || {}}
              onMouseMove={(e) => handleMouseMove(e, sponsor.id)}
              onMouseLeave={() => handleMouseLeave(sponsor.id)}
            >
              <img src={sponsor.image} alt={sponsor.alt} />
            </div>
          ))}
          {/* Second duplicate for extra smoothness */}
          {sponsors.map((sponsor) => (
            <div
              key={`clone2-${sponsor.id}`}
              className="sponsor-box"
              style={tiltStyles[sponsor.id] || {}}
              onMouseMove={(e) => handleMouseMove(e, sponsor.id)}
              onMouseLeave={() => handleMouseLeave(sponsor.id)}
            >
              <img src={sponsor.image} alt={sponsor.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;