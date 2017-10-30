/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import CarCreate from './CarCreate';
import CarList from './CarList';

export default class Cars extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: [], drivers: [] };
    this.createCar = this.createCar.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location => {
      if (location.pathname.trim() === '/cars') {
        this.refresh(location.query.page);
      }
    });

    this.getAllDrivers();
  }

  componentWillUnmount() {
    this.unlisten();
  }

  getAllDrivers() {
    console.log('here');
    axios.get('http://localhost:9001/api/persons/all')
    .then((response) => {
      console.log('+++Drivers', response.data);
      this.setState({ drivers: response.data });
    });
  }

  refresh(page = 0) {
    axios.get(`http://localhost:9001/api/cars?page=${page}`)
    .then((response) => {
      this.setState({ cars: response.data.content });
    });
  }

  createCar(e) {
    e.preventDefault();

    const year = this.refs.car.refs.year.value;
    const make = this.refs.car.refs.make.value;
    const model = this.refs.car.refs.model.value;
    const personId = this.refs.car.refs.owner.value;

    console.log('New Car:', year, make, model, personId);

    axios.post('http://localhost:9001/api/cars', { year, make, model, personId })
    .then(() => browserHistory.push('/cars?page=0'));
  }

  render() {
    return (
      <div>
        <CarCreate ref="car" create={this.createCar} drivers={this.state.drivers} />
        <CarList page={this.props.location.query.page} cars={this.state.cars} />
      </div>
    );
  }
}
