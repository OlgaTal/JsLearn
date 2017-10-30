/* eslint-disable func-names */

import mongoose from 'mongoose';
import options from '../../data/sections.json';
const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  type: { type: String, required: true },
  amount: { type: Number, default: 0 },
  total: { type: Number, default: 0 },
  seats: [{ type: mongoose.Schema.ObjectId, ref: 'Seat' }],
  createdAt: { type: Date, default: Date.now },
});

sectionSchema.statics.getTypes = function () {
  return options;
};

module.exports = mongoose.model('Section', sectionSchema);
