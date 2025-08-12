import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css';
import useFadeIn from '../hooks/useFadeIn';

import service1 from '../assets/service_1.jpg';
import service2 from '../assets/service_2.jpg';
import service3 from '../assets/service_3.jpg';

const servicesData = [
  {
    id: 1,
    title: '',
    description: '100% Inspection on all Stages.',
    image: service1,
  },
  {
    id: 2,
    title: '',
    description: '11 years of industry expertise.',
    image: service2,
  },
  {
    id: 3,
    title: '',
    description: 'We are accredited AS9100.',
    image: service3,
  },
];

const OurServices = () => {
  const [hovered, setHovered] = useState(null);
  const [ref, isVisible] = useFadeIn();

  return (
    <section className={`our-services-section fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-card"
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3>{service.title}</h3>
              {hovered === service.id && (
                <div className="service-popup">
                  <p>{service.description}</p>
                  <Link to="/quality">
                    <button className="view-detail-btn">View Detail →</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
