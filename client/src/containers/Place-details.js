import React from 'react'

// TODO: those 3 fetch requests will replace the use of mock data
// import placeDB from '../services/place-db-request';
// import results from '../services/place-google-request';
// import placePhoto from '../services/photo-google-request';

import { results } from '.././mock-data/vegan-res-bcn.json';
import image from '../restaurant.jpg';

export const Place = (props) => {

  const placeIdFromURL = props.match.params.id;
  const place = results.find(place => place.place_id === placeIdFromURL);
  // const placeVote = placeDB.average_score;

  return (
    <div>
      <h1>{place.name}</h1>
      {console.log("Photo reference: ", place.photos[0].photo_reference)}
      <img src={image} alt="Restaurant" width="300vw" />
      {/* <img src={placePhoto} alt="Restaurant" width="300vw" /> */}
      <form className="voting-form">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button type="submit">Submit your vote</button>
      </form>
      <h2>Score: 4.5 {/*placeVote*/}</h2>
      <h3>Address</h3>
      <p>{place.vicinity}</p>
      {/* <h3>Open now:</h3>
        {place.opening_hours.open_now ? <p>yes!</p> : <p>No!</p>} */}
    </div>
  )
}