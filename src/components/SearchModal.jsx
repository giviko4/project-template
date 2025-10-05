// src/components/SearchModal.jsx
import React from 'react';
import { useSearch } from '../context/SearchContext';
import { FiSearch } from 'react-icons/fi';
import './SearchModal.css';

const SearchModal = () => {
  const { isSearchOpen, closeSearch } = useSearch();

  // ეს ხელს უშლის ფანჯრის დახურვას, როცა შიდა კონტენტზე ვაკლიკებთ
  const stopPropagation = (e) => e.stopPropagation();

  return (
    <div 
      className={`search-modal-overlay ${isSearchOpen ? 'open' : ''}`} 
      onClick={closeSearch} // ფანჯარა იხურება ფონზე დაკლიკებით
    >
      <div className="search-modal-content" onClick={stopPropagation}>
        <div className="search-modal-bar">
          <FiSearch className="search-modal-icon" />
          <input
            type="text"
            placeholder="Type to search..."
          />
        </div>
        {/* აქ შეგვიძლია მომავალში დავამატოთ ძიების შედეგები */}
      </div>
    </div>
  );
};

export default SearchModal;