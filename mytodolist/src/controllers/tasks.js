/* eslint-disable new-cap */

import express from 'express';
import Priority from '../models/priority';
import Category from '../models/category';
import Task from '../models/task';
import ViewTask from '../models/view-task';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Task.find((err, tasks) => {
    const priorities = Priority.find();
    const viewTasks = tasks.map(t => new ViewTask(t, priorities));
    res.render('tasks/index', { viewTasks });
  });
});

router.get('/new', (req, res) => {
  const priorities = Priority.find();
  const categories = Category.find();
  res.render('tasks/new', { priorities, categories });
});

router.post('/', (req, res) => {
  const task = new Task(req.body);
  task.save(() => {
    res.redirect('/tasks');
  });
});

router.post('/:id/complete', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, { isComplete: true }, (err, result) => {
    res.redirect('/tasks');
  });
});

router.post('/:id/delete', (req, res) => {
  Task.findByIdAndRemove(req.params.id, (err, result) => {
    res.redirect('/tasks');
  });
});

router.get('/:id/edit', (req, res) => {
  res.render('tasks/new');
});

router.post('/:id', (req, res) => {
  res.redirect('/tasks');
});
