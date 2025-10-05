// src/components/Header.jsx
import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { FiCoffee, FiSearch } from 'react-icons/fi';
import { menuData } from '../data/menuItems';
import { v4 as uuidv4 } from 'uuid';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const location = useLocation();

  const allItems = [...menuData.coffee, ...menuData.pastries];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchActive) {
      setTimeout(() => searchInputRef.current?.focus(), 300);
    }
  }, [isSearchActive]);

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

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    setSearchTerm('');
  };

  const handleResultClick = () => {
    setIsSearchActive(false);
    setSearchTerm('');
  };

  const isHeaderShrunk = isScrolled;
  const isTextDark = isScrolled || location.pathname !== '/';

  return (
    <header className={`header ${isHeaderShrunk ? 'shrunk' : ''} ${isTextDark ? 'dark-text' : ''}`}>
      <div className="container header-container">
        <NavLink to="/" className="logo">
          <FiCoffee />
          <span>Fiala Cafe</span>
        </NavLink>

        <div className="nav-area">
          <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
            <button className="action-btn search-toggle-btn" onClick={toggleSearch}>
              <FiSearch />
            </button>
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <div className="header-search-results">
                <ul>
                  {searchResults.length > 0 ? (
                    searchResults.map(item => (
                      <li key={uuidv4()}>
                        <Link to={`/menu?search=${item.name}`} onClick={handleResultClick}>
                          {item.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="no-results">No results found</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <nav className="nav-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;  