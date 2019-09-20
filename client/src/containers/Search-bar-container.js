import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
// import { selectPlace } from '../actions'; //TODO: redux

// const API_KEY = 'AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok';

export const SearchBar = (props) => {

  const [searchedPlace, setSearchedPlace] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    setSearchedPlace(value);
    props.setLocation(latlng);
  };

  return (
    <div style={{ height: `10vh`, width: `80vw` }}>

      <PlacesAutocomplete
        value={searchedPlace}
        onChange={setSearchedPlace}
        onSelect={handleSelect} // when the user selects one option
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Type city..." })} />
            <div>
              {loading ? <div>Loading...</div> : null}
              {suggestions.map(suggestion => {

                const style = {
                  backgroundColor: suggestion.active ? '#41b6e6' : '#ffffff'
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>)
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  )
}