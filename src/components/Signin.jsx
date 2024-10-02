import React from 'react';
import '../css/Signin.css';

function Signin() {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h3 className="signin-title">Welcome Back to Rental Bike</h3>
        <div className="signin-toggle">
          <button className="signin-btn active">Login</button>
          <button className="signup-btn">Register</button>
        </div>
        <p className="signin-text">Login to access your Rental bike account</p>
        
        <div className="signin-inputs">
          <input type="email" placeholder="Email" className="signin-input" />
          
          {/* Updated password input structure */}
          <div className="password-wrapper">
            <input type="password" placeholder="Password" className="signin-input password-input" />
            <span className="toggle-password"></span> {/* Eye Icon */}
          </div>
        </div>
        
        <div className="signin-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember" className="remember-label">Remember me</label>
          </div>
          <button className="forgot-password-btn">Forgot Password</button>
        </div>
        
        <button className="submit-login-btn">Login</button>
        <p className="signup-link-text">
          Don't have an account? <button className="signup-link-btn">Sign up</button>
        </p>
        
        <p className="social-login-text">____________Or login with____________</p>
        <div className="social-icons">
          <i className="fab fa-facebook">⭐</i>
          <i className="fab fa-mackbook">😎</i>
          <i className="fab fa-google">😁</i>
        </div>
      </div>
    </div>
  );
}

export default Signin;
