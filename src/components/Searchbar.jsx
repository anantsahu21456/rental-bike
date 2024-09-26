import React from 'react';
import '../css/Searchbar.css'; // Include the CSS for this component

function Searchbar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Location" />
      <input type="text" placeholder="Pickup date" />
      <input type="text" placeholder="Return date" />
      <button className="search-btn">Search</button>
    </div>
  );
}

export default Searchbar;
