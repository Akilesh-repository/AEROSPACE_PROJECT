import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo_1.png';
import SearchBar from './SearchBar';
import NavbarButtons from './NavbarButtons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {menuOpen && <div className="navbar-overlay" onClick={closeMenu} />}
      <header className="navbar">
        <div className="navbar-left">
          <a href="/" onClick={scrollToTop} className="navbar-logo">
            <div className="diagonal-logo-wrapper">
              <img src={logo} alt="AP Aerospace Logo" className="logo" />
            </div>
          </a>
          <button className="navbar-hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            &#9776;
          </button>
          <NavbarButtons menuOpen={menuOpen} />
        </div>
        <div className="navbar-right">
          <SearchBar />
        </div>
      </header>
    </>
  );
};

export default Navbar;
