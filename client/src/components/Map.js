import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { Link } from "react-router-dom";

// TODO: was replaced with the places state (in dashbpard)
import { results } from '.././mock-data/vegan-res-bcn.json';

const Map = ({ location, places, selectedPlace, setSelectedPlace, votedPlaces }) => {
  
  return (
    <GoogleMap
      defaultCenter={location}
      center={location}
      defaultZoom={12}
      zoom={14}
    >
      {results.map(place => { // was results.map -> now places state is populated with results
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
            <img src={selectedPlace.icon} alt={<p>Image of{selectedPlace.name}</p>} />
            <Link to={`/place/${selectedPlace.place_id}`}>go to place</Link>
            {/* FIXME: */}
            {/* {votedPlaces.find(votedPlace => selectedPlace.place_id === votedPlace.google_id) ? <p>Score: {votedPlaces.filter(votedPlace => votedPlace.google_id === selectedPlace.place_id).average_score}</p> : null} */}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}

export const WrappedMap = withScriptjs(withGoogleMap(Map));
