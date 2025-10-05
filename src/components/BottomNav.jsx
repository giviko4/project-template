// src/components/BottomNav.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCoffee, FiMail, FiSearch } from 'react-icons/fi';
import './BottomNav.css';

const BottomNav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      // თუ გვერდის ზედა ნაწილში ვართ (10px ან ნაკლები), ყოველთვის ვაჩენთ ნავიგაციას
      if (window.scrollY <= 10) {
        setShowNav(true);
      } else if (window.scrollY > lastScrollY) { // თუ ქვემოთ ვსქროლავთ
        setShowNav(false);
      } else { // თუ ზემოთ ვსქროლავთ
        setShowNav(true);
      }
      // ვინახავთ ამჟამინდელ სქროლის პოზიციას შემდეგი შედარებისთვის
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // ვშლით event listener-ს, როცა კომპონენტი ქრება
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);


  const handleSearchClick = (e) => {
    e.preventDefault();
    alert('Search functionality will be added here!');
  };

  return (
    // ვამატებთ დინამიურ კლასს 'hidden'
    <nav className={`bottom-nav ${showNav ? '' : 'hidden'}`}>
      <NavLink to="/" className="nav-link">
        <FiHome />
        <span>Home</span>
      </NavLink>
      <NavLink to="/menu" className="nav-link">
        <FiCoffee />
        <span>Menu</span>
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        <FiMail />
        <span>Contact</span>
      </NavLink>
      <a href="#" className="nav-link" onClick={handleSearchClick}>
        <FiSearch />
        <span>Search</span>
      </a>
    </nav>
  );
};

export default BottomNav;