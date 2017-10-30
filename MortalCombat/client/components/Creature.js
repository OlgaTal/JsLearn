/* eslint-disable jsx-quotes, react/prop-types */

import React from 'react';

class Creature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { types: [] };
    this.create = this.create.bind(this);
  }

  create(event) {
    const name = this.refs.name.value;
    const image = this.refs.image.value;
    const body = JSON.stringify({ name, image });

    console.log('create:', body);

    fetch('//localhost:3333/creatures', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => this.refresh());

    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Creature Creator</h1>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' ref='name' type='text' />
          </div>
          <div className='form-group'>
            <label>Image</label>
            <input className='form-control' ref='image' type='text' />
          </div>
          <button className='btn btn-primary' onClick={this.create}>Create</button>
        </form>
      </div>
    );
  }
}

export default Creature;
