import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
// TODO: should be replace with the api call 
import { results } from '.././mock-data/vegan-res-bcn.json';
import { Link } from "react-router-dom";

const Map = ({ currentLocation, selectedPlace, setSelectedPlace}) => {

  // const [selectedPlace, setSelectedPlace] = useState(null); -> // moved to Dashboard 
  console.log('IN MAP', currentLocation);

  return (
    <GoogleMap
      defaultCenter={currentLocation}
      center={currentLocation}
      defaultZoom={12}
    >
      {results.map(place => {
        return ( 
          <Marker
            key={place.place_id}
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng
            }}
            onClick={() => {
              setSelectedPlace(place);
            }}
          />
        )
      })}

      {selectedPlace && ( // kind of turnary operator, means if we selected one, do the following  
        <InfoWindow
          position={{
            lat: selectedPlace.geometry.location.lat,
            lng: selectedPlace.geometry.location.lng
          }}
          onCloseClick={() => {
            setSelectedPlace(null);
          }}
        >
          <div>
            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.vicinity}</p>
            <img src={selectedPlace.icon}/>
            <Link to={`/place/${selectedPlace.place_id}`}>go to place</Link>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
