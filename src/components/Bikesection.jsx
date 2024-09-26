// BikeSection.jsx
import React from 'react';
import BikeCard from '../components/Bikecard';
import { bikeData } from '../components/Bikedata'; // Import the dummy bike data
import '../css/Bikesection.css'; // Import additional styles

const Bikesection = () => {
    return (
        <div className="bike-list">
            {bikeData.map((bike, index) => (
                <BikeCard key={index} {...bike} />
            ))}
        </div>
    );
};

export default Bikesection;
