// src/pages/Menu.jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { menuData } from '../data/menuItems';
import './Menu.css';

const Menu = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  const filteredCoffee = menuData.coffee.filter(item =>
    searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );

  const filteredPastries = menuData.pastries.filter(item =>
    searchQuery ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
  );

  const totalResults = filteredCoffee.length + filteredPastries.length;

  return (
    <div className="menu-page container">
      {searchQuery ? (
        <h1 className="search-results-title"> 
          <span>"{searchQuery}"</span>
        </h1>
      ) : (
        <>
          <h1 className="menu-title">Our Menu</h1>
          <p className="menu-intro">
            Discover our carefully curated selection of artisanal coffees and freshly baked pastries, 
            made with love and the finest ingredients.
          </p>
        </>
      )}

      {/* ყავის სექცია */}
      {filteredCoffee.length > 0 && (
        <section className="menu-section">
          <h2>Coffee</h2>
          <div className={`menu-grid ${totalResults === 1 ? 'center-single-item' : ''}`}>
            {filteredCoffee.map(item => (
              <div key={item.id} className="menu-card" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="menu-card-overlay">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ნამცხვრების სექცია */}
      {filteredPastries.length > 0 && (
        <section className="menu-section">
          <h2>Pastries</h2>
          <div className={`menu-grid ${totalResults === 1 ? 'center-single-item' : ''}`}>
            {filteredPastries.map(item => (
              <div key={item.id} className="menu-card" style={{ backgroundImage: `url(${item.image})` }}>
                <div className="menu-card-overlay">
                  <h3>{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                  <span className="price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {totalResults === 0 && searchQuery && (
        <p className="no-menu-results">No items found matching your search.</p>
      )}
    </div>
  );
};

export default Menu;