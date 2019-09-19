import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <h1>Shades of Green</h1>
      <nav>
        <Link to="/">Back</Link><br/>
        {/* <Link to="/place/:place_id">place</Link> link is now from Marker on the map */}
        <div> </div>
      </nav>
    </div>
  );
}