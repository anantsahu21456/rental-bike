// BikeSection.jsx
import React from 'react';
import BikeCard from '../components/Bikecard';
import { bikeData } from '../components/Bikedata'; // Import the dummy bike data
import '../css/Bikesection.css'; // Import additional styles

const Bikesection = () => {
    return (
        <div className="bike-section-container">
            <h2 className="bike-section-heading">Popular Bikes</h2> {/* Add heading here */}
            <div className="bike-list">
                {bikeData.map((bike, index) => (
                    <BikeCard key={index} {...bike} />
                ))}
            </div>
        </div>
    );
};

export default Bikesection;
