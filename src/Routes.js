/**
 * Created by Kat on 12/11/2016.
 */
import React from 'react';
// Import router
import { Router, Route } from 'react-router';

// Import all components
// import Page from './Directory';
import App from './App';

// Add routes to components, components load in root div in index.html
const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App} />
        <Route path="*" component={App} />
    </Router>
);

export default Routes;