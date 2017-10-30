/* eslint-disable new-cap, no-underscore-dangle */

import express from 'express';
import Section from '../models/section';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/types', (req, res) => {
  const types = Section.getTypes();
  res.send({ types });
});

router.get('/', (req, res) => {
  Section.find().populate('seats').exec((err, sections) => res.send({ sections }));
});

router.post('/', (req, res) => {
  const seats = Array(req.body.quantity * 1).fill(0).map((_, i) => new Seat({ name: `S-${i}` }));
  const section = new Section(req.body);
  Seat.insertMany(seats, (err, docs) => {
    section.seats = docs.map(d => d._id);
    section.save(() => {
      res.send({ section, seats });
    });
  });
});
