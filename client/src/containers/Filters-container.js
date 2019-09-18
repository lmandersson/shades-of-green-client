import React, { useState } from 'react';

import { Filters } from '../components/Filters';


export const FiltersContainer = () => {

  const [scoreRangeFilter, setScoreRangeFilter] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);
  const [radiusFilter, setRadiusFilter] = useState(null);


  return (
    <Filters
      setScoreRangeFilter={setScoreRangeFilter}
      setTypeFilter={setTypeFilter}
      setRadiusFilter={setRadiusFilter}
    />)
}