import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarButtons.css';

const NavbarButtons = ({ menuOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
    const buttons = [
    { id: 'len1', label: 'Home', href: '/' },
    { id: 'len2', label: 'About', href: '/about' },
    { id: 'len3', label: 'Specializing', href: '/specializing' },
    { id: 'len4', label: 'Quality', href: '/quality' },
    { id: 'len5', label: 'Working With', href: '/workingwith' },
    
    { id: 'len7', label: 'Contact Us', href: '/contact' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % buttons.length);
    }, 500);
    return () => clearInterval(interval);
  }, [buttons.length]);

  return (
    <nav className={`navbar-buttons ${menuOpen ? 'open' : ''}`}>
      <ul className="navbar__menu">
        {buttons.map((btn, index) => (
          <li key={btn.id} className={`navbar__item ${activeIndex === index ? 'bounce' : ''}`}>
            {btn.href.startsWith('/') ? (
              <Link id={btn.id} className="hoverable" to={btn.href}>
                {btn.label}
              </Link>
            ) : (
              <a id={btn.id} className="hoverable" href={btn.href}>
                {btn.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarButtons;
