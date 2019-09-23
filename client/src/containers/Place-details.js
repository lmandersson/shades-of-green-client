import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVotedPlaces, getRating } from '../actions'
import { StarVoting } from '../components/Voter';

const Place = ({ match, places = [], votedPlaces = [], sendVotedPlacesToRedux }) => {

  const [rating, setRating] = useState(null)
  const placeIdFromURL = match.params.id;

  const fetchPostVote = (vote) => {
    const BASE_URL = `http://localhost:5000/vote`;
    fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ place_google_id: placeIdFromURL, score: vote, user_id:1}),
    })
      .then(response => response.json())
      .then(() => {        
        setRating(vote)
      })
      .catch(error => console.error(error));
  };

  const place = places.length
    ? places.find(place => place.place_id === placeIdFromURL)
    : JSON.parse(localStorage.getItem('lastPlace'));
  if (!place) return null;
  localStorage.setItem('lastPlace', JSON.stringify(place))

  // const placeVote = getVotedPlaces.average_score;
  // geting the photo URL, no need for third fetch for the api:
  const PHOTOS_API = `https://maps.googleapis.com/maps/api/place/photo?`
  const API_KEY = `AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok`
  const MAX_WIDTH = 400;
  const GET_PHOTOS_URL = place && `${PHOTOS_API}maxwidth=${MAX_WIDTH}&photoreference=${place.photos[0].photo_reference}&key=${API_KEY}`;


  return (
    <div>
      <Link to="/">
        <p><span role="img" aria-label="Back">👈</span></p>
      </Link>
      <h1>{place.name}</h1>
      <img src={GET_PHOTOS_URL} alt="That cool Restaurant" width="300vw" />
      <StarVoting
        placeId={placeIdFromURL}
        rating={rating}
        setVote={fetchPostVote}
      />
      {rating ? <h3>Your vote: {rating}</h3> : null}
      <h3>Address</h3>
      <p>{place.vicinity}</p>
      {place.opening_hours.open_now ? <p>Open now: Yes! <span role="img" aria-label="Happy">🤩</span></p> : <p>Open now: No! <span role="img" aria-label="Sad">🙁</span></p>}
    </div>
  )
}

const mapStateToProps = (state) => ({
  places: state.places,
  votedPlaces: state.votedPlaces,
  rating: state.rating,
});

const mapDispatchToProps = (dispatch) => ({
  // Map your dispatch actions (setStates)
  sendVotedPlacesToRedux: (votedPlaces) => dispatch(getVotedPlaces(votedPlaces)),
  setRatingToRedux: (rating) => dispatch(getRating(rating)),
});

// the actual drilling
export default connect(mapStateToProps, mapDispatchToProps)(Place);