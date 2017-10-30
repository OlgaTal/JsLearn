/* eslint-disable new-cap, no-underscore-dangle, max-len */

import express from 'express';
import City from '../models/city';
import Country from '../models/country';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  City.find().exec((err, cities) => res.render('cities/index', { cities }));
});

router.get('/new', (req, res) => {
  Country.find((err, countries) => res.render('cities/new', { countries }));
});

router.get('/:id', (req, res) => {
  City.findById(req.params.id).populate(['country', 'people']).exec((err1, city) => {
    city.getWeather((err2, rsp, weather) => {
      city.getYelp(food => {
        res.render('cities/show', { city, weather, food });
      });
    });
  });
});

router.post('/', (req, res) => {
  const city = new City(req.body);
  city.photos.push(req.body.photo);
  city.save(() => {
    Country.findOneAndUpdate({ _id: req.body.country }, { $push: { cities: city._id } }, () => {
      res.redirect('/cities');
    });
  });
});
