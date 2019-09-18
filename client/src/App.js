import React from 'react';
import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const API_KEY = 'AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok';

const Map = (props) => {
  return (
    <GoogleMap
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
      defaultZoom={10}
    />
  )} 

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App" style={{ height: `100vh`, width: `80vw` }}>
      <p>Hello from dashboard</p>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
