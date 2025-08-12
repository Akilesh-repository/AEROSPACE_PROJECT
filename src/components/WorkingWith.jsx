import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkingWith.css';

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

const WorkingWith = () => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleViewDetails = (certificateIndex) => {
    navigate(`/quality?certificate=${certificateIndex}`);
  };

  return (
    <section className="working-with-section">
      <h2>Working With Us</h2>
      <div className="working-with-container">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className="working-with-card"
            onMouseEnter={() => setHovered(service.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={service.image} alt={service.title} className="working-with-image" />
            <div className="working-with-content">
              <h3>{service.title}</h3>
              {hovered === service.id && (
                <div className="working-with-popup">
                  <p>{service.description}</p>
                  <button 
                    className="view-detail-btn" 
                    onClick={() => handleViewDetails(index + 1)}
                  >
                    View Detail →
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingWith;
