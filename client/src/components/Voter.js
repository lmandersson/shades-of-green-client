import React from 'react'

export const StarVoting = ({ rating, setRating }) => {

  const handleVote = (e) => {
    e.preventDefault();
    setRating(e.target.value)
  }

  return (
    <div>
      <h2>Current Rating: {rating}</h2>
      <form className="voting-form">
        <button onClick={handleVote} className="1-stars" value="1" type="submit">1</button>
        <button onClick={handleVote} className="2-stars" value="2" type="submit">2</button>
        <button onClick={handleVote} className="3-stars" value="3" type="submit">3</button>
        <button onClick={handleVote} className="4-stars" value="4" type="submit">4</button>
        <button onClick={handleVote} className="5-stars" value="5" type="submit">5</button>
      </form>
    </div>
  );
}

