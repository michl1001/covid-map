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



function addCircles(){
  const circleTags = [];
  ref.once("value").then(function(snapshot) {
    data = snapshot.val();
      
    console.log(data);
    
    for (const value in data){
      const circleData = JSON.parse(data[value])
      
      console.log(circleData)

      circleTags.push(<Circle
        radius={10}
        center={{
          lat: circleData.coordinates.latitude,
          lng: circleData.coordinates.longitude
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
  });
  
  console.log(circleTags);

  return circleTags;
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
  constructor(props){
    super(props);
    this.state={
      circleTags:[]
    }
  }

  componentDidMount() {
    let currentComponent = this;
    ref.once("value").then(function(snapshot) {
      data = snapshot.val();
        
      console.log(data);
      
      const circles = [];
      for (const value in data){
        const circleData = JSON.parse(data[value])
        
        console.log(circleData)
        
        circles.push(<Circle
          radius={circleData.latest}
          center={{
            lat: circleData.coordinates.latitude,
            lng: circleData.coordinates.longitude
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
      console.log(circles)
      currentComponent.setState({
        circleTags: circles
      });
  
    });
  }

  render() {
    
    return (
      <Map
        google={this.props.google}
        zoom={2}
        style={mapStyles}
        initialCenter={{
         lat: 0,
         lng: 0
        }}>
          {this.state.circleTags}
          
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.googleAPI
})(MapContainer);
