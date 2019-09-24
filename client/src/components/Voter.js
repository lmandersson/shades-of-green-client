import React from 'react'
// import Button from '@material-ui/core/Button';
import firstEmoji from '../emojies/1-crying-carrot.png';
import secondEmoji from '../emojies/2-sad-carrot.png';
import ThirdEmoji from '../emojies/3-middle-carrot.png';
import ForthEmoji from '../emojies/4-happy-carrot.png';
import FifthEmoji from '../emojies/5-inlove-carrot.png';

export const StarVoting = ({ rating, setVote }) => {

  const handleVote = (e) => {
    e.preventDefault();
    setVote(Number.parseInt(e.target.value))
  }

  const voteEmoji = [firstEmoji, secondEmoji, ThirdEmoji, ForthEmoji, FifthEmoji];

  return (
    <div>
      <h2>Vote now!</h2>
      {/* FIXME: works only if clicking on the number */}
      <form className="voting-form">
        {[1, 2, 3, 4, 5].map(vote => (
          <button
            key={vote}
            onClick={handleVote}
            value={vote}
            type="submit"
          >
            <img
              src={voteEmoji[vote - 1]}
              width="40px" height="40px"
              alt={vote}
              value={vote}
            />
            {vote}
          </button>)
        )}
        {rating ? <h3>Your vote: {rating}</h3> : null}

      </form>
    </div>
  );
}

