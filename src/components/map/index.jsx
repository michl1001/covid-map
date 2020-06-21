import React from 'react';
import GoogleApiWrapper from './map.jsx';
import './style.css';

function MapContainer(props) {
    return (
      <div className="map">
        <GoogleApiWrapper /> 
      </div>
    );
  }

  export default MapContainer;