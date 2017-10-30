/* eslint-disable no-use-before-define */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String, minlength: 3, validate: { validator: duplicateUsernameValidator } },
  wins: { type: Number, min: 0, default: 0 },
  loses: { type: Number, min: 0, default: 0 },
  dateCreated: { type: Date, default: Date.now },
});

function duplicateUsernameValidator(username, cb) {
  this.model('Player').find({ username }, (err, players) => {
    cb(!players.length);
  });
}

module.exports = mongoose.model('Player', schema);
