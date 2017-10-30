/* eslint-disable new-cap, no-param-reassign */

import express from 'express';
import Section from '../models/section';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.put('/:id/purchase', (req, res) => {
  Seat.findByIdAndUpdate(req.params.id, { isPurchased: true }, (err1, seat) => {
    Section.findById(req.body.sectid, (err2, section) => {
      section.total += section.amount;
      section.save(() => {
        res.send({ section, seat });
      });
    });
  });
});
