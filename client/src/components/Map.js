import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = (props) => {
  return (
    <GoogleMap
      defaultCenter={{ lat: 41.390205, lng: 2.154007 }}
    defaultZoom={10}
    />
    )
  }
  
export const WrappedMap = withScriptjs(withGoogleMap(Map));
