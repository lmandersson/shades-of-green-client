import React, { useState } from 'react';
import { SearchBar } from '../components/Search-bar';


export const SearchBarContainer = () => {
  
  const [searchedPlace, setSearchedPlace] = useState(null);

  return (
    <SearchBar
      setSearchedPlace={setSearchedPlace}
    />)
}