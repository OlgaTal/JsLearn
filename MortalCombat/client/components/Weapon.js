/* eslint-disable jsx-quotes, react/prop-types */

import React from 'react';

class Weapon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { types: [] };
    this.create = this.create.bind(this);
  }

  create(event) {
    const name = this.refs.name.value;
    const image = this.refs.image.value;
    const attack = this.refs.attack.value;
    const body = JSON.stringify({ name, image, attack });

    console.log('create:', body);

    fetch('//localhost:3333/weapons', {
            method: 'post', body,
            headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => this.refresh());

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Weapon Creator</h1>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' ref='name' type='text' />
          </div>
          <div className='form-group'>
            <label>Image</label>
            <input className='form-control' ref='image' type='text' />
          </div>
          <div className='form-group'>
            <label>Attack</label>
            <input className='form-control' ref='attack' type='text' />
          </div>
          <button className='btn btn-primary' onClick={this.create}>Create</button>
        </form>
      </div>
    );
  }
}

export default Weapon;
