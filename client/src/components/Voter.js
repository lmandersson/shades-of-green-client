import React, {useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';

export const StarVoting = () => {

  const [rating, setRating] = useState(3)

  // TODO: is this the handler for the star click? Checkout docomuntation
  const onStarClick = (nextValue, prevValue, name) => {
    setRating({ nextValue });
  }

  return (
    <div>
      <h2>Rating from state: {rating}</h2>
      <StarRatingComponent
        name="ratePlace"
        starCount={5}
        value={rating}
        renderStarIcon={() => <span></span>} 
        onStarClick={onStarClick}
      />
    </div>
  );
}

