import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} The Bloom Room. A really cool Website</p>
      </div>
    </footer>
  );
};

export default Footer;
