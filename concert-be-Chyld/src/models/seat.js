/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  name: { type: String, required: true },
  isPurchased: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Seat', seatSchema);
