/* eslint-disable new-cap */

import express from 'express';
import Person from '../models/person';
import Country from '../models/country';
import City from '../models/city';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Person.find((err, people) => res.render('people/index', { people }));
});

router.get('/new', (req, res) => {
  res.render('people/new');
});

router.get('/:id', (req, res) => {
  Person.findById(req.params.id).populate('cities').exec((err1, person) => {
    Country.find((err2, countries) => res.render('people/show', { person, countries }));
  });
});

router.post('/:id/purchase', (req, res) => {
  Person.findById(req.params.id, (err1, person) => {
    City.findById(req.body.city, (err2, city) => {
      person.purchase(city, () => {
        res.redirect(`/people/${req.params.id}`);
      });
    });
  });
});

router.post('/', (req, res) => {
  const p = new Person(req.body);
  p.save(() => {
    res.redirect('/people');
  });
});
