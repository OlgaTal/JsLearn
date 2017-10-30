/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';


router.post('/', (req, res) => {
  const game = new Game(req.body);
  game.save(() => {
    res.send(game);
  });
});

router.post('/:id/save', (req, res) => {
  // 1: head
  // 2: tails

  const coin = Math.floor(Math.random() * 2);
  console.log('is:', req.params.id);

  Game.findById(req.params.id, (err, game) => {
    console.log('coin:', coin, 'old game:', game);
    if (coin === 1) {
      game.heads = game.heads + 1;
    } else {
      game.tails = game.tails + 1;
    }
    console.log('new game:', game);
    game.update(game, () => {
      Game.findById(req.params.id, (err, game1) => {
        res.send(game1);
      });
    });
  });
});
