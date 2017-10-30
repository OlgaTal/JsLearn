/* eslint-disable new-cap, no-underscore-dangle, no-param-reassign */

import express from 'express';
const router = module.exports = express.Router();
import Game from '../models/game';

router.get('/', (req, res) => {
  res.render('games/index');
});

router.post('/', (req, res) => {
  const g = new Game(req.body);
  g.word = Game.getWord();
  g.guess = g.word.split('').map(() => '*').join('');
  g.save(() => {
    res.send({ id: g._id, name: g.name, guess: g.guess, didWin: g.didWin, tries: g.tries });
  });
});

router.put('/:id/guess', (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    const guess = [...game.guess];
    for (let i = 0; i < game.word.length; i++) {
      if (game.word[i] === req.body.letter) {
        guess[i] = req.body.letter;
      }
    }

    game.clock = req.body.clock;
    game.tries -= 1;
    game.guesses.push(req.body.letter);
    game.guess = guess.join('');
    game.didWin = !guess.some(l => l === '*');
    game.save(() => {
      res.send({ guess: game.guess, didWin: game.didWin, tries: game.tries });
    });
  });
});
