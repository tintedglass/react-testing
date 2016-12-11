import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Import the routes and history (so back button works correctly)
import { browserHistory } from 'react-router';
import Routes from './Routes';

// Import Firebase for deployment and database connection
import * as firebase from 'firebase';

// Firebase config
var config = {
    apiKey: "AIzaSyDMNvc6oDU1PrTwI16R1QS4A_SQLZOObhc",
    authDomain: "reacttesting-eea60.firebaseapp.com",
    databaseURL: "https://reacttesting-eea60.firebaseio.com",
    storageBucket: "reacttesting-eea60.appspot.com",
    messagingSenderId: "707481194800"
};
firebase.initializeApp(config);

// Render current route to root div on index.html
ReactDOM.render(
    <Routes history={browserHistory} />,
    document.getElementById('root')
);
