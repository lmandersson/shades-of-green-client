// TODO: here will be a fetch request with this URL 
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.390205,2.154007&radius=2500&type=restaurant&keyword=vegan&key=AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok
// with dinamic values 

const BASE_URL = 'http://localhost:5000/places';

export function getVotedPlaces () {
  fetch(BASE_URL, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(votedPlaces => setVotedPlaces(votedPlaces))
    .catch(err => console.log(err));
}
