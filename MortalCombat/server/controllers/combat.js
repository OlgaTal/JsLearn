/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
// import Combat from '../models/combat';
import Creature from '../models/creature';
import Weapon from '../models/weapon';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  console.log('getCombat');

  Creature.find((err1, creatures) => {
    Weapon.find((err2, weapons) => {
      console.log('creatures', creatures);
      console.log('weapons', weapons);
      res.send({ creatures, weapons });
    });
  });
});

// router.post('/', (req, res) => {
//   const creature = new Creature(req.body);
//   creature.save(() => {
//     res.send();
//   });
// });
