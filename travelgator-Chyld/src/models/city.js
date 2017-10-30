/* eslint-disable func-names */

import mongoose from 'mongoose';
import request from 'request';
import Yelp from 'yelp';
const Schema = mongoose.Schema;
const yelp = new Yelp({
  consumer_key: 'sPSJANAuKyV8-pe9u9q8eQ',
  consumer_secret: 'FrUASmlnPzU5_uE5WlaMnD1PaLs',
  token: '0hWKXUMpqZWEUvxN6ymDbDIl0R43LbdU',
  token_secret: 'f0mrYhtdSz8ZuAHSk4nX_LqmgEY',
});

const citySchema = new Schema({
  name: { type: String, required: true },
  photos: [{ type: String }],
  balance: { type: Number, default: 0 },
  amount: { type: Number, required: true },
  country: { type: mongoose.Schema.ObjectId, ref: 'Country' },
  people: [{ type: mongoose.Schema.ObjectId, ref: 'Person' }],
  createdAt: { type: Date, default: Date.now },
});

citySchema.methods.getWeather = function (cb) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.name}&appid=692d9840933cc93352daaab2d7bb4ac7&units=imperial`;
  request({ url, json: true }, cb);
};

citySchema.methods.getYelp = function (cb) {
  yelp.search({ term: 'food', location: this.name })
  .then(data => cb(data));
};

module.exports = mongoose.model('City', citySchema);
