import React from 'react';
import NavBar from './components/navBar'
import MapContainer from './components/map'
import Info from './components/extra-info'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MapContainer />
      <Info />
    </div>
  );
}

export default App;
