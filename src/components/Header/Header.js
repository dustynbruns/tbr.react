import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/TBR-logo.png"
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
        <img src={logo} alt='logo'/> 
        </Link>
        <h1 className='header-title'>The Bloom Room</h1>
        <nav className="header-nav">
          <ul>
          <li>
              <Link to="/" className="header-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="header-link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="header-link">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" className="header-link">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
