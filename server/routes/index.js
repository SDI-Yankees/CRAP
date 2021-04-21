var express = require('express');
//const { development } = require('../knexfile.js');
var router = express.Router();
var environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(require('../knexfile.js')[environment]);

// module.exports = require('knex')(config);
/* GET home page. */
router.get('/', (req, res) => {
  data = {
      greeting: "Welcome to the CRAP!"
  };
  res.status(200).json(data);
});
router.get('/:userId', (req, res)=>{
  const userId = req.params.userId;
  knex.select('*')
  .from('training_completions')
  .join('trainings', {'training_completions.training_id': 'trainings.id'})
  .join('users', {'training_completions.user_id': 'users.id'})
  .where({user_id: userId})
  .then(data => res.status(200).json(data))
})
router.post('/training', (req, res) => {
  const newTraining = req.body;
  // if(knex('training_completions').)
  knex('training_completions')
    .insert({training_id: newTraining.training_id, 
             user_id: newTraining.user_id, 
             completion_date: newTraining.completion_date})
    .then(data => res.status(201).json(newTraining))
})



module.exports = router;
