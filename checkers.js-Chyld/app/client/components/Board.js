/* eslint-disable new-cap, react/prop-types, max-len, arrow-body-style, no-underscore-dangle */

import React from 'react';
import axios from 'axios';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.state = { board: [], current: 0 };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(props) {
    this.setState({ board: props.board, current: props.current });
  }

  componentWillUnmount() {
  }

  select(e) {
    const [x, y] = e.target.attributes['data-coordinates'].value.split(',');

    if (this.state.from) {
      const id = this.refs.board.attributes.id.value;
      this.state.to = { x, y };

      axios.put(`/api/games/${id}/move`, { from: this.state.from, to: this.state.to })
      .then((rsp) => {
        this.setState({ board: rsp.data.game.board, current: rsp.data.game.current });
      });

      this.state.to = this.state.from = null;
    } else {
      this.state.from = { x, y };
    }
  }

  render() {
    return (
      <div ref="board" id={this.props.id} className="board">
        {this.state.board.map((cols, y) => {
          return (
            <div className="boardrow" key={y}>
              {cols.map((col, x) => {
                const checker = col === '-' ? 'closed' : 'open';
                const normalized = col.toLowerCase().trim().replace('-', '');
                const active = ((normalized === 'x' && this.state.current === 0) || (normalized === 'o' && this.state.current === 1)) ? 'active' : '';
                const king = (active === 'active') && (col === 'X' || col === 'O') ? 'king' : '';
                const data = col === '-' ? '' : col;
                return <div data-coordinates={`${x},${y}`} onClick={this.select} className={`${checker} ${active} ${king}`} key={x}>{data}</div>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
