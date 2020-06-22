import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import googleAPI from '../config.jsx';

const mapStyles = {
  height: "60vh",
  width: "80%",
  display: "inline-block",
  position: 'static'
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleAPI
})(MapContainer);