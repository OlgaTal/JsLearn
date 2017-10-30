/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import DriverCreate from './DriverCreate';
import DriverList from './DriverList';

export default class Drivers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drivers: [] };
    this.create = this.create.bind(this);
    this.complete = this.complete.bind(this);
    this.nuke = this.nuke.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location => {
      if (location.pathname.trim() === '/drivers') {
        this.refresh(location.query.page);
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  refresh(page = 0) {
    axios.get(`http://localhost:9001/api/persons?page=${page}`)
    .then((response) => {
      this.setState({ drivers: response.data.content });
    });
  }

  create(e) {
    e.preventDefault();

    const name = this.refs.driver.refs.name.value;
    const age = this.refs.driver.refs.age.value;
    const gender = this.refs.driver.refs.gender.value;
    const payment = this.refs.driver.refs.payment.value;

    console.log('New Driver:', name, age, gender, payment);

    axios.post('http://localhost:9001/api/persons', { name, age, gender, payment })
    .then(() => browserHistory.push('/drivers?page=0'));
  }

  nuke(e) {
    // const id = e.target.attributes['data-id'].value;
    // axios.delete(`http://localhost:9001/api/drivers/${id}`)
    // .then(() => browserHistory.push('/drivers?page=0'));
  }

  complete(e) {
    // const id = e.target.attributes['data-id'].value;
    // axios.patch(`http://localhost:9001/api/drivers/${id}/complete`)
    // .then((response) => {
    //   const Drivers = this.state.drivers.map(t => (t.id == id) ? response.data : t);
    //   this.setState({ Drivers });
    // });
  }

  render() {
    return (
      <div>
        <DriverCreate ref="driver" create={this.create} />
        <DriverList page={this.props.location.query.page} drivers={this.state.drivers} />
      </div>
    );
  }
}
