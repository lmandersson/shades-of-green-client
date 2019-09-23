import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import { Link } from "react-router-dom";


const getSelectedInfo = (selectedPlace, votedPlaces) => {
  const match = votedPlaces.find(votedPlace => selectedPlace.place_id === votedPlace.google_id)  
  return match 
  ? <div>
      <p>Score: {match.average_score}</p>
      <p>{match.num_of_votes} people rated this place</p>
  </div> 
  : null;
}

// FIXME: use this functionallity to defrentiate between voted and unvoted places:
const paintVotedPlace = (markerPlace, votedPlaces) => {
  const match = votedPlaces && votedPlaces.find(votedPlace => markerPlace.place_id === votedPlace.google_id);
  console.log(match, 'match');
  
  return match
  ? process.env.PUBLIC_URL + 'favicon-32.png'  // presenting as a colorful icon
  : process.env.PUBLIC_URL + 'black-logo.png'; // presenting a black icon
}


const Map = ({ location, places = [], selectedPlace, setSelectedPlace, votedPlaces }) => {
  console.log('votedPlaces: ', votedPlaces);
  return (
    <GoogleMap
      defaultCenter={location}
      center={location}
      defaultZoom={12}
      zoom={14}
    >
      {places.map(place => {
        return (
          <Marker
            key={place.place_id}
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng
            }}
            icon={
              paintVotedPlace(place, votedPlaces)
            } 
            onClick={() => {
              setSelectedPlace(place);
            }}
          />
        )
      })}

      {selectedPlace && (
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

            { getSelectedInfo(selectedPlace, votedPlaces)  }
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}


export const WrappedMap = withScriptjs(withGoogleMap(Map));

