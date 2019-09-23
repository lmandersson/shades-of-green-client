import React from 'react'

export const StarVoting = ({ rating, setVote}) => {


  const handleVote = (e) => {
    e.preventDefault();
    setVote(e.target.value)
  }

  return (
    <div>
      <h2>Current Rating: {rating}</h2>
      <form className="voting-form">
        {[1, 2, 3, 4, 5].map(rating => <button 
        key={rating}
        onClick={handleVote}
          className={`${rating}-stars`} value={rating} type="submit">{rating}</button>
        )}

      </form>
    </div>
  );
}

