import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'; // -> redux
// import { selectPlace } from '../actions'; // -> redux 

// importing services (fetch requests): 👇🏻
// import getVotedPlaces from '../services/place-db-request';
// import addVote from '../services/vote-request';

import { WrappedMap } from '../components/Map';
import { SearchBar } from './Search-bar-container';
import { results } from '.././mock-data/vegan-res-bcn.json';
// import { Filters } from '../components/Filters';


export const Dashboard = () => {
  //✅ handling with the location of the user:
  const currentLocation = { // this is the default location (BCN🔆 is lat: 41.390205, lng: 2.154007)
    lat: 43.390205,
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

  // if a place has been voted, should be saved in db and present differently in map 
  const [votedPlaces, setVotedPlaces] = useState(null);

  //🅾️ handling with the places list. 
  // should init with the places around the currentLocation
  // and update according to searchedPlace changes:
  // 👇🏻 hardcoded now:
  const currentLocationPlaces = results;

  const PLACES_API = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?`
  const API_KEY = `AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok`

  const PLACE_TYPES = `art_gallery,bakery,beauty_salon,cafe,clothing_store,hair_care,gym,restaurant`
  const GET_PLACES_URL = `${PLACES_API}key=${API_KEY}&location=${location.lat},${location.lng}&radius=2000&type=${PLACE_TYPES}`;

  const [places, setPlaces] = useState(currentLocationPlaces);

  //TODO: activate this get places with useEffect: 👇🏻
  // useEffect(() => {
  //   let mounted = true;
  //   console.log('useEffect called!')

  //   function getPlaces () {
  //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //     return fetch(proxyurl + GET_PLACES_URL, {
  //       method: 'GET',
  //     })
  //       .then(res => res.json()) 
  //       .then(fetchedPlaces => mounted ? setPlaces(fetchedPlaces) && console.log(`new places have being set! Here: ${fetchedPlaces}`) : console.log("No component, no places!")) 
  //       .catch(() => console.log("🧨 Can’t access response. Blocked by browser?"))
  //   }
  //   // calling the getter function 
  //   getPlaces() 

  //   // this is the cleanup 
  //   return () => {
  //     mounted = false; 
  //     console.log(`cleaned the component from the dom 🧹`)
  //   };
  // }, [GET_PLACES_URL]); // Should be this handleSelect in search-bar setLocation (not only the selected place) so location is updated to the seaeches 



  // 🅾️ handling with the votes -> should be updated according to the rating state 
  // url of the backend:
  const BASE_URL = 'http://localhost:5000/places';

  function getVotedPlaces () {
    fetch(BASE_URL, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(votedPlaces => setVotedPlaces(votedPlaces))
      .catch(err => console.log(err));
  }

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
        getVotedPlaces={getVotedPlaces}
      />
    </div>
  )
}


// filters states 
// const [scoreRangeFilter, setScoreRangeFilter] = useState(null);
// const [typeFilter, setTypeFilter] = useState(null);
// const [radiusFilter, setRadiusFilter] = useState(null);

// TODO: Redux
// const mapStateToProps = (state) => ({
  //   // Map your state to props
  //   id: state.id,
// });

// const mapDispatchToProps = (dispatch) => ({
//   // Map your dispatch actions
//   selectPlace: () => dispatch(selectPlace()),
// });

// export default connect(selectPlace)(Dashboard);