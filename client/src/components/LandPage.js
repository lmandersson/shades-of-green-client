import React from 'react'
import { Link } from 'react-router-dom';

export function LandPage () {
  return (
    <div>
      <h1>Shades of Green</h1>
      <img src={process.env.PUBLIC_URL + 'icon-128.png'} alt="logo"/>
      <p><Link to="/">Check it out!</Link></p>
    </div>
  )
}
