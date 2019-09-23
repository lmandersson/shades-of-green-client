import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'; 

import { updatePlaces } from '../actions'; 
import { WrappedMap } from '../components/Map';
import { SearchBar } from './Search-bar-container';
// import { Filters } from '../components/Filters';
import { getVotedPlaces } from '../actions'


const Dashboard = ({ places, sendPlacesToRedux, votedPlaces, sendVotedPlacesToRedux }) => {
  //✅ handling with the location of the user:
  const currentLocation = { // this is the default location (BCN🔆 is lat: 41.390205, lng: 2.154007)
    lat: 45.390205,
    lng: 2.154007
  };

  const [location, setLocation] = useState(currentLocation);

  useEffect(() => {
    console.log('Location state is loaded now');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      }, (err) => {
        console.log(err);
      });
    }
  }, [])

  // if a places has been searched in the search bar:
  const [searchedPlace, setSearchedPlace] = useState('');
  //if a place has been seleced, should open infoWindow
  const [selectedPlace, setSelectedPlace] = useState(null);


  //✅ handling with the places list.
  const PLACES_API = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`
  const API_KEY = `AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok`
  const PLACE_TYPES = `restaurant,cafe,clothing_store,gym` // TODO: change not to see hotels 
  const GET_PLACES_URL = `${PLACES_API}key=${API_KEY}&location=${location.lat},${location.lng}&radius=2000&type=${PLACE_TYPES}`;

  const fetchPlaces = () => {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyurl + GET_PLACES_URL, {
        method: 'GET',
      })
        .then(res => res.json()) 
        .then((placesArr) => {sendPlacesToRedux(placesArr)}) 
        .catch(() => console.log("🧨 Can’t access response. Blocked by browser?"))
    }

  useEffect(fetchPlaces, [GET_PLACES_URL])

  // 🅾️ handling with the votes -> should be updated according to the rating state 
  // url of the backend:
  const BASE_URL = 'http://localhost:5000/places';

  function fetchVotedPlaces () {
    fetch(BASE_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(votedPlaces => sendVotedPlacesToRedux(votedPlaces))
      .catch(err => console.log(err));
  }

  useEffect(fetchVotedPlaces, []) // 


  return (
    <div className="dashboard">
      <SearchBar
        setLocation={setLocation}
        searchedPlace={searchedPlace}
        setSearchedPlace={setSearchedPlace}
      />
      {/* <Filters
      setScoreRangeFilter={setScoreRangeFilter}
      setTypeFilter={setTypeFilter}
      setRadiusFilter={setRadiusFilter}
      /> */}
      <WrappedMap
        location={location}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        setSelectedPlace={setSelectedPlace}
        selectedPlace={selectedPlace}
        places={places}
        votedPlaces={votedPlaces}
        // getVotedPlaces={getVotedPlaces}
      />
    </div>
  )
}


// filters states 
// const [scoreRangeFilter, setScoreRangeFilter] = useState(null);
// const [typeFilter, setTypeFilter] = useState(null);
// const [radiusFilter, setRadiusFilter] = useState(null);

// TODO: Redux
const mapStateToProps = (state) => ({
    // describing what im drilling: (states)
    places: state.places,
    votedPlaces: state.votedPlaces,
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions (setStates)
  sendPlacesToRedux: (places) => dispatch(updatePlaces(places)),
  sendVotedPlacesToRedux: (votedPlaces) => dispatch(getVotedPlaces(votedPlaces)),
});

 // the actual drilling
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);