/* eslint-disable func-names, no-param-reassign, consistent-return, no-underscore-dangle */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const personSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  photo: { type: String, required: true },
  money: { type: Number, required: true },
  cities: [{ type: mongoose.Schema.ObjectId, ref: 'City' }],
  createdAt: { type: Date, default: Date.now },
});

personSchema.methods.purchase = function (city, cb) {
  if (this.money < city.amount) return cb();

  this.money -= city.amount;
  city.balance += city.amount;

  this.cities.push(city._id);
  city.people.push(this._id);

  this.save(() => {
    city.save(() => {
      cb();
    });
  });
};

module.exports = mongoose.model('Person', personSchema);
