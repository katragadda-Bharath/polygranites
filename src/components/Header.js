import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Jiyanshi Polygranites</h1>
        <nav className="header-nav">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/designs" className="nav-link">Designs</NavLink>
            <NavLink to="/work" className="nav-link">Our Work</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header; 