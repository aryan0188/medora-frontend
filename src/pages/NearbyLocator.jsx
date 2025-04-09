import React, { useState } from 'react';

const NearbyLocator = () => {
  const [location, setLocation] = useState('');
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (location.trim() === '') return;

    // Simulating nearby places search based on the location entered
    const places = [
      { name: 'City Pharmacy', distance: '1.2 km', type: 'Pharmacy' },
      { name: 'Downtown Clinic', distance: '2.5 km', type: 'Doctor' },
      { name: 'Health Pharmacy', distance: '3.1 km', type: 'Pharmacy' },
    ];

    setNearbyPlaces(places);
  };

  return (
    <div className="page">
      <h2>Find Nearby Pharmacies and Doctors</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter your location..."
          className="input-field"
        />
        <button type="submit">Search</button>
      </form>

      <div className="nearby-places">
        {nearbyPlaces.length > 0 ? (
          <ul>
            {nearbyPlaces.map((place, index) => (
              <li key={index}>
                <p>{place.name}</p>
                <p>{place.type} - {place.distance}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No places found. Please try again.</p>
        )}
      </div>
    </div>
  );
};

export default NearbyLocator;
