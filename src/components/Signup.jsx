import React from 'react';
import '../css/Signup.css'; // You can reuse the same CSS file for consistency
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h3 className="signin-title">Welcome to Rental Bike</h3>
        <div className="signin-toggle">
          <button className="signin-btn">Login</button>
          <button className="signup-btn active">Register</button>
        </div>
        <p className="signin-text">Please enter your details carefully</p>
        
        {/* Signup inputs with labels */}
        <div className="signin-inputs">
          <div className="input-group">
            <input id="first-name" type="text" placeholder=" " className="signin-input" />
            <label htmlFor="first-name" className="input-label">First Name</label>
          </div>
          
          <div className="input-group">
            <input id="last-name" type="text" placeholder=" " className="signin-input" />
            <label htmlFor="last-name" className="input-label">Last Name</label>
          </div>
          
          <div className="input-group">
            <input id="email" type="email" placeholder=" " className="signin-input" />
            <label htmlFor="email" className="input-label">Email</label>
          </div>
          
          <div className="input-group">
            <input id="phone-number" type="number" placeholder=" " className="signin-input" />
            <label htmlFor="phone-number" className="input-label">Phone Number</label>
          </div>
          
          <div className="input-group">
            <input id="password" type="password" placeholder=" " className="signin-input" />
            <label htmlFor="password" className="input-label">Password</label>
          </div>
          
          <div className="input-group">
            <input id="confirm-password" type="password" placeholder=" " className="signin-input" />
            <label htmlFor="confirm-password" className="input-label">Confirm Password</label>
          </div>
        </div>
        
        <div className="signin-options">
          <div className="remember-me">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="remember-label">I agree to the terms & conditions</label>
          </div>
        </div>
        
        <button className="submit-login-btn">Register</button>
        <p className="signup-link-text">
          Already have an account? <Link to='/Signin' className="signup-link-btn">Login</Link>
        </p>
        <p className="social-login-text">____________Or sign up with____________</p>
        <div className="social-icons">
          <i className="fab fa-facebook">⭐</i>
          <i className="fab fa-mackbook">😎</i>
          <i className="fab fa-google">😁</i>
        </div>
      </div>
    </div>
  );
}

export default Signup;
