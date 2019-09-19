import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
// TODO: should be replace with the api call 
// import { places } from '../mock-data.json';
import { results } from '.././mock-data/vegan-res-bcn.json';

const Map = (props) => {

  // const [selectedPlace, setSelectedPlace] = useState(null); -> // moved to Dashboard 
  console.log('IN MAP', props.currentLocation);

  return (
    <GoogleMap
      defaultCenter={props.currentLocation}
      center={props.currentLocation}
      defaultZoom={10}
      // zoom={10}
    >
      {/* {places.map(place => {  this is the old mock data */}
      {results.map(place => {
        return ( // returning a marker for each place in the db
          <Marker
            key={place.place_id}
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng
            }}
            onClick={() => {
              props.setSelectedPlace(place);
            }}
          />
        )
      })}

      {props.selectedPlace && ( // kind of turnary operator, means if we selected one, do the following  
        <InfoWindow
          position={{
            lat: props.selectedPlace.geometry.location.lat,
            lng: props.selectedPlace.geometry.location.lng
          }}
          onCloseClick={() => {
            props.setSelectedPlace(null);
          }}
        >
          <div>
            <h2>{props.selectedPlace.name}</h2>
            <p>{props.selectedPlace.vicinity}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
