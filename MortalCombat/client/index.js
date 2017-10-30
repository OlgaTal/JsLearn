import App from './components/App';
import Creature from './components/Creature';
import Weapon from './components/Weapon';
import Combat from './components/Combat';
import Home from './components/Home';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="creature" component={Creature} />
      <Route path="weapon" component={Weapon} />
      <Route path="combat" component={Combat} />
    </Route>
  </Router>
  , document.getElementById('root'));
