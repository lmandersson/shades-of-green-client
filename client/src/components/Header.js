import React from 'react'
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <h1>Shades of Green</h1>
      <nav>
        <Link to="/">Dashboard</Link><br/>
        {/* <Link to="/filters/">filters</Link><br/> */}
        <Link to="/place/:place_id">place</Link>
        <p> </p>
      </nav>
    </div>
  );
}