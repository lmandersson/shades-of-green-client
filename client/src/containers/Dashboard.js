import React, { useState, useEffect } from 'react'
// import { connect } from 'react-redux'; // -> redux

import { WrappedMap } from '../components/Map';
import { SearchBar } from './Search-bar-container';
import { Filters } from '../components/Filters';
// import { selectPlace } from '../actions'; // -> redux 

//the quary https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.390205,2.154007&radius=2500&type=restaurant&keyword=vegan&key=AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok

export const Dashboard = () => {

  const currentLocation = { // should get real current location from api
    lat: 41.390205,
    lng: 2.154007
  };

  //this should be searchedPlace and 
  const [location, setLocation] = useState(currentLocation);

  // this should be the answer of the api call
  const [places, setPlaces] = useState([]);

  //if a place has been seleced, should open infoWindow
  const [selectedPlace, setSelectedPlace] = useState(null);

  // filters states 
  const [scoreRangeFilter, setScoreRangeFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [radiusFilter, setRadiusFilter] = useState(null);

  // TODO: useEffect for setPlaces when component mount when add api fetch
  useEffect(() => {
    console.log('You loaded now');
  }, [])

  return (
    <div className="dashboard">
      <SearchBar
        location={location}
        setLocation={setLocation}
      />
      <Filters
        setScoreRangeFilter={setScoreRangeFilter}
        setTypeFilter={setTypeFilter}
        setRadiusFilter={setRadiusFilter}
      />
      <WrappedMap
        places={places} 
        currentLocation={location}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        setSelectedPlace={setSelectedPlace} // like this?
        selectedPlace={selectedPlace}
      />
    </div>
  )
}

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