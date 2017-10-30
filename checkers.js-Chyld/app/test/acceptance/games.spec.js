/* eslint-disable no-unused-expressions, no-underscore-dangle, max-len */

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../../dst/server');
const cp = require('child_process');

describe('games', () => {
  beforeEach((done) => {
    cp.execFile(`${__dirname}/../scripts/populate.sh`, { cwd: `${__dirname}/../scripts` }, () => {
      done();
    });
  });

  describe('put /api/games/:id/move', () => {
    // *** NORMAL MOVEMENT ************************************************** //

    it('should move a game piece - p0 1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890004/move')
      .send({ from: { x: 2, y: 3 }, to: { x: 1, y: 4 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p0 2', (done) => {
      request(app)
      .put('/api/games/012345678901234567890004/move')
      .send({ from: { x: 2, y: 3 }, to: { x: 3, y: 4 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p1 1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890005/move')
      .send({ from: { x: 5, y: 4 }, to: { x: 4, y: 3 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p1 2', (done) => {
      request(app)
      .put('/api/games/012345678901234567890005/move')
      .send({ from: { x: 5, y: 4 }, to: { x: 6, y: 3 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    // *** KING MOVEMENT **************************************************** //

    it('should move a game piece - king p0 1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890006/move')
      .send({ from: { x: 2, y: 1 }, to: { x: 1, y: 0 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - king p0 2', (done) => {
      request(app)
      .put('/api/games/012345678901234567890006/move')
      .send({ from: { x: 2, y: 1 }, to: { x: 3, y: 0 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - king p1 1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890007/move')
      .send({ from: { x: 5, y: 6 }, to: { x: 4, y: 7 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - king p1 2', (done) => {
      request(app)
      .put('/api/games/012345678901234567890007/move')
      .send({ from: { x: 5, y: 6 }, to: { x: 6, y: 7 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    // *** NORMAL JUMPING *************************************************** //

    it('should move a game piece - p0 1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890004/move')
      .send({ from: { x: 2, y: 1 }, to: { x: 0, y: 3 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p0 2', (done) => {
      request(app)
      .put('/api/games/012345678901234567890004/move')
      .send({ from: { x: 2, y: 1 }, to: { x: 4, y: 3 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p1 1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890005/move')
      .send({ from: { x: 5, y: 6 }, to: { x: 3, y: 4 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p1 2', (done) => {
      request(app)
      .put('/api/games/012345678901234567890005/move')
      .send({ from: { x: 5, y: 6 }, to: { x: 7, y: 4 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    // *** KING JUMPING ***************************************************** //

    it('should move a game piece - p0 1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890006/move')
      .send({ from: { x: 2, y: 3 }, to: { x: 0, y: 1 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p0 2', (done) => {
      request(app)
      .put('/api/games/012345678901234567890006/move')
      .send({ from: { x: 2, y: 3 }, to: { x: 4, y: 1 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p1 1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890007/move')
      .send({ from: { x: 5, y: 4 }, to: { x: 3, y: 6 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p1 2', (done) => {
      request(app)
      .put('/api/games/012345678901234567890007/move')
      .send({ from: { x: 5, y: 4 }, to: { x: 7, y: 6 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    // *** BECOME KING ****************************************************** //

    it('should move a game piece - p0', (done) => {
      request(app)
      .put('/api/games/012345678901234567890004/move')
      .send({ from: { x: 1, y: 6 }, to: { x: 0, y: 7 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    it('should move a game piece - p1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890005/move')
      .send({ from: { x: 6, y: 1 }, to: { x: 7, y: 0 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });

    // *** NO BACKWARDS MOVE ************************************************ //

    it('should move a game piece - p0', (done) => {
      request(app)
      .put('/api/games/012345678901234567890004/move')
      .send({ from: { x: 1, y: 6 }, to: { x: 0, y: 5 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(400);
        expect(rsp.body.message).to.equal('Wrong direction');
        done();
      });
    });

    it('should move a game piece - p1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890005/move')
      .send({ from: { x: 6, y: 1 }, to: { x: 5, y: 2 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(400);
        expect(rsp.body.message).to.equal('Wrong direction');
        done();
      });
    });

    // *** NO SIDEWAYS MOVE ************************************************* //

    it('should move a game piece - p0', (done) => {
      request(app)
      .put('/api/games/012345678901234567890004/move')
      .send({ from: { x: 1, y: 6 }, to: { x: 2, y: 6 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(400);
        expect(rsp.body.message).to.equal('Destination not available');
        done();
      });
    });

    it('should move a game piece - p1', (done) => {
      request(app)
      .put('/api/games/012345678901234567890005/move')
      .send({ from: { x: 6, y: 1 }, to: { x: 5, y: 1 } })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(400);
        expect(rsp.body.message).to.equal('Destination not available');
        done();
      });
    });
  });

  describe('post /api/games', () => {
    it('should create a game', (done) => {
      request(app)
      .post('/api/games')
      .send({ player1: '012345678901234567890001', player2: '012345678901234567890002' })
      .end((err, rsp) => {
        expect(rsp.status).to.equal(200);
        done();
      });
    });
  });
});
