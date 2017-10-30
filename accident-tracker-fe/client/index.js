/* eslint-disable import/imports-first */
/* global document */

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Drivers from './components/Drivers';
import Cars from './components/Cars';
import Claims from './components/Claims';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="drivers" component={Drivers} />
      <Route path="cars" component={Cars} />
      <Route path="claims" component={Claims} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
    </Route>
  </Router>
  , document.getElementById('root'));
