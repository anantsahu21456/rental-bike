import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link className='text' to="/home">Anant/sahu</Link>
      </div>
      <ul>
        
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/rentaldeals">Rental Deals</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/signup" className="auth-btn">Sign Up</Link>
        <Link to="/signin" className="auth-btn">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
