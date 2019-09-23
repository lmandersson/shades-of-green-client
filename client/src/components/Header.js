import React from 'react'

export const Header = () => {  
  return (
    <div>
      <h1>Shades of Green</h1>
      <img src={process.env.PUBLIC_URL + 'favicon-32.png'} alt="logo" />
    </div>
  );
}