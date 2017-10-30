/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import ClaimCreate from './ClaimCreate';
// import ClaimList from './ClaimList';

export default class Claims extends React.Component {
  constructor(props) {
    super(props);

    this.state = { claims: [], drivers: [], cars: [] };
    this.createClaim = this.createClaim.bind(this);
    this.complete = this.complete.bind(this);
    this.nuke = this.nuke.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location => {
      if (location.pathname.trim() === '/claims') {
        this.refresh(location.query.page);
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  refresh(page = 0) {
    axios.get('http://localhost:9001/api/persons/all')
    .then((response) => {
      this.setState({ drivers: response.data });
    });

    // axios.get(`http://localhost:9001/api/claims?page=${page}`)
    // .then((response) => {
    //   this.setState({ claims: response.data.content });
    // });
  }

  createClaim(e) {
    e.preventDefault();

    const date = this.refs.claim.refs.date.value;
    const time = this.refs.claim.refs.time.value;
    const photo = this.refs.claim.refs.photo.value;
    const location = this.refs.claim.refs.location.value;

    console.log('New Claim:', date, time, photo, location);
    // axios.post('http://localhost:9001/api/claims', { name, category, due })
    // .then(() => browserHistory.push('/Claims?page=0'));
  }

  nuke(e) {
    // const id = e.target.attributes['data-id'].value;
    // axios.delete(`http://localhost:9001/api/claims/${id}`)
    // .then(() => browserHistory.push('/claims?page=0'));
  }

  complete(e) {
    // const id = e.target.attributes['data-id'].value;
    // axios.patch(`http://localhost:9001/api/claims/${id}/complete`)
    // .then((response) => {
    //   const Claims = this.state.claims.map(t => (t.id == id) ? response.data : t);
    //   this.setState({ Claims });
    // });
  }

  render() {
    return (
      <div>
        <ClaimCreate ref="claim" create={this.createClaim} drivers={this.state.drivers} />
      </div>
    );
  }
}

// <ClaimList page={this.props.location.query.page} claims={this.state.claims} />
