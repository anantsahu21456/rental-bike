import React from 'react';
import '../css/Searchbar.css'; // Include the CSS for this component

function Searchbar() {
  return (
    <div className="search-bar">
      <input className='search-here' type="text" placeholder="Location" />
      <input className='search-here' type="date" placeholder="Pickup date" />
      <input className='search-here' type="date" placeholder="Return date" />
      <button className="search-btn">Search</button>
    </div>
  );
}

export default Searchbar;
