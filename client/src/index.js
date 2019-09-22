import 'typeface-roboto';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
require('dotenv').config();

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import teal from '@material-ui/core/colors/teal';

// import reducers from './reducers';

// let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ &&
//   window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  // <Provider store={store}>
    <App />
  // </Provider>
  ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
