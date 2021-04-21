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

//posts a new training record for an individual
router.post('/training', (req, res) => {
  const newTraining = req.body;
  knex('training_completions')
    .insert({training_id: newTraining.training_id, 
             user_id: newTraining.user_id, 
             completion_date: newTraining.completion_date})
    .then(data => res.status(201).json(newTraining))
})


//updates a training record for an individual
router.put('/training', (req, res) => {
  const updatedTraining = req.body;
  knex('training_completions')
    .where({training_id: updatedTraining.training_id, user_id: updatedTraining.user_id})
    .update({
      completion_date: updatedTraining.completion_date})
    .then(data => res.status(200).send('Training Updated'))
})




module.exports = router;
