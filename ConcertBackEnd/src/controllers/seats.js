/* eslint-disable new-cap */

import express from 'express';
import Seat from '../models/seat';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Seat.find((err, seats) => res.send({ seats }));
});

router.post('/', (req, res) => {
  const s = new Seat(req.body);
  s.save(() => {
    res.send();
  });
});

router.post('/purchase', (req, res) => {
  const seat = new Seat(req.body);
  console.log('seatID @ backend', seat._id);
  console.log('seatbalance1 @ backend', seat.balance);
  seat.balance = seat.taken.length * seat.price;
  Seat.findByIdAndUpdate({ _id: seat._id }, {taken: seat.taken, balance: seat.balance }, () => {
    console.log('seatbalance2 @ backend', seat.balance);
    res.send(seat);
  });
});
