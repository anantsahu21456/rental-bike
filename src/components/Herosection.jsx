import React from 'react';
import '../css/Herosection.css';

function Herosection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Unlock Your Next Ride With BikeGo <span>Easily</span></h1>
        <p>Whether it's a car, bike, or any ride you seek, we've got you covered. Start your journey today.</p>
        <button className="rent-now-btn">Rent Now</button>
      </div>
      <div className="hero-image"></div>
    </section>
  );
}

export default Herosection;
