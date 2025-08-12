import React from 'react';
import './AboutUsOurServices.css';

const servicesData = [
  {
    id: 1,
    title: 'QUALITY',
    description: 'We guarantee thorough inspection at every stage, with our quality control room kept at a precise temperature. It is outfitted with state-of-the-art equipment, including CNC, and more. Additionally, we plan to invest in XRF machines soon.',
  },
  {
    id: 2,
    title:'TRUST',
    description: 'We offer the assurance of superior quality and consistent attention to fine detail. As a trusted EDM partner, we provide reliability you can always depend upon, delivering unmatched excellence and precision in every single valued engagement.',
  },
  {
    id: 3,
    title: 'CONFIDENCE',
    description: 'We proudly hold AS9100 certification, along with prestigious and widely respected OEM approvals from leading global industry names such as SAFRAN Aerospace and others recognized worldwide for exceptional engineering and manufacturing excellence.',
  },
];

const AboutUsOurServices = () => {
  return (
    <section className="our-services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-content">
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsOurServices;
