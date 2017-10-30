/* eslint-disable new-cap */

import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  res.render('home/index');
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/faq', (req, res) => {
  res.render('home/faq');
});

router.get('/twitch', (req, res) => {
  res.render('home/twitch');
});

router.get('/coins', (req, res) => {
  res.render('home/coins');
});
