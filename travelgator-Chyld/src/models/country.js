/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: { type: String, required: true },
  photos: [{ type: String }],
  balance: { type: Number, default: 0 },
  cities: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Country', countrySchema);
