// import React, { Component } from 'react';
import React from 'react';
import InputArea from './InputArea';
import BeerList from './BeerList';

class BeerListContainer extends React.Component {
  constructor(props) {
    super(props );
    this.state = {
      beers: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(name) {
    this.setState({
      beers: [...this.state.beers, name]
    });
  }

  render() {
    return (
      <div>
        <InputArea onSubmit={this.addItem}/>
        <BeerList/>
        <ul/>
      </div>
    , document.getElementById('root'));
  }
}

export default BeerListContainer;
