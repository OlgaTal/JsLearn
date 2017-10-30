/* eslint-disable func-names */

import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
const Schema = mongoose.Schema;

let words = fs.readFileSync(path.join(__dirname, '../../data/web2'), { encoding: 'utf8' });
words = words.split('\n').map(w => w.toLowerCase());

const gameSchema = new Schema({
  name: String,
  tries: { type: Number, default: 5 },
  clock: { type: Number, default: 60 },
  word: String,
  guess: String,
  didWin: { type: Boolean, default: false },
  guesses: [String],
  createdAt: { type: Date, default: Date.now },
});

gameSchema.statics.getWord = function () {
  const rnd = Math.floor(Math.random() * words.length);
  return words[rnd];
};

module.exports = mongoose.model('Game', gameSchema);
