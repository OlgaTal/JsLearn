/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

class Fighter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [], weapons: [] };
  }

  componentDidMount() {
    console.log('fighterComponentDidMount');
    fetch('//localhost:3333/combat')
      .then(r => r.json())
      .then(j => {

        console.log('creatures', j.creatures);
        console.log('weapons', j.weapons);

        this.setState({ creatures: j.creatures, weapons: j.weapons });
      });
  }

  render() {
    const creature = this.props.creature;
    const weapon = this.props.weapon;
    let cImg = '';
    let cName = '';
    let wImg = '';
    let wName = '';
    if (creature) {
      cImg = creature.image;
      cName = creature.name;
    }
    if (weapon) {
      wImg = weapon.image;
      wName = weapon.name;
    }

    return (
      <div>
        <h4>{cName} {wName}</h4>
        <div className='row'>
          <div className='col-xs-5'>
            <select ref='fighter' data-id={this.props.fighterId} onChange={this.props.onCreatureChange}>
              <option>Select a fighter</option>
              {this.state.creatures.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
            </select>
          </div>
          <div className='col-xs-5'>
            <select ref='fighter' data-id={this.props.fighterId} onChange={this.props.onWeaponChange}>
              <option>Select a weapon</option>
              {this.state.weapons.map(w => <option key={w._id} value={w._id}>{w.name}</option>)}
            </select>
          </div>
          <div className='col-xs-2'>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-5'>
            <img src={cImg} className='display-image' />
          </div>
          <div className='col-xs-5'>
            <img src={wImg} className='display-image' />
          </div>
          <div className='col-xs-2'>
          </div>
        </div>

      </div>
    );
  }
}

export default Fighter;
