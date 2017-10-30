/* eslint-disable new-cap, consistent-return */

import express from 'express';
import Game from '../models/game';
import bodyValidator from '../validators/games/body';
const router = module.exports = express.Router();

// create
router.post('/', (req, res) => {
  const game = new Game(req.body);
  game.save(() => {
    res.send({ game });
  });
});

// move
router.put('/:id/move', bodyValidator, (req, res) => {
  Game.findById(req.params.id).populate(['p0', 'p1']).exec((_, game) => {
    const error = game.move(res.locals);
    game.finalize(() => {
      const message = error && error.message;
      res.status(error ? 400 : 200).send({ message, game });
    });
  });
});
