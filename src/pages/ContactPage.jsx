import React from 'react';
import './ContactPage.css';
import heroVideo3 from '../assets/hero_banner_vid_3.mp4';
import FooterSection from '../components/FooterSection';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaGooglePlusG } from 'react-icons/fa';
import useFadeIn from '../hooks/useFadeIn';

const ContactPage = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <div className={`contact-page fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <section className="about-top-section">
        <video className="about-top-video" autoPlay muted loop playsInline>
          <source src={heroVideo3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="about-top-overlay" />
        <div className="about-top-container">
          <div className="about-top-content">
            <h1>Contact Us</h1>
            <nav className="about-breadcrumb">
              <span>Home</span> {'>'} <span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="contact-content-section">
        <div className="contact-container">
          <div className="quick-contact">
            <h3>Quick Contact</h3>
            <p>If you have any questions simply use the following contact details.</p>
            <p><strong>ADDRESS:</strong> # 41/5G, Rajeshwari Layout, Begapalli road, Sipcot industrial complex, Phase – 1, Hosur – 635 126</p>
            <p><strong>EMAIL:</strong> contact@apaerospacetech.com</p>
            <p><strong>PHONE:</strong> +91 88073 36607</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/apaerospacetechnologies/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterestP /></a>
              <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer" aria-label="Google Plus"><FaGooglePlusG /></a>
            </div>
          </div>
          <div className="send-message">
            <h3>Send Message Us</h3>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email Id" />
              <textarea placeholder="Your Message..." />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="map-section">
            <iframe
              title="Company Location"
              src="https://maps.google.com/maps?q=AP+Aerospace+Technologies+SIPCOT+Industrial+Complex%2C+41%2F5G%2C+Rajeshwari+Layout%2C+Begapalli+Road%2C+Phase+1%2C+Hosur%2C+Tamil+Nadu+635126&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;