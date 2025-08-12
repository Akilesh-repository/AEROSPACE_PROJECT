import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="container">
      <input type="text" placeholder="Search..." />
      <div className="search"></div>
    </div>
  );
};

export default SearchBar;