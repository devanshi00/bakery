import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <img src="https://img.freepik.com/premium-vector/bakery-logo-design_260747-392.jpg" alt="Bakery Logo"/>
        </div>

        <div className="footer-section contact">
          <h2>Contact Kiran's Kitchen</h2>
          <p>Email: kirans.kitchen@gmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Locations: Gondal & Rajkot, Gujarat</p>
          <p>DM for custom orders and inquiries!</p>
        </div>

        <div className="footer-info">
          <p>© 2024 Kiran's Kitchen. All rights reserved.</p>
          <p>Home Cook👩🏻‍🍳 and Baker🍰 - Follow us for daily updates on fresh creations!</p>
          <p>
            Follow us on:
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a> | 
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> | 
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
