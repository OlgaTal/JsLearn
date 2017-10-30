/* eslint-disable no-use-before-define, func-names, eqeqeq, consistent-return, no-underscore-dangle, max-len */

import mongoose from 'mongoose';
import _ from 'lodash';
const Schema = mongoose.Schema;
const [CLOSED, OPEN, P1, P2] = ['-', ' ', 'x', 'o'];

const schema = new Schema({
  board: { type: [Schema.Types.Mixed], default: board() },
  p0: { type: mongoose.Schema.ObjectId, ref: 'Player' },
  p1: { type: mongoose.Schema.ObjectId, ref: 'Player' },
  winner: { type: mongoose.Schema.ObjectId, ref: 'Player' },
  current: { type: Number, default: 0 },
  dateCreated: { type: Date, default: Date.now },
});

schema.methods.finalize = function (cb) {
  const opponent = this.current === 0 ? 'o' : 'x';
  const didWin = _.flatten(this.board).filter(n => n.toLowerCase() === opponent).length === 0;

  if (didWin) {
    this[`p${this.current}`].wins += 1;
    this[`p${(this.current + 1) % 2}`].loses += 1;
  }

  this.current = (this.current + 1) % 2;
  this.markModified('board');

  this.save(() => {
    if (!didWin) { return cb(); }

    this.model('Player').findByIdAndUpdate(this.p0._id, { wins: this.p0.wins, loses: this.p0.loses }, () => {
      this.model('Player').findByIdAndUpdate(this.p1._id, { wins: this.p1.wins, loses: this.p1.loses }, cb);
    });
  });
};

schema.methods.move = function ({ from, to }) {
  const north = this.current === 0 ? +1 : -1;
  const sigil = this.current === 0 ? P1 : P2;
  const source = this.board[from.y][from.x];
  const target = this.board[to.y][to.x];
  if (source.toLowerCase() !== sigil) { return new Error('Selected wrong piece'); }
  const isKing = source === sigil.toUpperCase();
  const kingRow = this.current === 0 ? 7 : 0;
  const isOpen = target === OPEN;
  if (!isOpen) { return new Error('Destination not available'); }
  const goingUp = to.y * north > from.y * north;
  if (!goingUp && !isKing) { return new Error('Wrong direction'); }
  const [isMove, isJump] = [1, 2].map(n => Math.abs(from.y - to.y) === n && Math.abs(from.x - to.x) === n);
  if (!isMove && !isJump) { return new Error('Not a legal move or jump'); }
  this.board[to.y][to.x] = source;
  this.board[from.y][from.x] = OPEN;
  if (isJump) { this.board[from.y + ((to.y - from.y) / 2)][from.x + ((to.x - from.x) / 2)] = OPEN; }
  if (to.y === kingRow) { this.board[to.y][to.x] = sigil.toUpperCase(); }
};

function paint(sigil, x, y) {
  return (x + y) % 2 ? sigil : CLOSED;
}

function board() {
  return _.range(8).map(y => _.range(8).map(x => {
    if (y < 3) { return paint(P1, x, y); }
    if (y > 4) { return paint(P2, x, y); }
    return paint(OPEN, x, y);
  }));
}

module.exports = mongoose.model('Game', schema);
