import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
// TODO: should be replace with the api call 
import { places } from '../mock-data.json';

const Map = (props) => {
  
  // const [selectedPlace, setSelectedPlace] = useState(null); -> // moved to Dashboard 
  console.log('IN MAP', props.currentLocation);
  
  return (
    <GoogleMap
      defaultCenter={props.currentLocation}
      center={props.currentLocation}
      defaultZoom={10}
      zoom={10}
    >
      {places.map(place => { // TODO: change to props.places.map()
        // console.log(place)
        return ( // returning a marker for each place in the db
        <Marker
          key={place.properties.PLACE_ID}
          position={{
            lat: place.geometry.coordinates[0],
            lng: place.geometry.coordinates[1]
          }}
          onClick={() => {
            props.setSelectedPlace(place);
          }}
        />
      )})}

      {props.selectedPlace && ( // kind of turnary operator, means if we selected one, do the following  
        <InfoWindow
          position={{
            lat: props.selectedPlace.geometry.coordinates[0],
            lng: props.selectedPlace.geometry.coordinates[1]
          }}
          onCloseClick={() => {
            props.setSelectedPlace(null);
          }}
        >
          <div>
            <h2>{props.selectedPlace.properties.NAME}</h2>
            <p>{props.selectedPlace.properties.DESCRIPTION}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
