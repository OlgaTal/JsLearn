/* eslint-disable react/no-string-refs, react/prop-types, max-len */

import React from 'react';
import axios from 'axios';

export default class ClaimCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
    this.selectDriver = this.selectDriver.bind(this);
    // this.refresh = this.refresh.bind(this);
  }

  selectDriver(e) {
    const driver = this.refs.owner.value;

    console.log('Selected driver:', driver);

    axios.get('http://localhost:9001/api/cars/all')
    .then((response) => {
      this.setState({ cars: response.data.filter(c => c.personId == driver ) });
    });
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input ref="date" type="date" className="form-control" id="date" />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input ref="time" type="time" className="form-control" id="time" />
              </div>

              <div className="form-group">
                <label htmlFor="photo">Photo</label>
                <input ref="photo" type="text" className="form-control" id="photo" />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input ref="location" type="text" className="form-control" id="location" />
              </div>

              <div className="form-group">
                <label htmlFor="owner">Owner</label>
                <select ref="owner" onChange={this.selectDriver} className="form-control" id="owner" >
                  <option value="">Select</option>
                   {this.props.drivers.map(d => (
                     <option key={d.id} value={d.id}>{d.name}</option>
                   ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="car">Car</label>
                <select ref="car" type="text" className="form-control" id="car" >
                  <option value="">Select</option>
                   {this.state.cars.map(c => (
                     <option key={c.id} value={c.id}>{c.year}-{c.make}-{c.model}</option>

                   ))}
                </select>
              </div>

              <button onClick={this.props.create} type="submit" className="btn btn-success">Add Claim</button>
            </form>
          </div>
          <div className="col-xs-9" />
        </div>

      </div>
    );
  }
}
