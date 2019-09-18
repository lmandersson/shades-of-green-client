import React from 'react'

import image from '../restaurant.jpg';
import {StarVoting} from '../components/Voter';

// I will add a few presentetional components to fill this up
export const Place = () => {
  return (
    <div>
      <h1>Place</h1>
      <img src={image} alt="Restaurant" width="300vw"/>
      <StarVoting />
      <h2>Flex&Kale</h2>
      <h2>Score: 4.5</h2>
      <h3>More details</h3>
    </div>
  )
}