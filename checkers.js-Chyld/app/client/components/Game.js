/* eslint-disable max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import axios from 'axios';
import Board from './Board';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.create = this.create.bind(this);
    this.state = { players: [], board: [], game: {} };
  }

  componentDidMount() {
    axios.get('/api/players')
    .then((rsp) => {
      this.setState({ players: rsp.data.players });
    });
  }

  componentWillUnmount() {
  }

  create() {
    const p0 = this.refs.p1.value;
    const p1 = this.refs.p2.value;

    axios.post('/api/games', { p0, p1 })
    .then((rsp) => {
      this.setState({ game: rsp.data.game, board: rsp.data.game.board });
    });
  }

  render() {
    return (
      <div>

        <div className="row">
          <div className="col-xs-3">
            <h3><small>Player 1</small></h3>
            <select className="form-control" ref="p1">
              {this.state.players.map(p => <option key={p._id} value={p._id}>{p.username}</option>)}
            </select>
          </div>
          <div className="col-xs-3">
            <h3><small>Player 2</small></h3>
            <select className="form-control" ref="p2">
              {this.state.players.map(p => <option key={p._id} value={p._id}>{p.username}</option>)}
            </select>
          </div>
          <div className="col-xs-6">
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-2">
            <div className="well center-block" style={{ marginTop: '25px' }}>
              <button onClick={this.create} className="btn btn-success btn-lg btn-block">Play</button>
            </div>
          </div>
          <div className="col-xs-8"></div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            <Board current={this.state.game.current} id={this.state.game._id} board={this.state.board} />
          </div>
          <div className="col-xs-6"></div>
        </div>

      </div>
    );
  }
}
