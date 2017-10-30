import React from 'react';
import SubBucket from './SubBucket';

class Bucket extends React.Component{
  constructor(props){
    super(props);
    this.state = {odds: [], evens: [] };
    this.update = this.update.bind(this);
  }

  update(){
    const num = this.refs.num.value;
    const evens = this.state.evens;
    const odds = this.state.odds;
    this.refs.num.value = '';

    if (num % 2 === 0) {
      evens.push(num);
    } else {
      odds.push(num);
    }

    this.setState({ evens, odds });
    console.log('evens:', evens);
    console.log('odds:', odds);
  }

  render(){
    return (
      <div>
        <h3>Bucket</h3>
        <p>
          <input ref='num' type='text' />
          <button onClick={this.update} style={{margin: '0px 0px 0px 20px'}}>Add</button>
        </p>
        <SubBucket title='Evens' arr={this.state.evens} />
        <SubBucket title='Odds' arr={this.state.odds} />
      </div>
    );
  }
}

export default Bucket;
