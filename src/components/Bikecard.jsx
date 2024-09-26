// BikeCard.jsx
import React from 'react';
import '../css/Bikecard.css';

const Bikecard = ({ name, rating, reviews, passengers, manual, price, year, image }) => {
    return (
        <div className="bike-card">
            <div className="availability">Only 1 Left</div>
            
            {/* Image Section */}
            <div className="bike-card-image-section">
                <img src={image} alt={name} className="bike-image" />
            </div>

            {/* Content Section */}
            <div className="bike-card-content-section">
                <h3>{name}</h3>
                <div className="rating">
                    ⭐ {rating} ({reviews} reviews)
                </div>
                <div className="details">
                    <p>{passengers} {passengers > 1 ? 'Passengers' : 'Passenger'}</p>
                    <p>{manual ? 'Manual' : 'Automatic'}</p>
                </div>
                <div className="price">₹{price} /day</div>
                <div className="year">Year {year}</div>
                <button className="rent-btn">Rent Now</button>
            </div>
        </div>
    );
};

export default Bikecard;
