import React from 'react'

import { results } from '.././mock-data/vegan-res-bcn.json';
import image from '../restaurant.jpg';
import { StarVoting } from '../components/Voter';

export const Place = (props) => {

  const placeIdFromURL = props.match.params.id;
  const place = results.find(place => place.place_id === placeIdFromURL );
  // {/* TODO: Create a fetch request with that photo reference */}
  // {/* https://developers-dot-devsite-v2-prod.appspot.com/places/web-service/photos */}

  return (
    <div>
      <h1>{place.name}</h1>
      {console.log("Photo reference: ", place.photos[0].photo_reference)}
      <img src={image} alt="Restaurant" width="300vw" />
      <StarVoting />
      <h2>Score: 4.5 (from mydb)</h2>
      <h3>Address</h3>
      <p>{place.vicinity}</p>
      {/* <h3>Open now:</h3>
        {place.opening_hours.open_now ? <p>yes!</p> : <p>No!</p>} */}
    </div>
  )
}