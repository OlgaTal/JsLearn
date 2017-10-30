/* eslint-disable new-cap, max-len */

import express from 'express';
import Country from '../models/country';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Country.find().populate('cities').exec((err, countries) => res.render('countries/index', { countries }));
});

router.get('/new', (req, res) => {
  res.render('countries/new');
});

router.get('/:id', (req, res) => {
  Country.findById(req.params.id).populate('cities').exec((err, country) => res.render('countries/show', { country }));
});

router.get('/:id/cities', (req, res) => {
  Country.findById(req.params.id).populate('cities').exec((err, country) => {
    res.send({ country });
  });
});

router.post('/', (req, res) => {
  const c = new Country(req.body);
  c.photos.push(req.body.photo);
  c.save(() => {
    res.redirect('/countries');
  });
});
