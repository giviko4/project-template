// src/components/SearchModal.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useSearch } from '../context/SearchContext';
import { FiSearch } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { menuData } from '../data/menuItems';
import { v4 as uuidv4 } from 'uuid';
import './SearchModal.css';

const SearchModal = () => {
  const { isSearchOpen, closeSearch } = useSearch();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const allItems = [...menuData.coffee, ...menuData.pastries];

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    } else {
      setSearchTerm('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchTerm.trim() === '') { setSearchResults([]); return; }
    const results = allItems.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm]);

  const handleResultClick = () => closeSearch();
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && searchTerm.trim() !== '') {
      navigate(`/menu?search=${searchTerm}`);
      closeSearch();
    }
  };

  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div className={`search-modal-overlay ${isSearchOpen ? 'open' : ''}`} onClick={closeSearch}>
      <div className="search-modal-content" onClick={stopPropagation}>
        <div className="search-modal-bar">
          <FiSearch className="search-modal-icon" />
          <input ref={inputRef} type="text" placeholder="Search for coffee, pastries..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} />
        </div>
        {searchTerm && (
          <div className="modal-search-results">
            <ul>
              {searchResults.length > 0 ? (
                searchResults.map(item => (
                  <li key={uuidv4()}>
                    <Link to={`/menu?search=${item.name}`} onClick={handleResultClick}>{item.name}</Link>
                  </li>
                ))
              ) : ( <li className="no-results-modal">No results found</li> )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default SearchModal;