import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/creature">New Creature</Link></li>
          <li><Link to="/weapon">New Weapon</Link></li>
          <li><Link to="/combat">Combat</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
