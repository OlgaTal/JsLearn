/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Creature from '../models/creature';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Creature.find((err, creatures) => res.send({ creatures }));
});

router.get('/:id/get', (req, res) => {
  const id = req.params.id;
  Creature.findById(id, (err, creature) => res.send({ creature }));
});

router.post('/', (req, res) => {
  const creature = new Creature(req.body);
  console.log('new creature', creature);
  creature.save(() => {
    res.send();
  });
});

router.put('/:id/update', (req, res) => {
  const win = req.body.win * 1;
  const lost = req.body.lost * 1;

  const id = req.params.id;
  Creature.findById(id, (err, creature) => {
    console.log('found creature', creature);
    creature.wins += win;
    creature.losses += lost;
    console.log('after update', creature);
    creature.save(() => {
      res.send();
    });
  });
});
