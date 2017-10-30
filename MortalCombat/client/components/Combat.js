/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';
import Fighter from './Fighter';

class Combat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.creatureChange = this.creatureChange.bind(this);
    this.weaponChange = this.weaponChange.bind(this);
    this.fight = this.fight.bind(this);
  }

  fight() {
    const p = [{ cr: this.state.creature1, attack: this.state.weapon1.attack, id: 'f1' },
             { cr: this.state.creature2, attack: this.state.weapon2.attack, id: 'f2' }];

    // who's the 1st:
    let first = this.randomI(2);
    // who's the 2nd.
    let second = 1 - first;

    // while (p[0].cr.health > 0 && p[1].cr.health > 0){
    //
    //
    //   // hit the target
    //   let damage = this.randomI(p[first].attack + 1);
    //
    //   console.log(p[first].cr.name, ' hits, damage: ', damage, p[second].cr.name, ' hew health: ', p[second].cr.health - damage);
    //   p[second].cr.health -= damage;
    //
    //   document.getElementById('f1').innerHTML = p[0].cr.health;
    //   document.getElementById('f2').innerHTML = p[1].cr.health;
    //
    //   // switch
    //   first = 1 - first;
    //   second = 1 - second;
    // }

    this.melee(p[first], p[second]);

    // decision:
    this.updateDB(p[0]);
    this.updateDB(p[1]);
  }

  melee(attacker, defender) {
        // hit the target
    let damage = this.randomI(attacker.attack + 1);

    console.log(attacker.cr.name, ' hits, damage: ', damage, defender.cr.name, ' hew health: ', defender.cr.health - damage);
    defender.cr.health -= damage;

    document.getElementById(defender.id).innerHTML = defender.cr.health < 0 ? 0 : defender.cr.health;

    if (defender.cr.health > 0) {
      setTimeout(() => {
        this.melee(defender, attacker);
      }, 50);
    }
  }

  updateDB(fighter) {
    const win = fighter.cr.health > 0 ? 1 : 0;
    const lost = 1 - win;
    const id = fighter.cr._id;
    const body = JSON.stringify({ win, lost });

    fetch(`//localhost:3333/creatures/${id}/update`, { method: 'put', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((r) => {
      //
      console.log(fighter.cr.name, 'updated');
    });
  }

  randomI(maxV) {
    return Math.floor(Math.random() * maxV);
  }

  creatureChange(event) {
    console.log('COMBAT: creatureChange');

    const id = event.currentTarget.value;
    const fighterId = event.currentTarget.getAttribute('data-id');

    fetch(`//localhost:3333/creatures/${id}/get`)
      .then(r => r.json())
      .then(j => {

        if (fighterId === '1') {
          this.setState({ creature1: j.creature });
        } else {
          this.setState({ creature2: j.creature });
        }
      });
  }

  weaponChange(event) {
    console.log('COMBAT: weaponChange');

    const id = event.currentTarget.value;
    const fighterId = event.currentTarget.getAttribute('data-id');

    fetch(`//localhost:3333/weapons/${id}/get`)
      .then(r => r.json())
      .then(j => {

        if (fighterId === '1') {
          this.setState({ weapon1: j.weapon });
        } else {
          this.setState({ weapon2: j.weapon });
        }
      });
  }

  render() {
    const creature1 = this.state.creature1;
    const creature2 = this.state.creature2;
    let c1Health = '';
    let c2Health = '';

    if (creature1) {
      c1Health = creature1.health;
    }
    if (creature2) {
      c2Health = creature2.health;
    }

    return (
      <div>
        <div className='row'>
          <div className='col-xs-4'>
            <Fighter fighterId="1" creature={this.state.creature1} weapon={this.state.weapon1} onCreatureChange={this.creatureChange} onWeaponChange={this.weaponChange} />
          </div>
          <div className='col-xs-4'>
          </div>
          <div className='col-xs-4'>
            <Fighter fighterId="2" creature={this.state.creature2} weapon={this.state.weapon2} onCreatureChange={this.creatureChange} onWeaponChange={this.weaponChange} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-4 display-health' id='f1'>{c1Health}
          </div>
          <div className='col-xs-4'>
            <button onClick={this.fight} className='btn-primary'>Fight</button>
          </div>
          <div className='col-xs-4 display-health' id='f2'>{c2Health}
          </div>
        </div>
      </div>
    );
  }
}

export default Combat;
