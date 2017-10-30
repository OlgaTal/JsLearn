/* eslint-disable react/no-string-refs, react/prop-types, max-len */

import React from 'react';

export default class CarCreate extends React.Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-3">
            <form>

              <div className="form-group">
                <label htmlFor="owner">Owner</label>
                <select ref="owner" type="text" className="form-control" id="owner" >
                  <option value="">Select</option>
                   {this.props.drivers.map(d => (
                     <option key={d.id} value={d.id}>{d.name}</option>
                   ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="year">Year</label>
                <input ref="year" type="text" className="form-control" id="year" />
              </div>

              <div className="form-group">
                <label htmlFor="make">Make</label>
                <input ref="make" type="text" className="form-control" id="make" />
              </div>

              <div className="form-group">
                <label htmlFor="model">Model</label>
                <input ref="model" type="text" className="form-control" id="model" />
              </div>

              <button onClick={this.props.create} type="submit" className="btn btn-success">Add Car</button>
            </form>
          </div>
          <div className="col-xs-9" />
        </div>

      </div>
    );
  }
}
