var express = require('express');
var router = express.Router();
var environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(require('../knexfile.js')[environment]);

//returns all trainings in trainings table
router.get('/', (req, res) => {
  knex.select('*')
  .from('trainings')
  .then(data => res.status(200).json(data))
})

router.post('/', (req, res) => {
  const newTraining = req.body;
  knex('trainings')
  .insert({
    name: newTraining.name,
    category: newTraining.category,
    days_valid: newTraining.days_valid
  })
  .then(data => res.status(201).json(newTraining))
})

module.exports = router;
