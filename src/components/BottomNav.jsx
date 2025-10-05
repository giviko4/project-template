// src/components/BottomNav.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCoffee, FiMail, FiSearch } from 'react-icons/fi';
import { useSearch } from '../context/SearchContext';
import './BottomNav.css';

const BottomNav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { openSearch } = useSearch();

  // ... (useEffect უცვლელია) ...

  const handleSearchClick = (e) => {
    e.preventDefault();
    openSearch();
  };

  return (
    <nav className={`bottom-nav ${showNav ? '' : 'hidden'}`}>
      <NavLink to="/" className="nav-link"><FiHome /><span>Home</span></NavLink>
      <NavLink to="/menu" className="nav-link"><FiCoffee /><span>Menu</span></NavLink>
      <NavLink to="/contact" className="nav-link"><FiMail /><span>Contact</span></NavLink>
      <a href="#" className="nav-link" onClick={handleSearchClick}><FiSearch /><span>Search</span></a>
    </nav>
  );
};
export default BottomNav;
