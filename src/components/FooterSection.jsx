import React from 'react';
import './FooterSection.css';
import { Link } from 'react-router-dom';
import useFadeIn from '../hooks/useFadeIn';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const FooterSection = () => {
  const [ref, isVisible] = useFadeIn();

  return (
    <footer className={`footer-section fade-in ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/specializing">Specializing</Link></li>
            <li><Link to="/workingwith">Working With</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Useful Link</h3>
          <ul>
            
            
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/quality">Quality</Link></li>
          </ul>
        </div>
        <div className="footer-column contact-us">
          <h3>Contact us</h3>
          <p><FaMapMarkerAlt className="icon" /> ADDRESS<br /># 41/5G, Rajeshwari Layout, Begapalli road, Sipcot industrial complex, Phase - 1, Hosur - 635 126</p>
          <p><FaPhoneAlt className="icon" /> PHONE<br />+91 88073 36607 </p>
          <p><FaEnvelope className="icon" /> EMAIL<br />apwiretech@gmail.com</p>
        </div>
        <div className="footer-column newsletter">
          <h3>Subscribe To Our Newsletter</h3>
          <p>The Essentials Interior Design Tips Functional Wall-To-Wall Shelves 9 Unique Ways To Display.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
          <div className="social-icons modern">
            <a href="https://www.facebook.com/apaerospacetechnologies/" className="social-icon facebook" aria-label="Facebook" title="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon google" aria-label="Google Plus" title="Google Plus">
              <FaGooglePlusG />
            </a>
            <a href="#" className="social-icon linkedin" aria-label="LinkedIn" title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon instagram" aria-label="Instagram" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon twitter" aria-label="Twitter" title="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 AP Aerospacetech Technologies. all rights reserved.</p>
        <p className="privacy-policy">Privacy Policy</p>
      </div>
    </footer>
  );
};

export default FooterSection;