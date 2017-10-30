/* eslint-disable react/no-string-refs, react/prop-types, max-len */

import React from 'react';

export default class DriverCreate extends React.Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input ref="name" type="text" className="form-control" id="name" />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input ref="age" type="text" className="form-control" id="age" />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select ref="gender" type="text" className="form-control" id="gender" >
                  <option value="">Select</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="payment">Monthly Payment</label>
                <input ref="payment" type="text" className="form-control" id="payment" />
              </div>

              <button onClick={this.props.create} type="submit" className="btn btn-success">Add Driver</button>
            </form>
          </div>
          <div className="col-xs-9" />
        </div>

      </div>
    );
  }
}
