// src/components/SearchOverlay.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSearch } from '../context/SearchContext';
import { FiX, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuItems';
import { v4 as uuidv4 } from 'uuid';
import './SearchOverlay.css';

const SearchOverlay = () => {
  const { isSearchOpen, closeSearch } = useSearch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);

  const allItems = [...menuData.coffee, ...menuData.pastries];

  useEffect(() => {
    if (isSearchOpen) {
      // ავტომატურად ვაფოკუსირებთ საძიებო ველზე, როცა ფანჯარა იხსნება
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }
    const results = allItems.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleClose = () => {
    setSearchTerm('');
    closeSearch();
  };

  return (
    <div className={`search-overlay ${isSearchOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={handleClose}>
        <FiX />
      </button>
      <div className="search-content">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for coffee or pastries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="search-results">
          {searchResults.length > 0 && (
            <ul>
              {searchResults.map(item => (
                <li key={uuidv4()}>
                  <Link to="/menu" onClick={handleClose}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {searchTerm && searchResults.length === 0 && (
            <p>No results found for "{searchTerm}"</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;