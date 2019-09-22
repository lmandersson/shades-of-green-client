import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';
import { Dashboard } from './containers/Dashboard';
import { Place } from './containers/Place-details';
import { Header } from './components/Header';



function App () {  
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Dashboard} />
        <Route path="/place/:id" component={Place} />
      </div>
    </Router>
  )
}

export default App;


