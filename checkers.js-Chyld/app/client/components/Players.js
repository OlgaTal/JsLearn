/* eslint-disable max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import axios from 'axios';
import moment from 'moment';

export default class Players extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.state = { errors: [], players: [] };
  }

  componentDidMount() {
    axios.get('/api/players')
    .then((rsp) => {
      this.setState({ players: rsp.data.players });
    });
  }

  componentWillUnmount() {
  }

  create(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    axios.post('/api/players', { username })
    .then(() => {
      this.setState({ errors: [] });
    })
    .then(() => {
      return axios.get('/api/players');
    })
    .then((rsp) => {
      this.setState({ players: rsp.data.players });
    })
    .catch(err => {
      this.setState({ errors: JSON.parse(err.response.data).messages });
    });
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-3">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input ref="username" type="text" className="form-control" id="username" />
              </div>
              <button onClick={this.create} type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
          <div className="col-xs-3">
            <ul className="bg-danger">
              {this.state.errors.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
          </div>
          <div className="col-xs-6">
          </div>
        </div>

        <div className="row">
          <div className="col-xs-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>username</th>
                  <th>wins</th>
                  <th>loses</th>
                  <th>created</th>
                </tr>
              </thead>
              <tbody>
                {this.state.players.map(p => (
                  <tr key={p._id}>
                    <td>{p.username}</td>
                    <td>{p.wins}</td>
                    <td>{p.loses}</td>
                    <td>{moment(p.dateCreated).format('MMMM Do YYYY')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-xs-4"></div>
        </div>

      </div>
    );
  }
}
