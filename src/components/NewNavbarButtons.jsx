import React, { useEffect } from 'react';
import './NewNavbarButtons.css';

const NewNavbarButtons = () => {
  useEffect(() => {
    // This assumes feather-icons is available globally or imported elsewhere
    // If not, you might need to add a script tag to index.html or install it.
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <nav className="new-navbar-buttons-wrapper">
      <ul className="navbar__menu">
        <li className="navbar__item">
          <a href="#" className="navbar__link"><i data-feather="home"></i><span>Home</span></a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link"><i data-feather="message-square"></i><span>Messages</span></a>        
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link"><i data-feather="users"></i><span>Customers</span></a>        
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link"><i data-feather="folder"></i><span>Projects</span></a>        
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link"><i data-feather="archive"></i><span>Resources</span></a>        
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link"><i data-feather="help-circle"></i><span>Help</span></a>        
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link"><i data-feather="settings"></i><span>Settings</span></a>        
        </li>
      </ul>
    </nav>
  );
};

export default NewNavbarButtons;