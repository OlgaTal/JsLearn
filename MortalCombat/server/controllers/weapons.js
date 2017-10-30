/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Weapon from '../models/weapon';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Weapon.find((err, weapons) => res.send({ weapons }));
});

router.get('/:id/get', (req, res) => {
  const id = req.params.id;
  Weapon.findById(id, (err, weapon) => res.send({ weapon }));
});

router.post('/', (req, res) => {
  const weapon = new Weapon(req.body);
  console.log('new weapon', weapon);
  weapon.save(() => {
    res.send();
  });
});
