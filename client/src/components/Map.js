import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { places } from '../mock-data.json';

const Map = (props) => {

  // const [selectedPlace, setSelectedPlace] = useState(null); -> // moved to Dashboard 

  return (
    <GoogleMap
      defaultCenter={{ lat: 41.390205, lng: 2.154007 }}
      defaultZoom={10}
    >
      {places.map(place => {
        console.log(place)
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
