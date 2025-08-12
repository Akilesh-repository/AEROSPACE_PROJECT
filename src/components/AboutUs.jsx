import React from 'react';
import './AboutUs.css';
import logo from '../assets/logo_1.png';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="about-header">
        <div className="about-header-content">
          <h1>About AP Aerospace</h1>
          <p>Leading the Future of Aerospace Manufacturing</p>
        </div>
      </header>

      <main className="about-main">
        <section className="about-section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              AP Aerospace is a premier aerospace manufacturing company specializing in precision 
              components and assemblies for the global aerospace industry. With decades of 
              experience, we have established ourselves as a trusted partner for leading 
              aerospace manufacturers worldwide.
            </p>
            <p>
              Our commitment to excellence, innovation, and quality has made us a preferred 
              supplier for critical aerospace applications, from commercial aviation to 
              space exploration programs.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              To deliver world-class aerospace components and assemblies that meet the 
              highest standards of quality, safety, and reliability. We strive to push 
              the boundaries of aerospace manufacturing through continuous innovation 
              and technological advancement.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>Quality</h3>
                <p>Exceeding aerospace industry standards in every component we produce</p>
              </div>
              <div className="value-item">
                <h3>Innovation</h3>
                <p>Continuously advancing our manufacturing capabilities and technologies</p>
              </div>
              <div className="value-item">
                <h3>Reliability</h3>
                <p>Consistent delivery of precision components on time, every time</p>
              </div>
              <div className="value-item">
                <h3>Safety</h3>
                <p>Prioritizing safety in every aspect of our operations</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Our Capabilities</h2>
            <ul>
              <li>Precision CNC machining for aerospace components</li>
              <li>Complex assembly and integration services</li>
              <li>Advanced materials processing (titanium, composites, etc.)</li>
              <li>Quality assurance and testing</li>
              <li>Supply chain management and logistics</li>
              <li>Custom manufacturing solutions</li>
            </ul>
          </div>
        </section>

        <section className="about-section">
          <div className="about-content">
            <h2>Industries We Serve</h2>
            <div className="industries-grid">
              <div className="industry-item">Commercial Aviation</div>
              <div className="industry-item">Defense & Military</div>
              <div className="industry-item">Space Exploration</div>
              <div className="industry-item">Business Aviation</div>
              <div class="industry-item">Helicopters & Rotorcraft</div>
              <div className="industry-item">UAV & Drones</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="about-footer">
        <div className="about-footer-content">
          <img src={logo} alt="AP Aerospace Logo" className="footer-logo" />
          <p>&copy; 2024 AP Aerospace. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
