/* eslint-disable func-names, no-param-reassign, consistent-return, no-underscore-dangle */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const seatSchema = new Schema({
  type: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  taken: [{ type: Number, required: true, default: [] }],
  balance: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Seat', seatSchema);
