import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { WrappedMap } from './components/Map';
const API_KEY = 'AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok';

function Header () {
  return (
    <div>
      <h1>Shades of Green</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/filters/">filters</Link>
          </li>
          <li>
            <Link to="/place/">place</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <input type="text" placeholder="Near me..."></input>
      <h3>Filters</h3>
      <button>Filter by score</button>
      <button>Filter by type</button>
      <button>Filter by radius</button>
      {/* <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAE71vQRELEoUHanJup0hhNX1Cup3_bXok&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `80%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      /> */}
    </div>
  )
}

const Filters = () => {
  return <h1>Filters</h1>
}

const Place = () => {
  return <h1>Place</h1>
}



function App () {
  return (
    // <div className="App" style={{ height: `100vh`, width: `80vw` }}>
    <Router>
      <div>
        <Header />

        <Route path="/" exact component={Dashboard} />
        <Route path="/filters/" component={Filters} />
        <Route path="/place/" component={Place} />
      </div>
    </Router>
    // <p>Shades Of Green</p>
    // <p>Search bar</p>
    // </div>
  );
}

export default App;


