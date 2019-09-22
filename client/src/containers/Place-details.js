import React, { useState } from 'react'

// TODO: those 3 fetch requests will replace the use of mock data
// import {getVotedPlaces} from '../services/place-db-request';
// import results from '../services/place-google-request';

import { results } from '.././mock-data/vegan-res-bcn.json';
import { StarVoting } from '../components/Voter';

export const Place = (props) => {
  
  const [rating, setRating] = useState(null)
  
  const placeIdFromURL = props.match.params.id;
  const place = results.find(place => place.place_id === placeIdFromURL);
  // const place = results[0]; // FIXME:
  console.log("place: ",place)
  console.log(results);

  // geting the photo URL, no need for third fetch for the api:
  const PHOTOS_API = `https://maps.googleapis.com/maps/api/place/photo?`
  const API_KEY = `AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok`
  const MAX_WIDTH = 400;
  const GET_PHOTOS_URL = `${PHOTOS_API}maxwidth=${MAX_WIDTH}&photoreference=${place.photos[0].photo_reference}&key=${API_KEY}`;
  // const placeVote = getVotedPlaces.average_score;

  return (
    <div>
      <h1>{place.name}</h1>
      <img src={GET_PHOTOS_URL} alt="That cool Restaurant" width="300vw" />
      <StarVoting
        rating={rating}
        setRating={setRating}
      />
      <h3>Address</h3>
      <p>{place.vicinity}</p>
      {place.opening_hours.open_now ? <p>Open now: Yes! <span role="img" aria-label="Happy">🤩</span></p> : <p>Open now: No! <span role="img" aria-label="Sad">🙁</span></p>}
    </div>
  )
}