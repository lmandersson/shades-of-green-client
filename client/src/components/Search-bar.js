import React from 'react';
import { GoogleComponent } from 'react-google-location';

const API_KEY = 'AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok';


export const SearchBar = (props) => {

  return (
    // <input type="text" placeholder="Near me..."></input> // old input
    <div style={{ height: `10vh`, width: `80vw`}}>
      <GoogleComponent
        apiKey={API_KEY}
        language={'en'}
        country={'country:in|country:us'}
        coordinates={true}
        onChange={(e) => { props.setSearchedPlace(e) }}
      />
    </div>
  )
}