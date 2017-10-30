/* eslint-disable no-unused-expressions, no-underscore-dangle, func-names */

const expect = require('chai').expect;
const Game = require('../../dst/models/game');
let g;

describe('Game', () => {
  beforeEach(() => {
    g = new Game({ p0: '01234567890123456789000a', p1: '01234567890123456789000b' });
    g.board = [
      ['-', ' ', '-', ' ', '-', ' ', '-', 'x'],
      [' ', '-', 'o', '-', 'x', '-', ' ', '-'],
      ['-', 'x', '-', 'x', '-', 'x', '-', 'x'],
      [' ', '-', ' ', '-', 'o', '-', ' ', '-'],
      ['-', ' ', '-', ' ', '-', ' ', '-', ' '],
      [' ', '-', ' ', '-', 'o', '-', 'o', '-'],
      ['-', 'o', '-', 'x', '-', 'o', '-', 'o'],
      [' ', '-', ' ', '-', ' ', '-', ' ', '-']];
  });

  describe('constructor', () => {
    it('should create a Game object', (done) => {
      const g1 = new Game({ p0: '012345678901234567890123', p1: '012345678901234567890124' });
      g1.validate(err => {
        expect(err).to.be.undefined;
        expect(g1.board).to.have.length(8);
        expect(g1._id).to.be.ok;
        expect(g1.dateCreated).to.be.ok;
        done();
      });
    });
  });

  describe('#move', () => {
    it('should move a piece', () => {
      const o = { from: { x: 1, y: 2 }, to: { x: 2, y: 3 } };
      const err = g.move(o);
      expect(err).to.be.undefined;
      expect(g.board[2][1]).to.equal(' ');
      expect(g.board[3][2]).to.equal('x');
    });

    it('should jump a piece', () => {
      const o = { from: { x: 3, y: 2 }, to: { x: 5, y: 4 } };
      const err = g.move(o);
      expect(err).to.be.undefined;
      expect(g.board[2][3]).to.equal(' ');
      expect(g.board[3][4]).to.equal(' ');
      expect(g.board[4][5]).to.equal('x');
    });

    it('should move to become king', () => {
      const o = { from: { x: 3, y: 6 }, to: { x: 4, y: 7 } };
      const err = g.move(o);
      expect(err).to.be.undefined;
      expect(g.board[7][4]).to.equal('X');
    });

    it('should NOT move a piece - not owner', () => {
      const o = { from: { x: 6, y: 5 }, to: { x: 7, y: 4 } };
      const err = g.move(o);
      expect(err.message).to.equal('Selected wrong piece');
    });

    it('should NOT move a piece - invalid destination', () => {
      const o = { from: { x: 1, y: 2 }, to: { x: 1, y: 3 } };
      const err = g.move(o);
      expect(err.message).to.equal('Destination not available');
    });

    it('should NOT move a piece - wrong direction', () => {
      const o = { from: { x: 1, y: 2 }, to: { x: 0, y: 1 } };
      const err = g.move(o);
      expect(err.message).to.equal('Wrong direction');
    });

    it('should NOT move a piece - illegal move', () => {
      const o = { from: { x: 1, y: 2 }, to: { x: 6, y: 7 } };
      const err = g.move(o);
      expect(err.message).to.equal('Not a legal move or jump');
    });
  });
});
