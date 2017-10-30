/* eslint-disable new-cap, consistent-return */

import express from 'express';
import _ from 'lodash';
import Player from '../models/player';
const router = module.exports = express.Router();

// index
router.get('/', (req, res) => {
  Player.find().exec((err, players) => {
    res.send({ players });
  });
});

// show
router.get('/:id', (req, res) => {
  Player.findById(req.params.id).exec((err, player) => {
    if (err) {
      return res.status(400).send({ message: err.message });
    }

    res.send({ player });
  });
});

// create
router.post('/', (req, res) => {
  Player.create(req.body, (err, player) => {
    if (err) {
      const messages = _.map(err.errors, e => e.message);
      return res.status(400).send({ messages });
    }

    res.send({ player });
  });
});
