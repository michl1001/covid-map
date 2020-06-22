import React from 'react';
import { Map, GoogleApiWrapper, Circle, GoogleMapReact} from 'google-maps-react';
import config from '../../config.jsx';
import ref from '../../database/firebase.jsx';

const mapStyles = {
  height: "80vh",
  width: "100%",
  display: "inline-block",
  position: 'static',
  zindex: '0'
};

var data = {}
ref.once("value").then(function(snapshot) {
  data = snapshot.val()
    
  console.log(data);
});

var circleTags = [];

function addCircles(){
  ref.once("value").then(function(snapshot) {
    data = snapshot.val();
      
    console.log(data);
    
  });

 
  
  for (const value in data){
    circleTags.push(<Circle
      radius={10}
      center={{
        lat: data[value].coordinates.latitude,
        lng: data[value].coordinates.longitude
      }}
      onMouseover={() => console.log('mouseover')}
      onClick={() => console.log('click')}
      onMouseout={() => console.log('mouseout')}
      strokeColor='#FF0000'
      strokeOpacity={0.8}
      strokeWeight={2}
      fillColor='#FF0000'
      fillOpacity={0.35} 
    />);
  }

  console.log(circleTags)

  return (
    circleTags
  );
}
  // Add the circle for this area to the map.
  


/*
export class MapClass extends React.Component {
  render() {
    return (
      
      <GoogleMapReact
          bootstrapURLKeys={{ key: config.googleAPI }}
          defaultCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
          defaultZoom={5}
          yesIWantToUseGoogleMapApiInternals='true'
          onGoogleApiLoaded={({ map, maps }) => addCircles(map, maps)}
        />
        
    );
  }
}
export default MapClass;
*/



export class MapContainer extends React.Component {
  

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={1}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}>
          {addCircles()}
          
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.googleAPI
})(MapContainer);
