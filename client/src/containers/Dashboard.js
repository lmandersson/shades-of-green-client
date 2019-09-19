import React, { useState } from 'react'
import { connect } from 'react-redux';

import { WrappedMap } from '../components/Map';
import { SearchBarContainer } from './Search-bar-container';
import { selectPlace } from '../actions';
import { Filters } from '../components/Filters';

export const Dashboard = () => {

  const currentLocation = { // should get from api
    lat: 41.390205, 
    lng: 2.154007 
  };

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [location, setLocation] = useState(currentLocation);
  const [places, setPlaces] = useState([])

  // filters states 
  const [scoreRangeFilter, setScoreRangeFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [radiusFilter, setRadiusFilter] = useState(null);

  // TODO: useEffect for setPlaces when component mount

  return (
    <div className="dashboard">
      <SearchBarContainer />
      <Filters
        setScoreRangeFilter={setScoreRangeFilter}
        setTypeFilter={setTypeFilter}
        setRadiusFilter={setRadiusFilter}
      />
      <WrappedMap
        places={places} // injecting the places to use in map
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


const mapStateToProps = (state) => ({
  // Map your state to props
  id: state.id,
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions
  selectPlace: () => dispatch(selectPlace()),
});

export default connect(selectPlace)(Dashboard);