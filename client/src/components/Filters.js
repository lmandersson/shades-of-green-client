import React from 'react';
import Popup from "reactjs-popup";
import CustomizedSlider from './Slider';
import Button from '@material-ui/core/Button';
// import teal from '@material-ui/core/colors/teal';

// const primary = teal[500];

export const Filters = (props) => {

  //TODO: is it handled like this? (example is the map component and Dashboard)
  const handleTypeChange = (event) => { // should toggle 
    props.setTypeFilter(event.target.value);
    console.log(event.target.value)
  }
  // TODO: this should handle the score change, maybe add a button 
  // const handleScoreRangeChange = (event) => { // should toggle 
  //   props.setScoreRangeFilter(event.target.value);
  //   console.log(event.target.value)
  // }
  const handleRadiusChange = (event) => { // should toggle 
    props.setRadiusFilter(event.target.value);
    console.log(event.target.value)
  }


  return (
    <div>
      <h3>Filters</h3>
      <Popup trigger={<Button variant="contained" color="primary" size="small">Filter by score</Button>} position="bottom left">
        <div>
          <p>pick the range 1 2 3 4 5</p><br/>
          <CustomizedSlider /> 
        </div>
      </Popup>
      <Popup trigger={<Button variant="contained" color="primary" size="small">Filter by type</Button>} position="bottom left">
        <div>
          <button onClick={handleTypeChange} value="Restaurants">Restaurants</button>
          <button onClick={handleTypeChange} value="Shops">Shops</button>
          <button onClick={handleTypeChange} value="Bars">Bars</button>
        </div>
      </Popup>
      <Popup trigger={<Button variant="contained" color="primary" size="small">Filter by radius</Button>} position="bottom left">
        <div>
          <button onClick={handleRadiusChange} value="1km">1 km</button>
          <button onClick={handleRadiusChange} value="5km">5 km</button>
          <button onClick={handleRadiusChange} value="10km">10 km</button>
          <button onClick={handleRadiusChange} value="20km">20 km</button>
        </div>
      </Popup>
    </div>
  )
}
