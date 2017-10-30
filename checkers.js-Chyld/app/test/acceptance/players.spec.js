/* eslint-disable no-unused-expressions, no-underscore-dangle, max-len */

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../dst/server');
const cp = require('child_process');

describe('players', () => {
  beforeEach((done) => {
    cp.execFile(`${__dirname}/../scripts/populate.sh`, { cwd: `${__dirname}/../scripts` }, () => {
      done();
    });
  });

  describe('get /api/players/:id', () => {
    it('should get single player', (done) => {
      request(app)
      .get('/api/players/012345678901234567890001')
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        expect(rsp.body.player._id).to.equal('012345678901234567890001');
        done();
      });
    });

    it('should NOT get single player - bad id', (done) => {
      request(app)
      .get('/api/players/bad')
      .end((err, rsp) => {
        expect(rsp.status).to.equal(400);
        expect(rsp.body.message).to.equal('Cast to ObjectId failed for value "bad" at path "_id"');
        done();
      });
    });
  });

  describe('get /api/players', () => {
    it('should get all players', (done) => {
      request(app)
      .get('/api/players')
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        expect(rsp.body.players).to.have.length(2);
        done();
      });
    });
  });

  describe('post /api/players', () => {
    it('should create a player', (done) => {
      request(app)
      .post('/api/players')
      .send({ username: 'sam' })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        expect(rsp.body.player.username).to.equal('sam');
        done();
      });
    });

    it('should NOT create a player - duplicate username', (done) => {
      request(app)
      .post('/api/players')
      .send({ username: 'bob' })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(400);
        expect(rsp.body.messages[0]).to.equal('Validator failed for path `username` with value `bob`');
        done();
      });
    });
  });
});
