import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    // yet to be implmented
  };

  return (
    <div className="search-container">
        <form onSubmit={handleSubmit} className="search-form">
        <input
            type="text"
            placeholder="Search for tech..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
        </form>
    </div>
  );
};

export default Search;