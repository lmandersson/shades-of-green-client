import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
    defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    defaultZoom={10}
    />
    )
  }
  
// the 
export const WrappedMap = withScriptjs(withGoogleMap(Map));
