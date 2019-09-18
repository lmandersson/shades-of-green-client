import React, { useState } from 'react'
import { connect } from 'react-redux';

import { WrappedMap } from '../components/Map';
import { SearchBarContainer } from './Search-bar-container';
import { selectPlace } from '../actions';

export const Dashboard = () => {

  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <div className="dashboard">
      <SearchBarContainer />
      <button className="Filters">Filters</button>
      <WrappedMap
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