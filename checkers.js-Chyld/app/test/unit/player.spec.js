/* eslint-disable no-unused-expressions, no-underscore-dangle, func-names */

const expect = require('chai').expect;
const sinon = require('sinon');
const Player = require('../../dst/models/player');

describe('Player', () => {
  beforeEach(() => {
    sinon.stub(Player, 'find').yields(null, []);
  });

  afterEach(() => {
    Player.find.restore();
  });

  describe('constructor', () => {
    it('should create a Player object', (done) => {
      const p = new Player({ username: 'dan' });
      p.validate(err => {
        expect(err).to.be.undefined;
        expect(p.username).to.equal('dan');
        expect(p._id).to.be.ok;
        expect(p.dateCreated).to.be.ok;
        done();
      });
    });

    it('should NOT create a Player object - duplicate username', (done) => {
      Player.find.yields(null, [{ username: 'frank' }]);
      const p = new Player({ username: 'frank' });
      p.validate(err => {
        expect(err).to.be.ok;
        sinon.assert.calledWith(Player.find, { username: 'frank' });
        done();
      });
    });
  });
});
